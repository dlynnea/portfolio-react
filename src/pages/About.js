import React from 'react'
import Hero from '../components/Hero'
import Content from '../components/Content'

function About(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Danielle. I'm a full stack software engineer with experience in Ruby on Raisl, JavaScript, React, SQL and Python.</p>
                <p>My hobbies are....</p>
                <p>I'm constantly learning new things, currently those things include gaining more experience with Python, React-Redux, MongoDB and Node.js</p>
                <p>My most recent project, Curator, is a content aggregator. You can check it out [here], or on the homepage. It is a built with Ruby on Rails and React, React-Redux and I built the webcrawlers for the content found under Science, Travel, Wellness and Tech using Python and Scrapy Framework.</p>
                <p>When I'm not learning something new chances are I'm in the pottery studio or outdoors enjoying beautiful Colorado!</p>
            </Content>
        </div>
    )
}

export default About;