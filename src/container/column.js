import React, {Component} from 'react';

import {Input, Textarea, Icon} from '../index';

export default class columnPage extends Component {
  render() {

    return(
      <div>
        <h1 className="section-head">布局</h1>
        <h2>栅格化布局12格分</h2>
        <div className="row demo-row align-center">
            <div className="col-span1 bg-lightgray">span1</div>
            <div className="col-span2 bg-lightgray">col-span2</div>
            <div className="col-span3 bg-lightgray">col-span3</div>
            <div className="col-span1 bg-lightgray">span1</div>
            <div className="col-span2 bg-lightgray">col-span2</div>
            <div className="col-span3 bg-lightgray">col-span3</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-span4 bg-lightgray">col-span4</div>
            <div className="col-span4 bg-lightgray">col-span4</div>
            <div className="col-span4 bg-lightgray">col-span4</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-span5 bg-lightgray">col-span5</div>
            <div className="col-span7 bg-lightgray">col-span7</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-span6 bg-lightgray">col-span6</div>
            <div className="col-span6 bg-lightgray">col-span6</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-span4 bg-lightgray">col-span4</div>
            <div className="col-span8 bg-lightgray">col-span8</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-span2 bg-lightgray">col-span2</div>
            <div className="col-span6 offset-span4 bg-lightgray">col-span6 offset-span4</div>
        </div>
        <div className="row align-center">
            <div className="col-span4 bg-lightgray">col-span4</div>
            <div className="col-span4 bg-lightgray">col-span4</div>
            <div className="col-span4 bg-lightgray">col-span4</div>
        </div>
        <h2>栅格化布局24格分</h2>
        <div className="row demo-row align-center">
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
            <div title="col-grid" className="col-grid1 bg-lightgray">1</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-grid1 bg-lightgray">1</div>
            <div className="col-grid2 bg-lightgray">col-grid2</div>
            <div className="col-grid3 bg-lightgray">col-grid3</div>
            <div className="col-grid18 bg-lightgray">col-grid18</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-grid4 bg-lightgray">col-grid4</div>
            <div className="col-grid5 bg-lightgray">col-grid5</div>
            <div className="col-grid6 bg-lightgray">col-grid6</div>
            <div className="col-grid5 bg-lightgray">col-grid5</div>
            <div className="col-grid4 bg-lightgray">col-grid4</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-grid7 bg-lightgray">col-grid7</div>
            <div className="col-grid8 bg-lightgray">col-grid8</div>
            <div className="col-grid9 bg-lightgray">col-grid9</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-grid8 bg-lightgray">col-grid10</div>
            <div className="col-grid8 offset-grid8 bg-lightgray">col-grid8 offset-grid8</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-grid16 offset-grid8 bg-lightgray">col-grid16 offset-grid8</div>
        </div>
        <div className="row demo-row align-center">
            <div className="col-grid10 bg-lightgray">col-grid10</div>
            <div className="col-grid14 bg-lightgray">col-grid14</div>
        </div>
      </div>
    )
  }
}
