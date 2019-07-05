/* @flow */

import React from 'react';

import '../scss/badge.scss';

type Props = {
	color: string;
	space: string;
	className: string;
	children: any;
}


export const Badge = (props: Props) => {
	const classNames = ['badge'];
	const {color, space, className, ...others} = props;

	classNames.push(color);

	if (space) {
		classNames.push(space);
	}

	if (className) {
		classNames.push(className);
	}

	return (<span className={classNames.join(' ')} {...others}>{props.children}</span>);
};
