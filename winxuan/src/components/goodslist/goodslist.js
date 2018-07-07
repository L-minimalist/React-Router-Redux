import React, { Component } from 'react';
import './goodslist.css';

class Goodslist1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="goodsshow1">
        <ul className="clearfix">
          <li>
            <div className="item">
              <a href="#">
                <div className="img">
                  <img src="http://img0.winxuancdn.com/0876/1201530876_10_1.jpg?1500963023917" />
                </div>
                <h3 className="name">神秘花园+奇幻森林+时间旅程+童话梦境(全4册)减压涂色绘本(精美盒装)(附赠24色彩铅)</h3>
                <div className="price">
                  <span className="price-yes">￥25.8</span>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

class Goodslist2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="goodsshow2">
        <ul className="clearfix">
          <li>
            <div className="item">
              <a href="#">
                <div className="img">
                  <img src="https://img2.winxuancdn.com/2814/1201652814_0_1.jpg?1521597493107&imageMogr2/thumbnail/200x200" />
                </div>
                <h3 className="name">淘气包马小跳•淘气包马小跳漫画升级版1-24册全集套装</h3>
                <div className="price">
                  <span className="price-yes">￥259.0</span>
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

class Goodslist3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="goodsshow3">
        <ul className="list">
          <li>
            <a href="#">
              <div className="img">
                <img src="https://img3.winxuancdn.com/3603/1201663603_0_1_350x350.jpg?1524020018177" />
              </div>
              <h3 className="name">突发事件舆论引导实务</h3>
              <p className="author">四川大学出版社有限责任公司</p>
              <div className="price">
                <span className="price-yes">￥19.00</span>
                <span className="price-del">￥26.00</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

class Goodslist4 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="goodsshow4">
        <a href="#">
          <div className="img">
            <img src="https://img1.winxuancdn.com/0583/1201530583_22_1.jpg?1515032262657&imageMogr2/thumbnail/200x200" />
          </div>
          <span className="tag">
              低价
              <br/>
              抢鲜
            </span>
          <div className="price">
            <p className="price-yes">¥24.4</p>
            <p className="price-del">¥46.0</p>
          </div>
        </a>
      </div>
    );
  }
}

class Goodslist5 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="goodsshow5">
        <ul>
          <li>
            <a href="#">
              <div className="name">
                时光的背影
                <br/>
                <span>诗人吉狄马加作序推荐！</span>
              </div>
              <div className="img">
                <img src="https://img2.winxuancdn.com/8694/1201658694_0_1_350x350.jpg?1523709563769" />
              </div>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export {Goodslist1, Goodslist2, Goodslist3, Goodslist4, Goodslist5};
