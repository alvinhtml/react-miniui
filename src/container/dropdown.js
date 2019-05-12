import React, { Component } from 'react';

import {Row, Col, Icon, Button, Dropdown, Menu, Item, Select, Option, Badge} from '../index';

//Dropdown.Toggler, Dropdown.Menu,  Dropdown.Item

export default class DropdownPage extends Component {

	handleChange(val, text) {
		console.log("val", val, text);
	}

	render() {
		return (
			<div>
        <h1>Dropdown</h1>
        <h2>Dropdown Menu</h2>
        <Row>
					<Col span="4">
						<Dropdown name="phone" value="iphone" onChange={this.handleChange.bind(this)}>
							file <Icon icon="fa-down-dir" />
							<Menu>
								<div className="item" href="#" value="1">New</div>
								<div className="item"><span className="description">ctrl + o</span> Open... </div>
								<div className="item"><span className="description">ctrl + s</span> Save as... </div>
								<div className="item"><span className="description"> ctrl + r </span> Rename </div>
								<div className="item">Make a copy</div>
								<div className="item"><Icon icon="icon-folder" />Move to folder </div>
								<div className="item"><Icon icon="icon-trash" />Move to trash </div>
								<div className="divider" />
								<div className="item"><Badge color="red">363</Badge>Message</div>
								<div className="item">
									<span className="arrow-right"><Icon icon="fa-right-dir-2" /></span> Publish To Web
									<Menu>
										<div className="item">Google Docs</div>
										<div className="item">Google Drive</div>
										<div className="item">Dropbox</div>
										<div className="item">Adobe Creative Cloud</div>
										<div className="item">Private FTP</div>
										<div className="item">Another Service...</div>
									</Menu>
								</div>
								<div className="item">E-mail Collaborators </div>
							</Menu>
						</Dropdown>
					</Col>
				</Row>
				<h2>Dropdown Button</h2>
				<Row>
					<Col span="2">
						<Dropdown name="phone" value="iphone" onChange={this.handleChange.bind(this)}>
							<Button color="blue">请选择 <Icon icon="fa-down-dir" /></Button>
							<Menu>
								<Item value="iphone">iphone</Item>
								<Item value="ipad">ipad</Item>
								<Item value="Macbook Pro">Macbook Pro</Item>
								<Item value="windows phone">windows phone</Item>
							</Menu>
						</Dropdown>
					</Col>
					<Col span="2">
						<Dropdown name="phone" value="iphone" onChange={this.handleChange.bind(this)}>
							<Button color="red">请选择 <Icon icon="fa-down-dir" /></Button>
							<Menu>
								<Item href="http://www.apple.com" target="_blank" value="iphone">iphone</Item>
								<Item href="#" value="ipad">ipad</Item>
								<Item href="#" value="Macbook Pro">Macbook Pro</Item>
								<Item href="#" value="windows phone">windows phone</Item>
							</Menu>
						</Dropdown>
					</Col>
					<Col span="2">
						<Dropdown name="phone" value="iphone" onChange={this.handleChange.bind(this)}>
							<Button color="green">请选择 <Icon icon="fa-down-dir" /></Button>
							<Menu dropArrow={true}>
								<Item value="iphone">iphone</Item>
								<Item value="ipad">ipad</Item>
								<Item value="Macbook Pro">Macbook Pro</Item>
								<Item value="windows phone">windows phone</Item>
							</Menu>
						</Dropdown>
					</Col>
				</Row>
				<h2>Dropdown Select</h2>
        <Row>
					<Col span="2">
						<Select name="phone" value="iphone" onChange={this.handleChange.bind(this)}>
							<Option value="iphone">iphone</Option>
							<Option value="ipad">ipad</Option>
							<Option value="Macbook Pro">Macbook Pro</Option>
							<Option value="windows phone">windows phone</Option>
						</Select>
					</Col>

					<Col span="2">
						<Select name="phone" value="iphone" search={true} onChange={this.handleChange.bind(this)}>
							<Option value="iphone">iphone</Option>
							<Option value="ipad">ipad</Option>
							<Option value="Macbook Pro">Macbook Pro</Option>
							<Option value="windows phone">windows phone</Option>
						</Select>
					</Col>
				</Row>
				<Row style={{height: "600px"}} />
      </div>
		)
	}
}
