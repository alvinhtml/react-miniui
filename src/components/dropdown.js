/* @flow */

import React, {Component} from 'react';

import '../scss/dropdown.scss';

import {Icon} from './icon';


type Props = {
	onChange: Funcion;
	className: string;
	color: string;
	placeholder: string;
	isSelect: bool;
}


/*!
 * 下拉菜单对象基类，所有下单菜单组件继承此类
 * @type {Object}
 */
export class Dropdown extends Component <Props> {
	constructor(props) {
		super(props)

		this.state = {
			value: 0,
			opend: false,
			text: '请选择',
		}


		//ES6 类中函数必须手动绑定
		this.mouseupCallback = this.mouseupCallback.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.show = this.show.bind(this);
		this.hide = this.hide.bind(this);
		this.selectEvent = this.selectEvent.bind(this);
		this.refCallback = this.refCallback.bind(this);
	}

	componentWillMount() {
		this.setState({
			value: this.props.value ? this.props.value : 0,
			text: this.props.text ? this.props.text : '请选择'
		})
	}

	//document 点击事件，关闭 dromdown
	mouseupCallback(e) {
		this.hide();
	}

	//展开或关闭 dropdown
	handleClick(event) {
		this.state.opend ? this.hide() : this.show();
	}

	show() {
		// document 绑定 mouseup事件， 触发时关闭 dromdown
		document.addEventListener('mouseup', this.mouseupCallback, false);

		this.setState({
			opend: true
		});
	}

	hide() {
		// 关闭时移除 document mouseup 事件
		document.removeEventListener('mouseup', this.mouseupCallback);

		this.setState({
			opend: false
		});
	}

	refCallback(instance) {
		this.instance = instance
	}

	//阻止 dropdown 鼠标 onMouseUp 事件冒泡
	mouseupEvent(event) {
		event.nativeEvent.stopImmediatePropagation();
		event.stopPropagation();
	}

	selectEvent(e) {
		let target = e.target;

		while(!target.matches('.item')) {
			if (target === e.currentTarget) {
				return false;
			}
			target = target.parentNode;
		}

		this.hide();

		let value = target.getAttribute('value');
		let text = target.textContent;

		this.setState({
			value: value ? value : 0,
			text: text ? text : '请选择'
		})

		//下拉菜单 onchonge 事件
		this.props.onChange && this.props.onChange(value, text);

	}

	render() {
		const {className, placeholder, children, isSelect} = this.props;
		const {opend, value, text} = this.state;

		const classNames = ['dropdown'];

		if (className) {
			classNames.push(className);
		}

		if (isSelect) {
			classNames.push('dropdown-select');
		}



		let childrenToggler = isSelect
			?	(
					<div className="dropdown-header">
						{text}
						<Icon icon="fa-down-dir" />
					</div>
			)
			: <div className="dropdown-header">请选择<Icon icon="fa-down-dir" /></div>;
		let childrenMenu = children;

		if (React.Children.count(children) > 1) {
			childrenToggler = React.Children.toArray(this.props.children);
			childrenMenu = childrenToggler.pop();
		}

		return (
			<div className={classNames.join(' ')} onMouseUp={this.mouseupEvent}>
				<input type="hidden" name={this.props.name} value={value} />
				<div className="dropdown-toggler" onClick={this.handleClick}>
					{childrenToggler}
				</div>
				<div className={`dropdown-main ${opend ? 'visible' : ''}`} onClick={this.selectEvent} ref={this.refCallback}>
					{childrenMenu}
				</div>
			</div>
		)
	}
}

export class Menu extends Component <Props> {
	constructor(props) {
		super(props)

		this.state = {
			searchValue: ''
		}
	}

	handleChange(event: any) {
		const searchValue = event.target.value;
		this.setState({
			searchValue
		});
	}

	render() {
		const classNames = ['menu'];
		const {className, dropArrow, search, children, ...others} = this.props;

		if (className) {
			classNames.push(className);
		}

		if (dropArrow) {
			classNames.push('drop-arrow');
		}

		const searchRegExp = new RegExp(this.state.searchValue);

		return (
			<div className={classNames.join(' ')} {...others}>
				{search && (
					<div className="dropdown-search">
						<label className="input-append input-block">
							<input className="input" type="text" onChange={this.handleChange.bind(this)} value={this.state.searchValue} placeholder="serach" />
							<span className="add-on"><i className="fa-search" /></span>
						</label>
					</div>
				)}
				{search ? children.filter(v => searchRegExp.test(v.props.value)) : children}
			</div>
		)
	}
}

export const Item = (props) => {
	const classNames = ['item'];
	const {className, disabled, ...others} = props;

	if (className) {
		classNames.push(className);
	}

	if (disabled) {
		classNames.push('disabled');
	}

	if (props.href) {
		return (<a className={classNames.join(' ')} {...others}>{props.children}</a>);
	} else {
		return (<div className={classNames.join(' ')} {...others}>{props.children}</div>);
	}
}

export const Option = Item;


export class Select extends Dropdown {
	constructor(props) {
		super(props)
	}

	render() {
		const {search, ...others} = this.props;
		return (
			<Dropdown isSelect={true} {...others}>
				<Menu search={search||false}>
					{this.props.children}
				</Menu>
			</Dropdown>
		)
	}
}