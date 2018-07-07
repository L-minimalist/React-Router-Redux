import React, { Component } from 'react';
import './summer.css';
import Textline from '../textline/textline';
import { Goodslist2 } from "../goodslist/goodslist";

class Summer extends Component {
  render() {
    return (
      <div className="summer clearfix">
        <div className="head">
          <div className="head-box">
            <a href="javascript:history.go(-1);" className="back">
              <span></span>
            </a>
            <div className="cont">
              <h2>文轩暑期大放“价”-全场低至2折</h2>
            </div>
          </div>
        </div>
        <div className="slider">
          <a href="#">
            <img src="http://static.winxuancdn.com/topic/subject/201807/7zp/640-304.jpg?201807051357" />
          </a>
        </div>
        <div className="spynav">
          <div className="placeholder">
            <div className="nav">
              <div className="cont">
                <ul>
                  <li>
                    <a href="#" className="active"><span>指定阅读</span></a>
                  </li>
                  <li>
                    <a href="#"><span>暑期充电</span></a>
                  </li>
                  <li>
                    <a href="#"><span>休闲阅读</span></a>
                  </li>
                  <li>
                    <a href="#"><span>生活实用</span></a>
                  </li>
                </ul>
              </div>
              <div className="more">
                <span>></span>
              </div>
            </div>
          </div>
        </div>
        <Textline title="指定阅读" />
        <Goodslist2 />
        <Textline title="暑假充电" />
        <Goodslist2 />
        <Textline title="休闲阅读" />
        <Goodslist2 />
        <Textline title="生活实用" />
        <Goodslist2 />
      </div>
    );
  }
}

export default Summer;
