import React, { memo } from 'react';
import Grid from '../components/Grid/grid';

const AboutPage = memo(function AboutPageComponent () {
    return (
        <div className="page-wrapper container flex-column fs-1 text-blue pt-5">
            <h1 className='page-heading text-display fs-4 mu-0 pb-1'>About Him</h1>
            <div className="line-group w-75 mu-0">
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
            </div>

            <div className='page-body pt-5'>
                <h1 className="text-heading fs-3 mu-0">
                    Kevin Duong is a self-taught <br /> Front-end Web developer.
                </h1>
                <div className="page-body_message pt-2">
                  <p className="text-body fs-2">
                    Based in the Bay Area, he was initially a graphic designer who graduated with Bachelor's degree from San Jose State University. He's since transitioned to front-end web development, with working knowledge of languages such as HTML, CSS, SASS, JavaScript, and PHP. He's experienced with building small applications natively and through leveraging frameworks like Bootstrap and libraries like React. He has recently published a basic UI library called 'Brutkit', that aims to achieve visually bold, but accessible, web design.
                  </p>
                </div>
            </div>
        </div>
    )
});

export default AboutPage