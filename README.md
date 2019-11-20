# react-miniui

A mini react UI library. Demo: [http://mui.alvinhtml.com/](http://mui.alvinhtml.com/)


## Installation

```bash
npm install react-miniui --save
```

## Usage

```js
import React, { Component } from 'react';
import { Button, ButtonGroup } from 'react-miniui';

export default class ButtonPage extends Component {
  handleClick() {
    console.log('cilck!');
  }
  render() {
    return(
      <div>
          <Button color="blue" onClick={this.handleClick.bind(this)}>click</Button>
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
```

## Components

Row, Flex, Col, Button, ButtonGroup, Input, Textarea, FormGroup, Icon, Badge, Dropdown, Menu, Item Select, Option

### Dropdown

```js
export default class DropdownPage extends Component {
  render() {
    return(
      <Dropdown name="phone" value="iphone" onChange={this.handleChange.bind(this)}>
        <Button color="blue">请选择 <Icon icon="fa-down-dir" /></Button>
        <Menu>
          <Item value="iphone">iphone</Item>
          <Item value="ipad">ipad</Item>
          <Item value="Macbook Pro">Macbook Pro</Item>
          <Item value="windows phone">windows phone</Item>
        </Menu>
      </Dropdown>
    )
  }
}
```
