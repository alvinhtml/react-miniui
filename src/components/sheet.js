/* @flow */

import * as React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './button';
import '../scss/sheet.scss';

type Props = {
	className?: string;
  size?: any;
	children: React.Node;
	direction: string;
}

type State = {
	style: Object;
}

export class Sheet extends React.Component<Props, State> {
	state: State = {
		style: {
			left: 'auto',
			top: 'auto',
			right: 'auto',
			bottom: 'auto',

		}
	}

	modalRef: {current: null | HTMLDivElement} = React.createRef();

	static Title(props: {children: React.Node}) {
		return <div className="sheet-header">{props.children}</div>
	}
	static Content(props: {children: React.Node}) {
		return <div className="sheet-content">{props.children}</div>
	}

	componentDidMount() {
		const sheetElement: HTMLDivElement | null = this.modalRef && this.modalRef.current;

		if (sheetElement) {

			this.setState({
				style: {
					left: '50%',
					top: '50%'
				}
			});
		}
	}

	render() {
		const {className = '', size = 'medium', children, direction = 'rtl'} = this.props;
		const {style} = this.state;
		const classNames = ['sheet', size, direction];

		return (
			<>
				<div className="dimmer" id="sheetDimmer" onClick={() => closeSheet()}></div>
				<div className={classNames.join(' ')} id="sheet" ref={this.modalRef} style={style}>
					<span className="sheet-close" onClick={() => closeSheet()}>×</span>
					{children}
				</div>
			</>
		)
	}
}

let modalManager = null;

export function openSheet(modal: React.Node) {
	if (!modalManager) {
    throw new Error('Not active modal manager');
  }

	modalManager.setState({
		modal
	});
}

export function closeSheet() {
	if (!modalManager) {
    throw new Error('Not active modal manager');
  }

	const sheetWarpper: HTMLDivElement | null = modalManager.modalRef.current;
	const sheetElement: HTMLElement | void | null = sheetWarpper && sheetWarpper.children[1];

	if (sheetWarpper && sheetElement) {
		sheetWarpper.classList.add('hidden');

		sheetElement.addEventListener("webkitAnimationEnd", modalManager.animationEndUnmount.bind(modalManager));
		sheetElement.addEventListener("animationend", modalManager.animationEndUnmount.bind(modalManager));
	}
}

export class ActiveModal extends React.Component<{}, {
	modal: React.Node
}> {

	state: {
		modal: React.Node
	} = {
    modal: null
  };

	modalRef: {current: null | HTMLDivElement} = React.createRef();

	componentDidMount() {
		modalManager = this;
	}

	componentWillUnmount() {
		modalManager = null;
	}

	animationEndUnmount() {
		this.setState({
			modal: null
		});
	}

	render() {
		const {modal} = this.state;

		if (!modal) {
			return null;
		}

		const root: ?HTMLBodyElement = document.body;

		if (root instanceof HTMLBodyElement) {
			return ReactDOM.createPortal(
				<div className="sheet-wrapper" ref={this.modalRef}>{modal}</div>,
				root
			);
		}
		return modal;
	}
}

export const Alert = (content: React.Node) => {
	const sheetComponent = (
		<Modal>
			<Modal.Title>提示信息</Modal.Title>
			<Modal.Content>{content}</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => closeSheet()}>关闭</Button>
			</Modal.Actions>
		</Modal>
	);
	openSheet(sheetComponent);
}

export const Confirm = (content: React.Node, callback: Function) => {
	const handleClick = () => {
		callback && callback();
		closeSheet();
	}
	const sheetComponent = (
		<Modal>
			<Modal.Title>提示信息</Modal.Title>
			<Modal.Content>{content}</Modal.Content>
			<Modal.Actions>
				<Button onClick={() => closeSheet()}>取消</Button>
				<Button color="green" onClick={handleClick}>确认</Button>
			</Modal.Actions>
		</Modal>
	);
	openSheet(sheetComponent);
}
