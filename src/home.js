import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import './scss/page.scss';

import ButtonPage from './container/button.js';
import FormPage from './container/form.js';
import ColumnPage from './container/column.js';
import IconPage from './container/icon.js';
import TextPage from './container/text.js';

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
          <li className="header">通用</li>
          <li>
            <ul>
              <li><Link to="/text"><span>Icon</span><span className="comment">文字</span></Link></li>
              <li><Link to="/icon"><span>Icon</span><span className="comment">图标</span></Link></li>
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
          <li className="header">导航</li>
          <li>
            <ul>
              <li><Link to="/"><span>Affix</span><span className="comment">固钉</span></Link></li>
              <li><Link to="/"><span>Breadcrumb</span><span className="comment">面包屑</span></Link></li>
              <li><Link to="/"><span>Dropdown</span><span className="comment">下拉菜单</span></Link></li>
              <li><Link to="/"><span>Menu</span><span className="comment">导航菜单</span></Link></li>
              <li><Link to="/"><span>Pagination</span><span className="comment">分页</span></Link></li>
              <li><Link to="/"><span>PageHeader</span><span className="comment">页头</span></Link></li>
              <li><Link to="/"><span>Steps</span><span className="comment">步骤条</span></Link></li>
            </ul>
          </li>
          <li className="header">数据录入</li>
          <li>
            <ul>
              <li><Link to="/"><span>AutoComplete</span><span className="comment">自动完成</span></Link></li>
              <li><Link to="/"><span>Checkbox</span><span className="comment">多选框</span></Link></li>
              <li><Link to="/"><span>Cascader</span><span className="comment">级联选择</span></Link></li>
              <li><Link to="/"><span>DatePicker</span><span className="comment">日期选择框</span></Link></li>
              <li><Link to="/"><span>Form</span><span className="comment">表单</span></Link></li>
              <li><Link to="/"><span>InputNumber</span><span className="comment">数字输入框</span></Link></li>
              <li><Link to="/input"><span>Input</span><span className="comment">输入框</span></Link></li>
              <li><Link to="/"><span>Mention</span><span className="comment">提及</span></Link></li>
              <li><Link to="/"><span>Rate</span><span className="comment">评分</span></Link></li>
              <li><Link to="/"><span>Radio</span><span className="comment">单选框</span></Link></li>
              <li><Link to="/"><span>Switch</span><span className="comment">开关</span></Link></li>
              <li><Link to="/"><span>Slider</span><span className="comment">滑动输入条</span></Link></li>
              <li><Link to="/"><span>Select</span><span className="comment">选择器</span></Link></li>
              <li><Link to="/"><span>TreeSelect</span><span className="comment">树选择</span></Link></li>
              <li><Link to="/"><span>Transfer</span><span className="comment">穿梭框</span></Link></li>
              <li><Link to="/"><span>TimePicker</span><span className="comment">时间选择框</span></Link></li>
              <li><Link to="/"><span>Upload</span><span className="comment">上传</span></Link></li>
            </ul>
          </li>
          <li className="header">数据展示</li>
          <li>
            <ul>
              <li><Link to="/"><span>Avatar</span><span className="comment">头像</span></Link></li>
              <li><Link to="/"><span>Badge</span><span className="comment">徽标数</span></Link></li>
              <li><Link to="/"><span>Comment</span><span className="comment">评论</span></Link></li>
              <li><Link to="/"><span>Collapse</span><span className="comment">折叠面板</span></Link></li>
              <li><Link to="/"><span>Carousel</span><span className="comment">走马灯</span></Link></li>
              <li><Link to="/"><span>Card</span><span className="comment">卡片</span></Link></li>
              <li><Link to="/"><span>Calendar</span><span className="comment">日历</span></Link></li>
              <li><Link to="/"><span>Empty</span><span className="comment">空状态</span></Link></li>
              <li><Link to="/"><span>List</span><span className="comment">列表</span></Link></li>
              <li><Link to="/"><span>Popover</span><span className="comment">气泡卡片</span></Link></li>
              <li><Link to="/"><span>Statistic</span><span className="comment">统计数值</span></Link></li>
              <li><Link to="/"><span>Tree</span><span className="comment">树形控件</span></Link></li>
              <li><Link to="/"><span>Tooltip</span><span className="comment">文字提示</span></Link></li>
              <li><Link to="/"><span>Timeline</span><span className="comment">时间轴</span></Link></li>
              <li><Link to="/"><span>Tag</span><span className="comment">标签</span></Link></li>
              <li><Link to="/"><span>Tabs</span><span className="comment">标签页</span></Link></li>
              <li><Link to="/"><span>Table</span><span className="comment">表格</span></Link></li>
            </ul>
          </li>
          <li className="header">反馈</li>
          <li>
            <ul>
              <li><Link to="/"><span>Alert</span><span className="comment">警告提示</span></Link></li>
              <li><Link to="/"><span>Drawer</span><span className="comment">抽屉</span></Link></li>
              <li><Link to="/"><span>Modal</span><span className="comment">对话框</span></Link></li>
              <li><Link to="/"><span>Message</span><span className="comment">全局提示</span></Link></li>
              <li><Link to="/"><span>Notification</span><span className="comment">通知提醒框</span></Link></li>
              <li><Link to="/"><span>Progress</span><span className="comment">进度条</span></Link></li>
              <li><Link to="/"><span>Popconfirm</span><span className="comment">气泡确认框</span></Link></li>
              <li><Link to="/"><span>Spin</span><span className="comment">加载中</span></Link></li>
              <li><Link to="/"><span>Skeleton</span><span className="comment">骨架屏</span></Link></li>
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
