import React, { Component } from 'react';
import { Carousel } from 'antd';
import './banner.css';

class Banner extends Component {
  render() {
    return (
      <Carousel autoplay className="banner">
        <a href="#">
          <img src="http://static.winxuancdn.com/topic/subject/201806/dp/640-304.jpg?201807061347" />
        </a>
        <a href="#">
          <img src="http://static.winxuancdn.com/topic/subject/201806/dp/640-304.jpg?201807061347" />
        </a>
        <a href="#">
          <img src="http://static.winxuancdn.com/topic/subject/201806/dp/640-304.jpg?201807061347" />
        </a>
        <a href="#">
          <img src="http://static.winxuancdn.com/topic/subject/201806/dp/640-304.jpg?201807061347" />
        </a>
        <a href="#">
          <img src="http://static.winxuancdn.com/topic/subject/201806/dp/640-304.jpg?201807061347" />
        </a>
      </Carousel>
    );
  }
}

export default Banner;
