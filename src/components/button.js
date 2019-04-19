/* @flow */

import React, {Component} from 'react';

import '../scss/button.scss';

import {Icon} from './icon';


type Props = {
	color: string;
	icon: string;
	type: string;
	size: string;
	space: string;
	htmlType: string;
	href: string;
	target: string;
	disabled: bool;
	loading: bool;
	onClick: Funcion;
	className: string;
}



export const Button = (props: Props) => {
	const classNames = ['button'];

	const {color, type, size, block, icon, loading, space, className, ...others} = props;
	const {disabled} = props;

	if (color) {
		classNames.push(color);
	}

	if (type) {
		classNames.push(type);
	}

	if (size) {
		classNames.push(size);
	}

	if (space) {
		classNames.push(space);
	}

	if (block) {
		classNames.push('button-block');
	}

	if (icon) {
		classNames.push('label');
	}

	if (loading) {
		classNames.push('loading');
	}

	if (disabled) {
		classNames.push('disabled');
	}

	const icons = icon ? <Icon icon={icon} /> : null;

	if (className) {
		classNames.push(className);
	}

	if (props.href) {
		return (<a className={classNames.join(' ')} {...others}>{icons}{props.children}</a>);
	} else {
		return (<button className={classNames.join(' ')} {...others}>{icons}{props.children}</button>);
	}
}




type groupProps = {
	className: string;
}

export const ButtonGroup = (props: groupProps) => {
	const classNames = ['button-group'];

	const {color, type, size, block, icon, loading, space, className, ...others} = props;
	const {disabled} = props;

	if (className) {
		classNames.push(className);
	}

	return (<div className={classNames.join(' ')} {...others}>{props.children}</div>);
}
