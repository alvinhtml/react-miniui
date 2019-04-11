/* @flow */

import React, { Component } from 'react';

import '../less/button.less';

import {Icon} from './icon';


type Props = {
	color: ?string;
	icon: ?string;
	type: ?string;
	htmlType: ?string;
	href: ?string;
	target: ?string;
	disabled: ?bool;
	loading: ?bool;
	onClick: Funcion;
}


export const Button = (props: Props) => {
	const className = ['button'];

	const {color, type, size, block, icon, loading, space, ...others} = props;
	const {disabled} = props;

	if (color) {
		className.push(color);
	}

	if (type) {
		className.push(type);
	}

	if (size) {
		className.push(size);
	}

	if (space) {
		className.push(space);
	}

	if (block) {
		className.push('button-block');
	}

	if (icon) {
		className.push('label');
	}

	if (loading) {
		className.push('loading');
	}

	if (disabled) {
		className.push('disabled');
	}

	const icons = icon ? <Icon icon={icon} /> : null;

	if (props.href) {
		return (<a className={className.join(' ')} {...others}>{icons}{props.children}</a>);
	} else {
		return (<button className={className.join(' ')} {...others}>{icons}{props.children}</button>);
	}
}
