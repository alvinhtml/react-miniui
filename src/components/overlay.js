/* @flow */

import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import '../scss/overlay.scss';


class RefHolder extends Component {
  render() {
    return this.props.children;
  }
}

type Props = {
	title: string;
	content: any;
	position: string;
}

type State = {
	isVisible: boolean;
	style: Object;
	classNames: Array;
}

export class OverlayTrigger extends Component<Props, State> {

	constructor(props) {
		super(props);

		this.trigger = React.createRef();
		this.overlayer = React.createRef();

		this.state = {
			isVisible: false,
			style: {},
			classNames: []
		};
	}

	// 获取元素离窗口上边的距离
	getOffsetTop(elements: Object){
	    let top = elements.offsetTop;
	    let parent = elements.offsetParent;
	    while( parent != null ){
	        top += parent.offsetTop;
	        parent = parent.offsetParent;
	    };
	    return top;
	};

	// 获取元素离窗口左边的距离
	getOffsetLeft(elements: Object ){
	    let left = elements.offsetLeft;
	    let parent = elements.offsetParent;
	    while( parent != null ){
	        left += parent.offsetLeft;
	        parent = parent.offsetParent;
	    };
	    return left;
	};

	getTrigger = () => ReactDOM.findDOMNode(this.trigger.current);

	getOverlayer = () => ReactDOM.findDOMNode(this.overlayer.current);


	handleMouseOver(event: any) {
		this.setState({
			isVisible: true
		}, () => {
			this.show();
		});
	}

	// 计算 trigger 的宽高和位置
	getTriggerAttr = (trigger) => ({
		width: trigger.offsetWidth,
		height: trigger.offsetHeight,
		offsetTop: this.getOffsetTop(trigger) - document.documentElement.scrollTop,
		offsetLeft: this.getOffsetLeft(trigger)
	});

	// 计算 overlayer 的宽高和位置
	getOverlayerAttr = (overlayer) => ({
		width: overlayer.offsetWidth,
		height: overlayer.offsetHeight,
		offsetTop: this.getOffsetTop(overlayer),
		offsetLeft: this.getOffsetLeft(overlayer)
	});

	// 计算屏幕区域
	getScreenArea = () => ({
		scrollTop: document.documentElement.scrollTop,
		height: window.screen.availHeight,
		width: window.screen.availWidth
	});

	// 获取 overlayer 弹出的方向
	getDirection = (triggerAttr, overlayerAttr, screenArea) => {
		const {position} = this.props;

		//如果参数设置了位置，直接使用参数
		if (position) {
			return position;
		}

		console.log("triggerAttr", triggerAttr, overlayerAttr, screenArea);

		// 计算当前视窗的边界能否容下弹出框的大小
		const containment = {
			left: triggerAttr.offsetLeft > overlayerAttr.width,
			top: triggerAttr.offsetTop > overlayerAttr.height,
			right: screenArea.width - triggerAttr.offsetLeft - triggerAttr.width >  overlayerAttr.width,
			bottom: screenArea.height - triggerAttr.offsetTop - triggerAttr.height >  overlayerAttr.height
		};

		// 如果参数没有设置位置，则自动计算
		// 向上弹出
		if (containment.left && containment.top && containment.right) {
			return 'top';
		}

		// 向下弹出
		if (containment.left && containment.bottom && containment.right) {
			return 'bottom';
		}

		// 向左弹出
		if (containment.left && containment.bottom && containment.top) {
			return 'left';
		}

		// 向右弹出
		if (containment.right && containment.bottom && containment.top) {
			return 'left';
		}

		return 'top';
	}

	// 计算 overlayer 的坐标
	getPosition = () => {
		const triggerAttr = this.getTriggerAttr(this.getTrigger());
		const overlayerAttr = this.getOverlayerAttr(this.getOverlayer());
		const screenArea  = this.getScreenArea();
		const direction = this.getDirection(triggerAttr, overlayerAttr, screenArea);



		console.log("triggerAttr", triggerAttr, overlayerAttr, screenArea);

		//基于方位计算坐标 (left, top)
		switch (direction) {
			case "top":
				return {
					direction,
				  top    : triggerAttr.offsetTop - ( overlayerAttr.height + 8 ),
				  left   : triggerAttr.offsetLeft + triggerAttr.width / 2 - overlayerAttr.width / 2
				};
			case "bottom":
				return {
					direction,
				  top    : triggerAttr.offsetTop + triggerAttr.height + 8,
				  left   : triggerAttr.offsetLeft + triggerAttr.width / 2 - overlayerAttr.width / 2
				};
			case "right":
				return {
					direction,
				  top    : triggerAttr.offsetTop + triggerAttr.height / 2 - overlayerAttr.height / 2,
				  left   : triggerAttr.offsetLeft + triggerAttr.width + 8
				};
			case "left":
				return {
					direction,
				  top    : triggerAttr.offsetTop + triggerAttr.height / 2 - overlayerAttr.height / 2 - 2,
				  left   : triggerAttr.offsetLeft - overlayerAttr.width - 8
				};
		}

	}

	show() {
		const {title, overlay} = this.props;
		const overlayer = this.getOverlayer();

		console.log("overlay", this.getTrigger());
		console.log("overlay", this.getOverlayer());

		const position = this.getPosition();

		overlayer.style.top = `${position.top}px`;
		overlayer.style.left = `${position.left}px`;

		overlayer.classList.add(position.direction);
		overlayer.classList.add('visible');
	}

	handleMouseOut() {
		this.setState({
			isVisible: false
		});
	}



	render() {

		const {title, children, overlay} = this.props;
		const {isVisible, style} = this.state;
		const child = React.Children.only(children);

		console.log("isVisible", isVisible, style);

		return (
			<>
				<RefHolder ref={this.trigger}>
					{cloneElement(child, {
						onMouseOver: this.handleMouseOver.bind(this),
						onMouseOut: this.handleMouseOut.bind(this)
					})}
				</RefHolder>
				<RefHolder ref={this.overlayer}>
					{isVisible && overlay}
				</RefHolder>
			</>
		);
	}
}


export class Popovers extends Component<{
	title: string,
	className: string,
	style: Object
}> {
	render() {
		const classNames = ['popovers'];
		const {className, children, ...others} = this.props;

		if (className) {
			classNames.push(className);
		}

		return ReactDOM.createPortal(
			<div className={classNames.join(' ')} {...others}>{children}</div>,
			document.body
		);
	}
}

export class Tooltip extends Component<{
	title: string,
	className: string
}> {
	render() {
		const classNames = ['tooltip'];
		const {className, title, children, ...others} = this.props;

		if (className) {
			classNames.push(className);
		}

		return ReactDOM.createPortal(
			<div className={classNames.join(' ')} {...others}>
				{title && <h4>{title}</h4>}
				{children}
			</div>,
			document.body
		);
	}
}
