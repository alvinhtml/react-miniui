import React, {Component} from 'react';
import {render} from 'react-dom';

import {Button} from './index';

class App extends Component {
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
      'purple',
      'pink',
      'bronw'
    ]
    const size = [
      'mini',
      'tiny',
      'small',
      'medium',
      'large',
      'big',
      'huge',
      'massive'
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
      <div style={{padding: '50px'}}>
        <h1>MiniUI</h1>
        <p>1</p>
        <h2>Button</h2>
        <h3>Basic</h3>
        <div className="row spaced">
          {colors.map(v => <Button type="basic" key={v} color={v}>{v}</Button>)}
        </div>
        <h3>Colored</h3>
        <div className="row spaced">
          {colors.map(v => <Button key={v} color={v}>点击</Button>)}
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
          <Button key="loading" loading color="blue">loading...</Button>
          <Button key="disabled" disabled color="red">disabled</Button>
        </div>
      </div>
    )
  }
}

render(
  <div>
      <App />
  </div>,
document.getElementById('webApplication'))
