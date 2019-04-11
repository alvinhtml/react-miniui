import React, {Component} from 'react';

import {Input, Textarea, Icon} from '../index';

export default class ButtonPage extends Component {
  render() {

    const size = [
      'mini',
      'small',
      'medium',
      'large',
      'big',
    ]

    return(
      <div>
        <h1>Form 表单</h1>
        <h2>Ipnut text</h2>
        <div className="row spaced">
          <Input type="text" col="inline-span3" color="default" placeholder="input text" />
          <Input type="text" col="inline-span3" color="green" placeholder="input text" />
          <Input type="text" col="inline-span3" color="yellow" placeholder="input text" />
          <Input type="text" col="inline-span3" color="red" placeholder="input text" />
        </div>
        <h2>addonBefore && addonAfter</h2>
        <div className="row spaced">
          <Input addonBefore={<i className="icon-magnifier"></i>} type="text" col="inline-span6" color="green" placeholder="input text" />
          <Input addonAfter={<i className="icon-plus"></i>} type="text" col="inline-span6" color="red" placeholder="input text" />
        </div>
        <h2>Size</h2>
        <div className="row spaced">
          {size.map((v, i) => <Input key={v} type="text" col="inline-span2" placeholder={v} size={v} />)}
        </div>
        <h2>Disabled</h2>
        <div className="row spaced">
          <Input type="text" disabled col="inline-span6" placeholder="disabled" defaultValue="disabled input" />
        </div>
        <h2>文本框</h2>
        <div className="row spaced">
          <Textarea type="text" col="inline-span10" placeholder="disabled" defaultValue="textarea" />
        </div>
      </div>
    )
  }
}
