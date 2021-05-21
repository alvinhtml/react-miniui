/* @flow */

import * as React from 'react';
import ReactDOM from 'react-dom';
import {ActiveModal} from './modal';
import {ActiveSheet} from './sheet';

export class Miniui extends React.Component<Props, State> {

	render() {
		return (
			<div>
				<ActiveModal />
				<ActiveSheet />
			</div>
		)
	}
}
