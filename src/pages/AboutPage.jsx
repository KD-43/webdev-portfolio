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
                    A Junior software engineer with a strong front-end focus in
                    React and JavaScript. Experienced in building and
                    deploying component-based web applications, integrating
                    APIs, and developing maintainable UI architectures. Strong
                    problem-solver with hands-on experience in debugging,
                    testing, and iterative development.

                  </p>
                </div>
            </div>
        </div>
    )
});

export default AboutPage