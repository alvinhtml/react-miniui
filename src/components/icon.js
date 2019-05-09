/* @flow */

import React, { Component } from 'react';

import "../../node_modules/simple-line-icons/css/simple-line-icons.css";
import "../scss/icon.scss";

type Props = {
	icon: string;
}


export const Icon = (props: Props) => {
	const classNames = [];
	const {icon, className, ...others} = props;

	classNames.push(icon);

	if (className) {
		classNames.push(className);
	}

	return (<i className={classNames.join(' ')} {...others}></i>);
};
