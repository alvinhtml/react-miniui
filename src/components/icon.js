/* @flow */

import React, { Component } from 'react';

import "../../node_modules/simple-line-icons/css/simple-line-icons.css";

type Props = {
	icon: string;
}


export const Icon = (props: Props) => {
	const {icon, ...others} = props;
	return (<i className={icon} {...others}></i>);
};
