import React from 'react'
import Main from '../components/Main'
import Content from '../components/Content'

function About(props) {
    return(
        <div>
            <div className="title-container">
                <Main title={props.title} />
            </div>
            <Content>
                <div className='aboutme'>
                    <p>Hello, I'm Danielle. I'm a full stack software engineer experienced in Ruby, Rails and JavaScript based programming. I have a background in human physiology as well as customer relations.</p>
                    <p>I was lead to web development by my interest in combining design, innovation and logic. I have a systems mentality, a passion for creative problem solving and I love a good challenge.</p>
                    <p>I'm constantly learning new things, some current programming-related things include gaining more experience with Python, React-Redux, MongoDB and Node.js</p>
                    <p>My most recent project, Curator, is a content aggregator. You can check it out [here], or on the homepage. It is a built with Ruby on Rails and React, React-Redux and I built the webcrawlers for the content found under Science, Travel, Wellness and Tech using Python and the Scrapy Framework.</p>
                    <p>When I'm not learning something new chances are I'm in the pottery studio or outdoors enjoying beautiful Colorado! I love to travel, more recently my spring and summer weekends are spent camping but traveling abroad has been a longtime passion of mine.</p>
                    <p>If you would like to connect with me, navigate to my contact page and send me an email, or find me on Linkedin or Twitter. You can also click my Github page to find my respositories and projects!</p>
                </div>
            </Content>
        </div>
    )
}

export default About;