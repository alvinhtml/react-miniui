/* @flow */

import React, { Component } from 'react';

import '../scss/badge.scss';

type Props = {
	color: string;
	space: string;
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
