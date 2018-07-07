import React, { Component } from 'react';
import Textline from '../textline/textline';
import './classify.css';

class Classify extends Component {
  render() {
    return (
      <div className="classify">
        <div className="search-bar">
          <div className="search-box">
            <a href="#" className="back">
              <i></i>
            </a>
            <div className="bar">
              <i></i>
              <input type="text" placeholder="请输入搜索关键词" className="search-input" />
            </div>
            <a className="search-button" href="javascript:;">搜索</a>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="少儿"/>
            <ul>
              <li>
                <a href="#">0-2岁</a>
              </li>
              <li>
                <a href="#">3-6岁</a>
              </li>
              <li>
                <a href="#">7-10岁</a>
              </li>
              <li>
                <a href="#">11-14岁</a>
              </li>
              <li>
                <a href="#">家庭教育</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="文学小说" />
            <ul>
              <li>
                <a href="#">当代小说</a>
              </li>
              <li>
                <a href="#">世界名著</a>
              </li>
              <li>
                <a href="#">传记</a>
              </li>
              <li>
                <a href="#">青春与动漫</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="学习考试" />
            <ul>
              <li>
                <a href="#">教材教辅</a>
              </li>
              <li>
                <a href="#">外语类</a>
              </li>
              <li>
                <a href="#">医学类</a>
              </li>
              <li>
                <a href="#">建筑类</a>
              </li>
              <li>
                <a href="#">工具书</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="经济管理" />
            <ul>
              <li>
                <a href="#">管理学</a>
              </li>
              <li>
                <a href="#">经济与金融</a>
              </li>
              <li>
                <a href="#">投资理财</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="励志与成功" />
            <ul>
              <li>
                <a href="#">成功学</a>
              </li>
              <li>
                <a href="#">心理学</a>
              </li>
              <li>
                <a href="#">心灵励志</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="童书" />
            <ul>
              <li>
                <a href="#">儿童文学</a>
              </li>
              <li>
                <a href="#">童话故事</a>
              </li>
              <li>
                <a href="#">必读名著</a>
              </li>
              <li>
                <a href="#">儿童英语</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="生活" />
            <ul>
              <li>
                <a href="#">家庭与育儿</a>
              </li>
              <li>
                <a href="#">运动健身</a>
              </li>
              <li>
                <a href="#">烹饪美食</a>
              </li>
              <li>
                <a href="#">时尚美容</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="科技" />
            <ul>
              <li>
                <a href="#">计算机</a>
              </li>
              <li>
                <a href="#">科普读物</a>
              </li>
              <li>
                <a href="#">工业技术</a>
              </li>
              <li>
                <a href="#">医学</a>
              </li>
              <li>
                <a href="#">建筑</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box">
            <Textline title="艺术与摄影" />
            <ul>
              <li>
                <a href="#">摄影</a>
              </li>
              <li>
                <a href="#">绘画</a>
              </li>
              <li>
                <a href="#">书法与字帖</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="menugoods">
          <div className="menugoods-box bt">
            <Textline title="人文社科" />
            <ul>
              <li>
                <a href="#">哲学与宗教</a>
              </li>
              <li>
                <a href="#">历史</a>
              </li>
              <li>
                <a href="#">政治</a>
              </li>
              <li>
                <a href="#">法律</a>
              </li>
              <li>
                <a href="#">军事</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Classify;
