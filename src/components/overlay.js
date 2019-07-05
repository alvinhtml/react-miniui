/* @flow */

import React, { Component, cloneElement} from 'react';
import ReactDOM from 'react-dom';
import '../scss/overlay.scss';

type Props = {
	title: string;
	content: any;
	position: string;
	trigger: string;
  children: any;
  overlay: any;
}

type State = {
	isVisible: boolean;
	classNames: Array<string>;
}

export class OverlayTrigger extends Component<Props, State> {
  trigger: {current: null | HTMLElement}
  overlayer: {current: null | HTMLDivElement}

	constructor() {
		super();

		this.state = {
			isVisible: false,
			classNames: []
		};

    this.trigger = React.createRef();
    this.overlayer = React.createRef();
	}

	// 获取元素离窗口上边的距离
	getOffsetTop(elements: Object) {
    let top = elements.offsetTop;
    let parent = elements.offsetParent;
    while ( parent != null ) {
      top += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return top;
	}

	// 获取元素离窗口左边的距离
	getOffsetLeft(elements: Object ) {
    let left = elements.offsetLeft;
    let parent = elements.offsetParent;
    while ( parent != null ) {
      left += parent.offsetLeft;
      parent = parent.offsetParent;
    }
    return left;
	}

	handleMouseOver() {
		this.setState({
			isVisible: true
		}, () => {
			this.show();
		});
	}

	handleMouseOut() {
		this.setState({
			isVisible: false
		});
	}

	handleClick() {
		this.state.isVisible

		?	this.setState({
			isVisible: false
		})

		: this.setState({
			isVisible: true
		}, () => {
			this.show();
		});
	}

  getScrollTop = () => {
    return document.documentElement ? document.documentElement.scrollTop : 0;
  }

	// 计算 trigger 的宽高和位置
	getTriggerAttr = (trigger: HTMLElement) => ({
		width: trigger.offsetWidth,
		height: trigger.offsetHeight,
		offsetTop: this.getOffsetTop(trigger) - this.getScrollTop(),
		offsetLeft: this.getOffsetLeft(trigger)
	});

	// 计算 overlayer 的宽高和位置
	getOverlayerAttr = (overlayer: HTMLElement) => ({
		width: overlayer.offsetWidth,
		height: overlayer.offsetHeight,
		offsetTop: this.getOffsetTop(overlayer),
		offsetLeft: this.getOffsetLeft(overlayer)
	});

	// 计算屏幕区域
	getScreenArea = () => ({
		scrollTop: this.getScrollTop(),
		height: window.screen.availHeight,
		width: window.screen.availWidth
	});

	// 获取 overlayer 弹出的方向
	getDirection = (triggerAttr: Object, overlayerAttr: Object, screenArea: Object) => {
		const {position} = this.props;

		//如果参数设置了位置，直接使用参数
		if (position) {
			return position;
		}

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
	getPosition = () :{
    direction: string,
    top: number,
    left: number
  } => {
    const trigger = this.trigger.current;
    const overlayer = this.overlayer.current;

    if (trigger instanceof HTMLElement && overlayer instanceof HTMLDivElement) {
			const triggerAttr = this.getTriggerAttr(trigger);
			const overlayerAttr = this.getOverlayerAttr(overlayer);
			const screenArea  = this.getScreenArea();
			const direction = this.getDirection(triggerAttr, overlayerAttr, screenArea);

			//基于方位计算坐标 (left, top)
			switch (direction) {
				case "top":
					return {
						direction,
						top: triggerAttr.offsetTop - ( overlayerAttr.height + 8 ),
						left: triggerAttr.offsetLeft + triggerAttr.width / 2 - overlayerAttr.width / 2
					};
				case "bottom":
					return {
						direction,
						top: triggerAttr.offsetTop + triggerAttr.height + 8,
						left: triggerAttr.offsetLeft + triggerAttr.width / 2 - overlayerAttr.width / 2
					};
				case "right":
					return {
						direction,
						top: triggerAttr.offsetTop + triggerAttr.height / 2 - overlayerAttr.height / 2,
						left: triggerAttr.offsetLeft + triggerAttr.width + 8
					};
				case "left":
					return {
						direction,
						top: triggerAttr.offsetTop + triggerAttr.height / 2 - overlayerAttr.height / 2 - 2,
						left: triggerAttr.offsetLeft - overlayerAttr.width - 8
					};
			}
    }
    return {
      direction: 'top',
      top: 0,
      left: 0
    }
	}

	show() {
		const overlayer = this.overlayer.current;
		const position = this.getPosition();

    if (overlayer instanceof HTMLElement) {
			overlayer.style.top = `${position.top}px`;
			overlayer.style.left = `${position.left}px`;
			overlayer.classList.add(position.direction);
			overlayer.classList.add('visible');
    }
	}


	render() {

		const {children, overlay, trigger} = this.props;
		const {isVisible} = this.state;
		const child = React.Children.only(children);

		return (
			<>
        {trigger === 'click'
          ? cloneElement(child, {
            ref: this.trigger,
            onClick: this.handleClick.bind(this)
          })
          : cloneElement(child, {
            ref: this.trigger,
            onMouseOver: this.handleMouseOver.bind(this),
            onMouseOut: this.handleMouseOut.bind(this)
          })
        }

        {isVisible && cloneElement(overlay, {
          ref: this.overlayer
        })}
			</>
		);
	}
}

type PPops = {
	title: string;
	color: string;
	className: string;
	children: any;
}

export const Popovers = React.forwardRef<PPops, HTMLDivElement>(
	function ComponentPopovers(props: PPops, ref) {
		const classNames = ['popovers'];
		const {className, color, title, children, ...others} = props;

		if (className) {
			classNames.push(className);
		}

		if (color) {
			classNames.push(`pop-${color}`);
		}

		const popover = (
			<div className={classNames.join(' ')} {...others} ref={ref}>
			{title && <h3 className="pop-title">{title}</h3>}
			{children}
			</div>
		)

		const root: ?HTMLBodyElement = document.body;
		if (root instanceof HTMLBodyElement) {
			return ReactDOM.createPortal(
				popover,
				root
			);
		}
		return popover;
	}
);
export {Popovers as Tooltip};
