import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import './scss/page.scss';

import ButtonPage from './container/button.js';
import FormPage from './container/form.js';
import ColumnPage from './container/column.js';
import IconPage from './container/icon.js';
import TextPage from './container/text.js';
import BadgePage from './container/badge.js';
import DropdownPage from './container/dropdown.js';

class Home extends Component {
  render() {
    return(
      <div>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return(
      <header className="mui header flex">
        <div className="flex-control-label">
          <h1 className="logo"><span className="color-red">M</span><span className="color-green">ini</span><span className="color-teal">UI</span></h1>
        </div>
        <div className="flex-controls"> </div>
      </header>
    )
  }
}

class SlideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 74) {
      this.setState({
        fixed: true
      });
    } else {
      this.setState({
        fixed: false
      });
    }
  }

  componentWillMount() {
    document.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return(
      <div className={`miniui-summary ${this.state.fixed ? 'fixed' : ''}`}>
        <ul>
          <li className="header">基础</li>
          <li>
            <ul>
              <li><Link to="/text"><span>Text</span><span className="comment">文字</span></Link></li>
              <li><Link to="/icon"><span>Icon</span><span className="comment">图标</span></Link></li>
              <li><Link to="/badge"><span>Badge</span><span className="comment">徽章</span></Link></li>
              <li><Link to="/button"><span>Button</span><span className="comment">按钮</span></Link></li>
              <li><Link to="/input"><span>Input</span><span className="comment">输入框</span></Link></li>
            </ul>
          </li>
          <li className="header">布局</li>
          <li>
            <ul>
              <li><Link to="/column"><span>Grid</span><span className="comment">栅格</span></Link></li>
              <li><Link to="/"><span>Layout</span><span className="comment">布局</span></Link></li>
            </ul>
          </li>
          <li className="header">功能</li>
          <li>
            <ul>
              <li><Link to="/dropdown"><span>Dropdown</span><span className="comment">下载菜单</span></Link></li>
              <li><Link to="/"><span>Overlay</span><span className="comment">弹出浮层</span></Link></li>
              <li><Link to="/"><span>Modal</span><span className="comment">弹出窗口</span></Link></li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return(
      <div className="miniui-body">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/button' component={ButtonPage}/>
          <Route path='/input' component={FormPage}/>
          <Route path='/column' component={ColumnPage}/>
          <Route path='/icon' component={IconPage}/>
          <Route path='/text' component={TextPage}/>
          <Route path='/badge' component={BadgePage}/>
          <Route path='/dropdown' component={DropdownPage}/>
        </Switch>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return(
      <main className="main flex">
        <div className="flex-control-label">
          <SlideBar />
        </div>
        <div className="flex-controls">
          <Main />
        </div>
      </main>
    )
  }
}

render(
  <BrowserRouter>
    <div className="flex flex-direction-column">
      <Header />
      <App />
    </div>
  </BrowserRouter>,
document.getElementById('webApplication'))
