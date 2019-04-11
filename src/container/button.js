import React, {Component} from 'react';

import {Button} from '../index';

export default class ButtonPage extends Component {
  render() {
    const colors = [
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'pink',
      'brown',
      'white'
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
        <div className="row spaced">
          {colors.map(v => <Button type="basic" key={v} color={v}>{v}</Button>)}
        </div>
        <h3>Colored</h3>
        <div className="row spaced">
          {colors.map(v => <Button key={v} color={v}>{v}</Button>)}
        </div>
        <h3>Size</h3>
        <div className="row spaced">
          {size.map((v, i) => <Button key={v} size={v} color={colors[i]}>{v}</Button>)}
        </div>
        <h3>With icon</h3>
        <div className="row spaced">
          {size.map((v, i) => <Button key={v} icon={`icon-${icons[i]}`} size={v} color={colors[i]}>{v}</Button>)}
        </div>
        <h3>Disabled & Loading</h3>
        <div className="row spaced">
          <Button key="disabled" disabled color="green">disabled</Button>
          <Button key="loading" loading color="red">loading</Button>
        </div>
        <h3>Circle</h3>
        <div className="row spaced">
          <Button space="circle" color="teal"><i className="icon-social-twitter"></i></Button>
          <Button space="circle" color="green"><i className="icon-social-facebook"></i></Button>
          <Button space="circle" color="red"><i className="icon-social-github"></i></Button>
        </div>
      </div>
    )
  }
}
