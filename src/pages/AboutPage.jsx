import React, { Component } from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'
export default class AboutPage extends Component {
    render() {
        const {title} = this.props
        return (
            <div>
                <Hero title={title}/>
                <Content> 
                    <p>Hello, I am Yusheng Ding. I am a recent grad from University of Toronto</p>
                    <p>I am a front end developer with experience in ReactJS, NodeJS, Flask, SQL</p>
                    <p>I also have programming experience during my time in university. I am experienced with C, C#, Java, Python, and assembly. I understand design patterns, sorting algorithms and also time and space complexity.</p>
                    <p>I also do Unity Game development in my leisure time. I am specializing in ShaderLab and combat system recently. </p>
                    <p>My Drean is to one day be a product manager in game industry.</p>
                </Content>
            </div>
        )
    }
}
