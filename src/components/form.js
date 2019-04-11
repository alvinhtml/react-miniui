/* @flow */

import React, { Component } from 'react';

import '../less/form.less';

type Props = {
	color: ?string;
	col: ?string;
	type: ?string;
	size: ?string;
	htmlType: ?string;
	disabled: ?bool;
	onChange: ?Funcion;
	value: ?string;
	defaultValue: ?string;
	addonBefore: mixed;
	addonAfter: mixed;
}


export const Input = (props: Props) => {
	const className = ['input'];
	const LabelClassName = [];

	const {color, col, size, addonAfter, addonBefore, ...others} = props;
	const {disabled} = props;

	if (color) {
		className.push(color);
	}

	if (size) {
		className.push(size);
	}

	if (disabled) {
		className.push('disabled');
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

		if (col) {
			LabelClassName.push(col);
		}

		return (
			<label className={LabelClassName.join(' ')}>
				<input className={className.join(' ')} {...others} />
				<span className="add-on">{addon}</span>
			</label>
		);
	} else {
		if (col) {
			className.push(col);
		}

		return (<input className={className.join(' ')} {...others} />);
	}
}


export const Textarea = (props: Props) => {
	const className = ['textarea'];
	const LabelClassName = [];

	const {color, col, ...others} = props;
	const {disabled} = props;

	if (color) {
		className.push(color);
	}

	if (col) {
		className.push(col);
	}

	if (disabled) {
		className.push('disabled');
	}

	return (<textarea className={className.join(' ')} {...others} />);
}
