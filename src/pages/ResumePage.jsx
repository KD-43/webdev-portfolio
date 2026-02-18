import React, { memo } from 'react';
import Grid from '../components/Grid/grid';
import './pagesScss/resume.scss';
import ButtonComponent from '../components/Button/button';

const ResumePage = memo(function ResumePageComponent () {

  const resumePath = './resume/';
  const standardPath = `${resumePath}Resume_SWE_2026_Kevin_Duong_v1.pdf`;

    return (
        <div className="page-wrapper container flex-column fs-1 text-lGrey pt-5">
            <h1 className='page-heading text-display fs-4 mu-0 pb-1'>His Resume</h1>
            <div className="line-group w-75 mu-0">
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
            </div>

            <div className="page-body d-flex flex-column gap-2 pt-5">

              <div className='resume-wrapper list-style-none'>
                <Grid.Row gap={30} columns={4} addClass={"pb-5"}>
                
                  <Grid.Col span={1} addClass={"text-heading fs-2 d-flex flex-column align-items-end"}>
                    Contact
                  </Grid.Col>
                  <Grid.Col span={3} addClass={"text-display"}>
                    duongtkevin5438@gmail.com
                  </Grid.Col>
                
                  <Grid.Col span={1} addClass={"text-heading fs-2 d-flex flex-column align-items-end"}>
                    Links
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <div className="d-flex gap-1" id='links-btn'>
                      <ButtonComponent
                        href="https://www.linkedin.com/in/kevin-t-duong/"
                        target="_blank"
                        size={"sm"}
                        color={"blue"}
                        addClass={"text-decoration-none"}
                      >
                        LinkedIn
                      </ButtonComponent>

                      <ButtonComponent
                        href="https://github.com/KD-43"
                        target="_blank"
                        size={"sm"}
                        color={"blue"}
                        addClass={"text-decoration-none"}
                      >
                        Github
                      </ButtonComponent>
                    </div>
                  </Grid.Col>

                  <Grid.Col span={1} addClass={"resume-heading text-heading fs-2 d-flex flex-column align-items-end"}>
                    Projects
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <ul className='mu-0 pl-1'>
                      <li><span className='fw-bold'>PigeonGamer</span> - Fullstack Video Game Deals Watchlist</li>
                      <li><span className='fw-bold'>CineRank</span> - SPA Movie Tier List Creator</li>
                      <li><span className='fw-bold'>Brutkit</span> - A React UI-component library.</li>
                    </ul>
                  </Grid.Col>

                  <Grid.Col span={1} addClass={"resume-heading text-heading fs-2 d-flex flex-column align-items-end"}>
                    Skills
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <ul className='mu-0 pl-1'>

                      <li>
                        <div className="border-xs border-radius-xs border-dBlue">
                          <ul className='mu-0 pu-1'>
                            <div className="d-flex flex-column justify-content-btwn gap-0_5 pl-1">
                              <li><span className='fw-bold'>Languages & Core Tech:</span> <span className="text-body">HTML5, CSS3/SASS, JavaScript(ES6+), Node.js</span></li>
                              <li><span className='fw-bold'>Frontend Dev:</span> <span className="text-body">React, Component-based architecture, State management (custom hooks, reducers), Responsive UI Development, UI validation & Interaction handling</span></li>
                              <li><span className='fw-bold'>Backend & Data:</span> <span className="text-body">RESTful API Design, Express.js, MongoDB, Server-side caching, Rate-limiting & data refresh strategies</span></li>
                              <li><span className='fw-bold'>Testing & Debugging:</span> <span className="text-body">Manual testing, API testing, Debugging asynchronous flows, Error handling & edge case validation</span></li>
                              <li><span className='fw-bold'>Tools & Workflow:</span> <span className="text-body">Git & GitHub (CI/CD Integration), NPM, Chrome DevTools, VS Code, Environment configuration</span></li>
                              <li><span className='fw-bold'>Cloud Deployment:</span> <span className="text-body">Render, Cloudflare Pages</span></li>
                              <li><span className='fw-bold'>Design & Collaboration:</span> <span className="text-body">UI/UIX Fundamentals, Design Systems, Figma, Documentation, Accessibility-aware design</span></li>
                            </div>
                          </ul>
                        </div>
                      </li>

                    </ul>
                  </Grid.Col>

                  <Grid.Col span={1} addClass={"resume-heading text-heading fs-2 d-flex flex-column align-items-end"}>
                    Soft Skills
                  </Grid.Col>
                  <Grid.Col span={3} addClass={"text-display"}>
                    Effective Communicator, feedback-driven, adaptable, goal-oriented, eager learner.
                  </Grid.Col>
                
                  <Grid.Col span={1} addClass={"resume-heading text-heading fs-2 d-flex flex-column align-items-end"}>
                    Education
                  </Grid.Col>
                  <Grid.Col span={3} addClass={"text-display"}>
                    BA Design Studies (2020) - San Jose State University
                  </Grid.Col>
                
                </Grid.Row>
              </div>

              <div className="resume-download-wrapper d-flex pb-3 gap-2">
                <ButtonComponent
                  href={standardPath}
                  download="Resume_SWE_2026_Kevin_Duong_v1.pdf"
                  target="_blank"
                  size={"md"}
                  color={"blue"}
                  addClass={"text-decoration-none"}
                >
                  PDF Download
                </ButtonComponent>
              </div>

            </div>
        </div>
    )
});

export default ResumePage