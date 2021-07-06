import React, { Component } from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel'

export default class HomePage extends Component {
    render() {
        const {title, subTitle, text} = this.props
        return (
            <div>
                <Hero title={title} subTitle={subTitle} text={text}/>
                <Carousel/>
            </div>
        )
    }
}
