import React, { Component } from 'react';
import BlogCard from './BlogCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import curator from '../images/curator.png';
import shape from '../images/shape.jpg';
import hardware from '../images/hardware.jpg';

class Links extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Redux Middleware',
                    subtitle: 'Medium Blog',
                    img: curator,
                    link: 'https://medium.com/@danimatton/redux-middleware-what-is-it-why-use-it-ea18e0433fa0',
                    selected: false
                },
                {
                    id: 1,
                    title: "SQL vs. NoSQL",
                    subtitle: 'Medium Blog',
                    img: shape,
                    link: 'https://medium.com/@danimatton/sql-vs-nosql-whats-the-deal-93b4943a2ce6',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Forms, FormData & JS',
                    subtitle: 'Medium Blog',
                    img: hardware,
                    link: 'https://medium.com/@danimatton/forms-formdata-and-javascript-32d97bcd28d8',
                    selected: false
                },
                {
                    id: 3,
                    title: 'HTTP, MVC Architecture',
                    subtitle: 'Medium Blog',
                    img: hardware,
                    link: 'https://medium.com/@danimatton/taking-a-look-at-http-mvc-architecture-and-routes-through-ruby-on-rails-cac9ec742e0a',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Thin, Vertical Slices',
                    subtitle: 'Medium Blog',
                    img: hardware,
                    link: 'https://medium.com/@danimatton/a-cli-app-thin-vertical-slices-and-the-art-of-collaboration-3f03e0cb288a',
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
            return <BlogCard item={item} click={(event => this.handleClick(item.id, event))} key={item.id} />
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


 
export default Links;