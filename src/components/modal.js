/* @flow */

import * as React from 'react';
import ReactDOM from 'react-dom';
import '../scss/modal.scss';

type Props = {
	className: string;
  size: any;
	children: React.Node;
}

type State = {
	style: Object;
}

export class Modal extends React.Component<Props, State> {
	state: State = {
		style: {
			marginLeft: 0,
			marginTop: 0,
			left: 0,
			top: 0
		}
	}

	modalRef: {current: null | HTMLDivElement} = React.createRef();

	static Title(props: {children: React.Node}) {
		return <div className="modal-header">{props.children}</div>
	}
	static Content(props: {children: React.Node}) {
		return <div className="modal-content">{props.children}</div>
	}
	static Actions(props: {children: React.Node}) {
		return <div className="modal-actions">{props.children}</div>
	}

	componentDidMount() {
		const modalElement: HTMLDivElement | null = this.modalRef && this.modalRef.current;

		if (modalElement) {
			const {offsetWidth, offsetHeight} = modalElement;
			const windowHeight: number = window.innerHeight;

			this.setState({
				style: {
					marginLeft: - (offsetWidth / 2) + 'px',
					marginTop: - ((windowHeight - 60 < offsetHeight ? windowHeight - 60 : offsetHeight) / 2) + 'px',
					left: '50%',
					top: '50%'
				}
			});
		}
	}

	render() {
		const {className, size, children} = this.props;
		const {style} = this.state;
		const classNames = ['modal'];

		if (size) {
			classNames.push(size);
		}

		if (className) {
			classNames.push(className);
		}

		return (
			<>
				<div className="dimmer" id="modalDimmer" onClick={() => closeModal()}></div>
				<div className={classNames.join(' ')} id="modal" ref={this.modalRef} style={style}>
					<span className="modal-close" onClick={() => closeModal()}>×</span>
					{children}
				</div>
			</>
		)
	}
}

let modalManager = null;

export function showModal(modal: React.Node) {
	if (!modalManager) {
    throw new Error('Not active modal manager');
  }

	modalManager.setState({
		modal
	});
}

export function closeModal() {
	if (!modalManager) {
    throw new Error('Not active modal manager');
  }

	const modalWarpper: HTMLDivElement | null = modalManager.modalRef.current;
	const modalElement: HTMLElement | void | null = modalWarpper && modalWarpper.children[1];

	if (modalWarpper && modalElement) {
		modalWarpper.classList.add('hidden');

		modalElement.addEventListener("webkitAnimationEnd", modalManager.animationEndUnmount.bind(modalManager));
		modalElement.addEventListener("animationend", modalManager.animationEndUnmount.bind(modalManager));
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

	componentWillMount() {
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
				<div className="modal-wrapper" ref={this.modalRef}>{modal}</div>,
				root
			);
		}
		return modal;
	}
}
