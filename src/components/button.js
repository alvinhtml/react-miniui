/* @flow */

import * as React from 'react';

import '../scss/button.scss';

import {Icon} from './icon';


type Props = {
	color?: string;
	icon?: string;
	type?: string;
	size?: string;
	block?: string;
	space?: string;
	href?: string;
	target?: string;
	disabled?: bool;
	loading?: bool;
	onClick?: Function;
	className?: string;
	children: React.Node;
}

export const Button = React.forwardRef<Props, HTMLElement>(
	function ComponentButton (props: Props, ref) {
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
			return (<a ref={ref} className={classNames.join(' ')} {...others}>{icons}{props.children}</a>);
		} else {
			return (<button ref={ref} className={classNames.join(' ')} {...others}>{icons}{props.children}</button>);
		}
	}
);

type groupProps = {
	className: string;
	children: any;
}

export const ButtonGroup = (props: groupProps) => {
	const classNames = ['button-group'];

	const {className, ...others} = props;

	if (className) {
		classNames.push(className);
	}

	return (<div className={classNames.join(' ')} {...others}>{props.children}</div>);
}
