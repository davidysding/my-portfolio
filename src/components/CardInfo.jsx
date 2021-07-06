import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function CardInfo(props) {
    const style = useSpring({ opacity: 1, from: { opacity: 0 } });

    return (
        <div>
            <animated.div className="card-carousel-info" style={style}>
                <p className="card-carousel-title">{props.title}</p>
                <p className="card-carousel-subtitle">{props.subTitle}</p>
                <a href={props.link} target="_blank" rel="noopener noreferrer">View</a>

            </animated.div>
        </div>

    )
}


