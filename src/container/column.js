import React, { Component } from 'react';

import { Row, Flex, Col } from '../index';

export default class columnPage extends Component {
  render() {

    return(
      <div>
        <h1 className="section-head">栅格布局</h1>
        <h2>栅格化布局12格分</h2>
        <Row className="demo-row align-center color-white">
          <Col span="1" className="bg-blue">span1</Col>
          <Col span="2" className="bg-blue">col-span2</Col>
          <Col span="3" className="bg-blue">col-span3</Col>
          <Col span="1" className="bg-blue">span1</Col>
          <Col span="2" className="bg-blue">col-span2</Col>
          <Col span="3" className="bg-blue">col-span3</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col span="4" className="bg-blue">col-span4</Col>
          <Col span="4" className="bg-blue">col-span4</Col>
          <Col span="4" className="bg-blue">col-span4</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col span="5" className="bg-blue">col-span5</Col>
          <Col span="7" className="bg-blue">col-span7</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col span="6" className="bg-blue">col-span6</Col>
          <Col span="6" className="bg-blue">col-span6</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col span="4" className="bg-blue">col-span4</Col>
          <Col span="8" className="bg-blue">col-span8</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col span="2" className="bg-blue">col-span2</Col>
          <Col span="6" offset="4" className="bg-blue">col-span6 offset-span4</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col span="4" className="bg-blue">col-span4</Col>
          <Col span="4" className="bg-blue">col-span4</Col>
          <Col span="4" className="bg-blue">col-span4</Col>
        </Row>
        <h2>栅格化布局24格分</h2>
        <Row className="demo-row align-center color-white">
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="1" className="bg-blue">1</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col grid="1" className="bg-blue">1</Col>
          <Col grid="2" className="bg-blue">col-grid2</Col>
          <Col grid="3" className="bg-blue">col-grid3</Col>
          <Col grid="18" className="bg-blue">col-grid18</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col grid="4" className="bg-blue">col-grid4</Col>
          <Col grid="5" className="bg-blue">col-grid5</Col>
          <Col grid="6" className="bg-blue">col-grid6</Col>
          <Col grid="5" className="bg-blue">col-grid5</Col>
          <Col grid="4" className="bg-blue">col-grid4</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col grid="7" className="bg-blue">col-grid7</Col>
          <Col grid="8" className="bg-blue">col-grid8</Col>
          <Col grid="9" className="bg-blue">col-grid9</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col grid="8" className="bg-blue">col-grid10</Col>
          <Col grid="8" offset="8" className="bg-blue">col-grid8 offset-grid8</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col grid="16" offset="8" className="bg-blue">col-grid16 offset-grid8</Col>
        </Row>
        <Row className="demo-row align-center color-white">
          <Col grid="10" className="bg-blue">col-grid10</Col>
          <Col grid="14" className="bg-blue">col-grid14</Col>
        </Row>
        <h2>弹性栅格化布局</h2>
        <Row className="demo-row align-center color-white flex">
          <Col flex="1" className="bg-blue">flex1</Col>
          <Col flex="2" className="bg-teal">flex2</Col>
          <Col flex="3" className="bg-green">flex3</Col>
        </Row>
        <Row className="demo-row align-center color-white flex">
          <Col flex="6" className="bg-red">flex6</Col>
          <Col flex="6" className="bg-pink">flex6</Col>
          <Col flex="6" className="bg-orange">flex6</Col>
          <Col flex="6" className="bg-yellow">flex6</Col>
        </Row>
      </div>
    )
  }
}
