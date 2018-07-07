import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../banner/banner';
import Header from '../header/header';
import { Goodslist1, Goodslist3, Goodslist4, Goodslist5 } from '../goodslist/goodslist';
import Imglink from '../imglink/imglink';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Header />
        <Banner />
        <div className="winxuan-hot">
          <div className="title-img">
            <img src="data:image/png;base64,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" />
          </div>
          <div className="weal">
            <a href="#">
              <span>今日福利券</span>
              先领券，再下单，优惠更多
            </a>
          </div>
        </div>
        <Imglink link="summer" src="http://static.winxuancdn.com/topic/subject/201807/7zp/640-90.jpg?201807061347" />
        <div className="countdown clearfix">
          <div className="kill_more">
            <i className="line1"></i>
            <div className="time">
              <i className="ico-clock"></i>
              <span>秒杀·00点场</span>
              <div className="timer">
                <span className="count-time">00</span>
                <span>:</span>
                <span className="count-time">00</span>
                <span>:</span>
                <span className="count-time">00</span>
              </div>
            </div>
            <i className="line2"></i>
            <div className="more">
              <a href="#">更多</a>
              <i>></i>
            </div>
          </div>
        </div>
        <Goodslist4 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201806/lsjx/640-90.jpg" />
        <Goodslist3 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/winxuan_m/newm/home/product_1/wxjj_4.jpg?wweed" />
        <Goodslist3 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/winxuan_m/newm/home/product_1/xpsd_1.jpg?wherdd" />
        <Goodslist5 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/jxzt1.jpg" />
        <div className="nav-topic">
          <div className="nav-box">
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
          </div>
        </div>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/plhc1.jpg" />
        <div className="nav-topic">
          <div className="nav-box">
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
            <a href="#">
              <i></i>
              <span>2017中国好书</span>
            </a>
          </div>
        </div>
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201708/10030/0.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-wxxs.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-rwsk.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-jg1.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-child.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-net.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-shys.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-szjy.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201605/m_pl/pl-ys.jpg" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/winxuan_m/newm/home/product_1/spcl/cdj.jpg?wegsd" />
        <Goodslist1 />
        <Imglink link="#" src="https://static.winxuancdn.com/topic/subject/201804/gywx.png" />
        <Goodslist1 />
        <div className="foot-box">
          <div className="login-bottom">
            <a href="#">登录</a>
            <a href="#">注册</a>
          </div>
          <div className="copyright">
            <p><span></span>m.winxuan.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
