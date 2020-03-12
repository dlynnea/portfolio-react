import React from 'react'
import CardInfo from './CardInfo'

function Card(props) {

    return(
        <div className="d-inline-block d-card" onClick={(event) => props.click(props.item)}>
            <img className="d-card-image" src={props.item.img} alt={props.item.img} />
            { props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link}/>}
        </div>
    )
}

export default Card;