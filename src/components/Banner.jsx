import React from "react";
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './Banner.css'

import background0 from '../asset/background0.png'
import background1 from '../asset/background1.jpg'
import background2 from '../asset/background2.png'
import background3 from '../asset/background3.png'
import background4 from '../asset/background4.jpg'


class Banner extends React.Component {
    render() {
        return (
            <BannerAnim prefixCls="banner-user" id="banner">
                <Element key="aaa"
                         prefixCls="banner-user-elem"
                         followParallax={{
                             delay: 1000,
                             data: [
                                 { id: 'title0', value: 50, type: 'x' },
                                 { id: 'content0', value: -50, type: 'x' },
                             ],
                         }}
                         style={{
                             backgroundImage: `url(${background0})`,
                             backgroundAttachment: 'fixed',
                             backgroundPosition: 'center',
                             backgroundSize: 'cover'
                         }}
                >
                    <TweenOne className="banner-user-title"
                              animation={{ y: 30, opacity: 0, type: 'from' }}
                              id="title0"
                    >
                        Hello, Everyone!
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                              id="content0"
                    >
                        This is Brother.John's website
                    </TweenOne>
                </Element>
                <Element key="bbb"
                         prefixCls="banner-user-elem"
                         followParallax={{
                             delay: 1000,
                             data: [
                                 { id: 'title1', value: 50, type: 'x' },
                                 { id: 'content1', value: 100, type: 'x' },
                             ],
                         }}
                         style={{
                             backgroundImage: `url(${background1})`,
                             backgroundAttachment: 'fixed',
                             backgroundPosition: 'center',
                             backgroundSize: 'cover'
                         }}
                >
                    <TweenOne className="banner-user-title"
                              animation={{ y: 30, opacity: 0, type: 'from' }}
                              id="title1">
                        Goal 目标
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                              id="content1">
                        目前通过学习React框架做一个个人网站<br/>
                        主要使用了antd中的动态效果进行练习<br/>
                        本网站是一个前端的练手Demo<br/>
                        一个炯炯的WebSite
                    </TweenOne>
                </Element>
                <Element key="ccc"
                         prefixCls="banner-user-elem"
                         followParallax={{
                             delay: 1000,
                             data: [
                                 { id: 'title2', value: 50, type: 'y' },
                                 { id: 'content2', value: -80, type: 'y' },
                             ],
                         }}
                         style={{
                             backgroundImage: `url(${background2})`,
                             backgroundAttachment: 'fixed',
                             backgroundPosition: 'center',
                             backgroundSize: 'cover'
                         }}
                >
                    <TweenOne className="banner-user-title"
                              animation={{ y: 30, opacity: 0, type: 'from' }}
                              id="title2">
                        Tech Stack 技术栈
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                              id="content2">
                        Java技术 具备IO 多线程等技术<br/>
                        Springboot技术 了解SSM SSH<br/>
                        Html, css, javascript前端知识<br/>
                        了解vue.js react.js技术<br/>
                        了解CRUD 前后端分离的知识 网络知识
                    </TweenOne>
                </Element>
                <Element key="ddd"
                         prefixCls="banner-user-elem"
                         followParallax={{
                             delay: 1000,
                             data: [
                                 { id: 'title3', value: 30, type: 'x' },
                                 { id: 'content3', value: -50, type: 'x' },
                             ],
                         }}
                         style={{
                             backgroundImage: `url(${background4})`,
                             backgroundAttachment: 'fixed',
                             backgroundPosition: 'center',
                             backgroundSize: 'cover'
                         }}
                >
                    <TweenOne className="banner-user-title"
                              animation={{ y: 30, opacity: 0, type: 'from' }}
                              id="title3">
                        Practice 项目经历
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                              id="content3">
                        简易的评价系统:Vue+Springboot+MySQL<br/>
                        <a href="https://github.com/BushiJhon/evaluationSystem">地址</a><br/>
                        基于神经网络完成的ios软件：负责后台python flask<br/>
                        <a href="https://github.com/BushiJhon/iAnimeServer">地址</a><br/>
                        个人简历网页版: html+css+jquery<br/>
                        <a href="https://github.com/BushiJhon/User_Interface">地址</a>
                    </TweenOne>
                </Element>
                <Element key="eee"
                         prefixCls="banner-user-elem"
                         followParallax={{
                             delay: 1000,
                             data: [
                                 { id: 'title4', value: -50, type: 'x' },
                                 { id: 'content4', value: 80, type: 'x' },
                             ],
                         }}
                         style={{
                             backgroundImage: `url(${background3})`,
                             backgroundAttachment: 'fixed',
                             backgroundPosition: 'center',
                             backgroundSize: 'cover'
                         }}
                >
                    <TweenOne className="banner-user-title"
                              animation={{ y: 30, opacity: 0, type: 'from' }}
                              id="title4">
                        Person 个人介绍
                    </TweenOne>
                    <TweenOne className="banner-user-text"
                              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                              id="content4">
                        Brother.Jhon就读于华南理工大学<br/>
                        对美术感兴趣，素描8级<br/>
                        就读软件工程，是一名Coder
                        如果您能提供宝贵的实习，学习的经历，请联系我<br/>
                        QQ: 1172905107@qq.com<br/>
                    </TweenOne>
                </Element>
            </BannerAnim>
        );
    }
}

export default Banner;
