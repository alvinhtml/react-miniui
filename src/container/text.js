import React, {Component} from 'react';

import {Button} from '../index';

export default class TextPage extends Component {
  render() {
    return(
      <div>
        <h1>文本内容</h1>
        <h2 className="section-head">标题</h2>
        <h1>标题 H1.h1 2.5714em 36px</h1>
        <h2>标题 H2.h2 2.1428em 30px</h2>
        <h3>标题 H3.h3 1.7142em 24px</h3>
        <h4>标题 H4.h4 1.2857em 18px</h4>
        <h5>标题 H5.h5 1.0000em 14px</h5>
        <h6>标题 H6.h6 0.8571em 12px</h6>
        <h2 className="section-head">文本内容</h2>
        <p>不要为明天忧虑，天上的飞鸟，不耕种也不收获，上天尚且要养活它；田野里的百合花，从不忧虑它能不能开花，是不是可以开得和其它一样美，但是它就自然的开花了，开得比所罗门皇冠上的珍珠还美。你呢，忧虑什么呢？人比飞鸟和百合花贵重多了，上帝会弃你不顾吗？</p>
        <ul className="mui">
            <li>每当你想评论他人时，要记住，这世上并不是所有人都有你拥有的那些优势</li>
            <li>珍惜现在的一切，缅怀过去的所有
                <ul className="mui">
                    <li>生当如夏花，只为绚烂一瞬</li>
                    <li>存在或不存在，这是问题所在。</li>
                    <li>人生得意须尽欢，莫使金樽空对月。</li>
                </ul>
                <ol className="mui">
                    <li>你将余生写一首长诗，却不能提及一个与她有关的字</li>
                    <li>我们已经很难遇到喜欢的人，何必为难自己不去买喜欢的东西</li>
                </ol>
                <dl className="mui">
                    <dt>将进酒-李白</dt>
                    <dd>君不见，黄河之水天上来，奔流到海不复回。</dd>
                    <dd>君不见，高堂明镜悲白发，朝如青丝暮成雪。</dd>
                </dl>
            </li>
        </ul>
        <h2 className="section-head">内联文本元素</h2>
        <p>使用<code>&lt;b&gt;</code><b>定义粗体文本。</b></p>
        <p>使用<code>&lt;i&gt;</code><i>定义斜体文本。</i></p>
        <p>使用<code>&lt;u&gt;</code><u>定义带有下划线的文本。</u></p>
        <p>使用<code>&lt;del&gt;</code><del>定义带有删除线的文本。</del></p>
        <p>使用<code>&lt;abbr&gt;</code><abbr>定义缩写文本。</abbr></p>
        <p>使用<code>&lt;q&gt;</code>定义<q>引用</q>的文本。</p>
        <p>使用<code>&lt;code&gt;</code>定义代码文本。<code name="code" className="js">alert('hello world!');</code></p>
      </div>
    )
  }
}
