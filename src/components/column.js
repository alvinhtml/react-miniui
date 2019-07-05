/* @flow */

import React from 'react';

type Props = {
	span: string;
	grid: string;
	offset: string;
	order: string;
	flex: string;
	className: string;
	children: any;
}



export const Col = (props: Props) => {
	const classNames = [];
	const {span, grid, offset, flex, className, ...others} = props;

	if (span) {
		classNames.push(`col-span${span}`);
		if (offset) {
			classNames.push(`offset-span${offset}`);
		}
	}

	if (grid) {
		classNames.push(`col-grid${grid}`);
		if (grid) {
			classNames.push(`offset-grid${offset}`);
		}
	}

	if (flex) {
		classNames.push(`flex${flex}`);
	}

	if (className) {
		classNames.push(className);
	}

	return (<div className={classNames.join(' ')} {...others}>{props.children}</div>);
};


type RowProps = {
	className: string;
	children: any;
}
export const Row = (props: RowProps) => {
	const classNames = ['row'];
	const {className, ...others} = props;

	if (className) {
		classNames.push(className);
	}
	return (<div className={classNames.join(' ')} {...others}>{props.children}</div>);
};

type FlexProps = {
	className: string;
	children: any;
}

export const Flex = (props: FlexProps) => {
	const classNames = [];
	const {className, ...others} = props;

	if (className) {
		classNames.push(className);
	}

	return (<div className={classNames.join(' ')} {...others}>{props.children}</div>);
};
