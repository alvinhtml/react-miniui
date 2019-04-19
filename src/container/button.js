import React, { Component } from 'react';

import { Button, ButtonGroup } from '../index';

export default class ButtonPage extends Component {
  render() {
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'teal',
      'blue',
      'pink',
      'brown',
      'gray',
      'black'
    ]
    const size = [
      'mini',
      'small',
      'medium',
      'large',
      'big',
    ]
    const icons = [
      'minus',
      'plus',
      'close',
      'check',
      'cloud-download',
      'cloud-upload',
      'social-github',
      'flag'
    ]
    return(
      <div>
        <h1>Button</h1>
        <h3>Basic</h3>
        <div className="row">
          {colors.map(v => <Button type="basic" key={v} color={v}>{v}</Button>)}
          <Button type="basic">deffault</Button>
        </div>
        <h3>Colored</h3>
        <div className="row">
          {colors.map(v => <Button key={v} color={v}>{v}</Button>)}
          <Button>deffault</Button>
        </div>
        <h3>Size</h3>
        <div className="row">
          {size.map((v, i) => <Button key={v} size={v} color={colors[i]}>{v}</Button>)}
        </div>
        <h3>With icon</h3>
        <div className="row">
          {size.map((v, i) => <Button key={v} icon={`icon-${icons[i]}`} size={v} color={colors[i]}>{v}</Button>)}
        </div>
        <h3>Disabled & Loading</h3>
        <div className="row">
          <Button key="disabled" disabled color="green">disabled</Button>
          <Button key="loading" loading color="red">loading</Button>
        </div>
        <h3>Circle</h3>
        <div className="row">
          <Button space="circle" color="teal"><i className="icon-social-twitter"></i></Button>
          <Button space="circle" color="green"><i className="icon-social-facebook"></i></Button>
          <Button space="circle" color="red"><i className="icon-social-github"></i></Button>
        </div>
        <h3>Button groups</h3>
        <div className="row">
          <ButtonGroup>
            <Button>button1</Button>
            <Button className="active">button2</Button>
            <Button>button3</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color="green">button1</Button>
            <Button className="active" color="green">button2</Button>
            <Button color="green">button3</Button>
          </ButtonGroup>
        </div>
      </div>
    )
  }
}
