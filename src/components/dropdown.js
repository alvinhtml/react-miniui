/* @flow */

import * as React from 'react';

import '../scss/dropdown.scss';

import {Icon} from './icon';


type Props = {
	value: string;
	text?: React.Node;
	onChange?: Function;
	className?: string;
	dropArrow?: bool,
	placeholder?: string;
	isSelect?: bool;
	name: string;
	children?: React.Node;
}


/*!
 * 下拉菜单对象基类，所有下单菜单组件继承此类
 * @type {Object}
 */
export class Dropdown extends React.Component <Props, {
		value: string,
		opend: bool,
		text: React.Node
}> {
	constructor(props: Props) {
		super(props)

		this.state = {
			value: '',
			opend: false,
			text: props.text ? props.text : '',
		}
	}

	componentWillMount() {
		const {value, text} = this.props;
		this.setState({
			value: (typeof value === 'undefined') ? '' : value,
			text: (typeof text === 'undefined') ? '' : text
		});
	}

	//document 点击事件，关闭 dromdown
	mouseupCallback() {
		this.hide();
	}

	//展开或关闭 dropdown
	handleClick() {
		this.state.opend ? this.hide() : this.show();
	}

	show() {
		// document 绑定 mouseup事件， 触发时关闭 dromdown
		document.addEventListener('mouseup', this.mouseupCallback.bind(this), false);

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

	//阻止 dropdown 鼠标 onMouseUp 事件冒泡
	mouseupEvent(event: SyntheticEvent<HTMLElement>) {
		event.nativeEvent.stopImmediatePropagation();
		event.stopPropagation();
	}

	selectEvent(e: SyntheticEvent<HTMLElement>) {
		const target = e.target;

		if (target instanceof HTMLElement) {
			let targetEvery = target;

			while (!targetEvery.matches || !targetEvery.matches('.item')) {
				if (targetEvery === e.currentTarget) {
					return false;
				}
				if (targetEvery.parentNode) {
					targetEvery = targetEvery.parentNode;
				} else {
					return false;
				}
			}

			if (targetEvery && targetEvery instanceof HTMLElement) {
				const value = targetEvery.getAttribute('data-value') || '';
				const text = targetEvery.innerText;

				this.setState({
					value,
					text
				});
				this.props.onChange && this.props.onChange(value, text);
			}
		}
		this.hide();
	}

	render() {
		const {className, children, isSelect} = this.props;
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
			: <div className="dropdown-header">{this.props.text}<Icon icon="fa-down-dir" /></div>;
		let childrenMenu = children;

		if (React.Children.count(children) > 1) {
			childrenToggler = React.Children.toArray(this.props.children);
			childrenMenu = childrenToggler.pop();
		}

		return (
			<div className={classNames.join(' ')} onMouseUp={this.mouseupEvent.bind(this)}>
				<input type="hidden" name={this.props.name} value={value} />
				<div className="dropdown-toggler" onClick={this.handleClick.bind(this)}>
					{childrenToggler}
				</div>
				<div className={`dropdown-main ${opend ? 'visible' : ''}`} onClick={this.selectEvent.bind(this)}>
					{childrenMenu}
				</div>
			</div>
		)
	}
}

export class Menu extends React.Component <{
	className?: string,
	dropArrow?: bool,
	search?: bool,
	children: React.ChildrenArray<React.Element<typeof Option>>
}, {
	searchValue: string
}> {
	constructor() {
		super()

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
		const {className, dropArrow, search} = this.props;
		const children = React.Children.toArray(this.props.children);

		if (className) {
			classNames.push(className);
		}

		if (dropArrow) {
			classNames.push('drop-arrow');
		}

		const searchRegExp = new RegExp(this.state.searchValue);

		return (
			<div className={classNames.join(' ')}>
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

export const Item = (props: {
	className?: string,
	disabled?: bool,
	href?: string,
	value: string,
	children: React.Node
}) => {
	const classNames = ['item'];
	const {className, disabled, value, ...others} = props;

	if (className) {
		classNames.push(className);
	}

	if (disabled) {
		classNames.push('disabled');
	}

	if (props.href) {
		return (<a className={classNames.join(' ')} data-value={value} {...others}>{props.children}</a>);
	} else {
		return (<div className={classNames.join(' ')} data-value={value} {...others}>{props.children}</div>);
	}
}

export class Option extends React.Component<{
	className?: string,
	disabled?: bool,
	children: React.Node,
	value: string
}> {
	render() {
		const classNames = ['item'];
		const {className, disabled, value, ...others} = this.props;

		if (className) {
			classNames.push(className);
		}

		if (disabled) {
			classNames.push('disabled');
		}
		return <div className={classNames.join(' ')} data-value={value} {...others}>{this.props.children}</div>
	}
}


export class Select extends React.Component<{
	name: string,
	value?: string,
	search?: bool,
	children: React.ChildrenArray<React.Element<typeof Option>>
	}> {
	render() {
		const children: Array<React.Element<typeof Option>> = React.Children.toArray(this.props.children);
		const {name, search, value = children[0] && children[0].props.value} = this.props;
		const item = children.find((v) => (v.props.value === value));
		const text = item ? item.props.children : '';

		return (
			<Dropdown isSelect={true} value={value} text={text} name={name}>
				<Menu search={search || false}>
					{this.props.children}
				</Menu>
			</Dropdown>
		)
	}
}
