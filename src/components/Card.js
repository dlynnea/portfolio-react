import React from 'react'
import CardInfo from './CardInfo'

function Card(props) {

    return(
        <div>
            <img className="" src={props.item.img} alt={props.item.img} />
            { props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link}/>}
        </div>
    )
}

export default Card;