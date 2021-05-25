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
		style: {}
	}

	sheetRef: {current: null | HTMLDivElement} = React.createRef();

	static Title(props: {children: React.Node}) {
		return <div className="sheet-header">{props.children}</div>
	}
	static Content(props: {children: React.Node}) {
		return <div className="sheet-content">{props.children}</div>
	}

	componentDidMount() {
		const {direction} = this.props;
		const sheetElement: HTMLDivElement | null = this.sheetRef && this.sheetRef.current;

		if (sheetElement) {
			const elementRect = sheetElement.getBoundingClientRect();

			if (direction === 'rtl') {
				this.setState({
					style: {
						right: 0
					}
				});
			}
			if (direction === 'ltr') {
				this.setState({
					style: {
						left: 0
					}
				});
			}
			if (direction === 'btt') {
				this.setState({
					style: {
						bottom: 0
					}
				});
			}
			if (direction === 'ttb') {
				this.setState({
					style: {
						top: 0
					}
				});
			}
		}
	}

	render() {
		const {className = '', size = 'medium', children, direction = 'rtl', title} = this.props;
		const {style} = this.state;
		console.log("size", size);
		const classNames = ['sheet', size, direction];

		return (
			<>
				<div className="dimmer" id="sheetDimmer" onClick={() => closeSheet()}></div>
				<div className={classNames.join(' ')} id="sheet" ref={this.sheetRef} style={style}>
					<span className="sheet-close" onClick={() => closeSheet()}>×</span>
					{children}
				</div>
			</>
		)
	}
}

let sheetManager = null;

export function openSheet(title: string, sheet: React.Node, params: Object) {
	if (!sheetManager) {
    throw new Error('Not active sheet manager, Please add &lt;Miniui /&gt; component to root component. http://mui.alvinhtml.com/sheet');
  }

	console.log("typeof ", typeof sheet);

	console.log("title, sheet, direction", title, sheet, direction);

	const {direction = 'rtl', size = 'medium'} = params;

	sheetManager.setState({
		title,
		sheet,
		direction,
		size
	});
}

export function closeSheet() {
	if (!sheetManager) {
    throw new Error('Not active sheet manager, Please add &lt;Miniui /&gt; component to root component. http://mui.alvinhtml.com/sheet');
  }

	const sheetWarpper: HTMLDivElement | null = sheetManager.sheetRef.current;
	const sheetElement: HTMLElement | void | null = sheetWarpper && sheetWarpper.children[1];

	console.log("sheetWarpper", sheetManager.sheetRef);
	console.log("sheetElement", sheetElement);

	if (sheetWarpper && sheetElement) {
		sheetWarpper.classList.add('hidden');

		sheetElement.addEventListener("webkitAnimationEnd", sheetManager.animationEndUnmount.bind(sheetManager));
		sheetElement.addEventListener("animationend", sheetManager.animationEndUnmount.bind(sheetManager));
	}
}

type SheetParams = {
	sheet: React.Node;
	title: string;
	direction: 'rtl' | 'ltr' | 'btt' | 'ttb';
	size: string;
}

export class ActiveSheet extends React.Component<{}, SheetParams> {

	state: SheetParams = {
    sheet: null,
		title: 'Sheet',
		direction: 'rtl',
		size: 'medium'
  };

	sheetRef: {current: null | HTMLDivElement} = React.createRef();

	componentDidMount() {
		sheetManager = this;
	}

	componentWillUnmount() {
		sheetManager = null;
	}

	animationEndUnmount() {
		this.setState({
			sheet: null
		});
	}

	render() {
		const {sheet, title, direction, size} = this.state;

		if (!sheet) {
			return null;
		}

		const root: ?HTMLBodyElement = document.body;

		console.log("sheet", sheet);

		if (root instanceof HTMLBodyElement) {
			// Portal 将提供一种将子节点渲染到 DOM 节点中的方式，该节点存在于 DOM 组件的层次结构之外
			return ReactDOM.createPortal(
				<div className={`sheet-wrapper ${direction}`} ref={this.sheetRef}>
					{sheet &&
						<Sheet title={title} direction={direction} size={size}>
							<Sheet.Title>{title}</Sheet.Title>
							<Sheet.Content>{sheet}</Sheet.Content>
						</Sheet>
					}
				</div>,
				root
			);
		}
		return sheet;
	}
}
