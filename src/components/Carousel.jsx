import React, { Component } from 'react'
import Card from '../components/Card'
import { Container, Row } from 'react-bootstrap'
import webScreenshot from '../assets/images/webScreenshot.png'


export default class Carousel extends Component {
    state = {
        items: [
            {
                id: 0,
                title: "Web Design",
                SubTitle: "Front End Projects",
                imgSrc: webScreenshot,
                link: 'https://davidysding.github.io',
                selected: false
            }, {
                id: 1,
                title: "Web Design",
                SubTitle: "Front End Projects",
                imgSrc: webScreenshot,
                link: 'https://davidysding.github.io',
                selected: false
            }, {
                id: 2,
                title: "Web Design",
                SubTitle: "Front End Projects",
                imgSrc: webScreenshot,
                link: 'https://davidysding.github.io',
                selected: false
            }
        ]
    }
    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false; 
            }
        })
        this.setState({
            items
        })
    }

    makeItems = (items) =>{
        return items.map(item => {
            return <Card item={item} click={(e=>this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }


    render() {
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}
