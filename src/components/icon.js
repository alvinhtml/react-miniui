/* @flow */

import React from 'react';

import "../../node_modules/simple-line-icons/css/simple-line-icons.css";
import "../scss/icon.scss";

type Props = {
	icon: string;
	className?: string;
}


export const Icon = React.forwardRef<Props, HTMLElement>(
	function ComponentIcon (props: {
		icon: string;
		className?: string;
	}, ref) {
		const classNames = [];
		const {icon, className, ...others} = props;

		classNames.push(icon);

		if (className) {
			classNames.push(className);
		}

		return (<i ref={ref} className={classNames.join(' ')} {...others}></i>);
	}
);
