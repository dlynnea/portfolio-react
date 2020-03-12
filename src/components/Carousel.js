import React, { Component } from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import plant from '../images/plant.jpg';
import shape from '../images/shape.jpg';
import hardware from '../images/hardware.jpg';

class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Plant',
                    subtitle: 'my project',
                    img: plant,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Shape',
                    subtitle: 'my project',
                    img: shape,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Hardware',
                    subtitle: 'my project',
                    img: hardware,
                    link: '',
                    selected: false
                },
            ]
          }
    }

    handleClick = (id, card) => {
        console.log(id)
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false
            }
        })
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(event => this.handleClick(item.id, event))} key={item.id} />
        })
    }

    render() { 
        return (
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
          );
    }
}
 
export default Carousel;