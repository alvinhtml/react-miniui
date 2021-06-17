/* @flow */

import React from 'react';

import '../scss/tabs.scss';

type TabsProps = {
	defaultActiveKey: string;
	onSelect: Function;
	className: string;
}

type TabProps = {
	eventKey: string;
	title: string;
}

type State = {
	activeKey: string;
}

export class Tabs extends React.Component<TabsProps, State> {
	constructor(props: TabsProps) {
		super(props);


		console.log("React.Children", React.Children, props.children);

		this.state = {
			activeKey: props.defaultActiveKey || (Array.isArray(props.children) ? props.children[0].props.eventKey : props.children.props.eventKey)
		}
	}

	handleClick(eventKey: string) {
		this.setState({
			activeKey: eventKey
		});
	}

	render() {
		const {className} = this.props;
		const {activeKey} = this.state;
		const classNames = ['mui-tabs'];

		if (className) {
			classNames.push(className);
		}

		return (
			<div className={classNames.join(' ')} >
				<ul className="tabs-nav">
					{React.Children.map(this.props.children, ({props}, i) => {
						return (
							<li className={activeKey === props.eventKey ? 'active' : ''} key={props.eventKey} onClick={this.handleClick.bind(this, props.eventKey)}>
								{props.title}
							</li>
						)
					})}
				</ul>
				<div className="tabs-body">
					{React.Children.map(this.props.children, ({props}, i) => {
						return activeKey === props.eventKey && props.children
					})}
				</div>
			</div>
		);
	}
}



export const Tab = (props: TabProps) => {
	return <div>{this.props.children}</div>;
};
