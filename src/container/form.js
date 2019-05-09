import React, { Component } from 'react';

import { Row, Col, Input, Textarea, Icon, FormGroup, Button, Select, Option} from '../index';

export default class ButtonPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'default'
    }
  }

  handlelChange(e: Object) {
    const value = e.target.value;
    this.setState({
      value
    })
  }

  render() {

    const size = [
      'mini',
      'small',
      'medium',
      'large',
      'big',
    ];

    return(
      <div>
        <h1>Form 表单</h1>
        <h2>Ipnut text</h2>
        <Row>
          <Col span="3"><Input block="true" onChange={this.handlelChange.bind(this)} type="text" value={this.state.value} color="default" placeholder="input text" /></Col>
          <Col span="3"><Input block="true" type="text" color="green" placeholder="input text" /></Col>
          <Col span="3"><Input block="true" type="text" color="yellow" placeholder="input text" /></Col>
          <Col span="3"><Input block="true" type="text" color="red" placeholder="input text" /></Col>
        </Row>
        <h2>addonBefore && addonAfter</h2>
        <Row>
          <Col span="6"><Input block="true" addonBefore={<i className="icon-magnifier"></i>} type="text" color="green" placeholder="input text" /></Col>
          <Col span="6"><Input block="true" addonAfter={<i className="icon-plus"></i>} type="text" color="red" placeholder="input text" /></Col>
        </Row>
        <h2>Size</h2>
        <Row>
          {size.map((v, i) => <Input key={v} type="text" placeholder={v} size={v} />)}
        </Row>
        <h2>Disabled</h2>
        <Row>
          <Col span="6"><Input block="true" type="text" disabled col="col-span6" placeholder="disabled" defaultValue="disabled input" /></Col>
        </Row>
        <h2>Form Group</h2>
        <Row>
          <Col span="6">
            <FormGroup>
              <Button color="grey">http://</Button>
              <Input type="text" />
              <Select>
                <Option value=".com">.com</Option>
    						<Option value=".org">.org</Option>
    						<Option value=".net">.net</Option>
              </Select>
            </FormGroup>
          </Col>
          <Col span="6">
            <FormGroup>
              <Input type="text" />
              <Button color="blue">Search</Button>
            </FormGroup>
          </Col>
        </Row>
        <h2>文本框</h2>
        <Row>
          <Col span="10"><Textarea block="true" type="text" placeholder="disabled" defaultValue="textarea" /></Col>
        </Row>
      </div>
    );
  }
}
