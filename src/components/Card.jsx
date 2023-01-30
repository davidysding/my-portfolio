import React, { Component } from 'react'
import CardInfo from './CardInfo'
export default class Card extends Component {
    render() {
        const { item } = this.props
        const { imgSrc, title, subTitle, selected, link } = item
        return (
            <div className="d-inline-block card-carousel" onClick={(event) => this.props.click(item)}>
                <div className="card-carousel-img-container">
                    <img className="card-carousel-img" src={imgSrc} alt={imgSrc} />
                </div>
                {selected && <CardInfo title={title} subTitle={subTitle} link={link} />}
            </div>
        )
    }
}
