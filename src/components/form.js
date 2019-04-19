/* @flow */

import React, { Component } from 'react';

import '../scss/form.scss';

type Props = {
	color: string;
	block: bool;
	type: string;
	size: string;
	htmlType: string;
	disabled: bool;
	onChange: Funcion;
	value: string;
	defaultValue: string;
	addonBefore: mixed;
	addonAfter: mixed;
	className: string;

}


export const Input = (props: Props) => {
	const classNames = ['input'];
	const LabelClassName = [];

	const {color, block, size, addonAfter, addonBefore, className, ...others} = props;
	const {disabled} = props;

	if (color) {
		classNames.push(color);
	}

	if (size) {
		classNames.push(size);
	}

	if (disabled) {
		classNames.push('disabled');
	}

	if (className) {
		classNames.push(className);
	}

	if (addonBefore || addonAfter) {
		let addon;
		if (addonBefore) {
			LabelClassName.push('input-prepend');
			addon = addonBefore;
		}

		if (addonAfter) {
			addon = addonAfter;
			LabelClassName.push('input-append');
		}

		if (block) {
			LabelClassName.push("input-block");
		}

		return (
			<label className={LabelClassName.join(' ')}>
				<input className={classNames.join(' ')} {...others} />
				<span className="add-on">{addon}</span>
			</label>
		);
	} else {
		if (block) {
			classNames.push("input-block");
		}

		return (<input className={classNames.join(' ')} {...others} />);
	}
}


type TextareaProps = {
	className: string;
	block: bool;
}
export const Textarea = (props: TextareaProps) => {
	const classNames = ['textarea'];
	const LabelClassName = [];

	const {color, block, ...others} = props;
	const {disabled} = props;

	if (color) {
		classNames.push(color);
	}

	if (disabled) {
		classNames.push('disabled');
	}

	if (block) {
		classNames.push("input-block");
	}

	return (<textarea className={classNames.join(' ')} {...others} />);
}
