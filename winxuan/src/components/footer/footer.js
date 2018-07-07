import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="bottom-box">
          <Link to="/">
            <i></i>
            <span>首页</span>
          </Link>
          <Link to="classify">
            <i></i>
            <span>分类搜索</span>
          </Link>
          <a href="#">
            <i></i>
            <span>购物车</span>
          </a>
          <a href="#">
            <i></i>
            <span>我的文轩</span>
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
