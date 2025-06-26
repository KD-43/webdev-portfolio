import React, { memo } from 'react';
import Grid from '../components/Grid/grid';
import './pagesScss/resume.scss';
import ButtonComponent from '../components/Button/button';

const ResumePage = memo(function ResumePageComponent () {

  const resumePath = './resume/';
  const standardPath = `${resumePath}Resume_Kevin-Duong_2025_v3_standard.pdf`;
  const grayscalePath = `${resumePath}Resume_Kevin-Duong_2025_v3_Grayscale.pdf`;

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
                    Profile
                  </Grid.Col>
                  <Grid.Col span={3} addClass={"d-flex text-display"}>
                    A front-end developer who enjoys building creative applications that are both functional and accessible. Seeking an opportunity to support the development of engaging projects and work with skillful developers. Most of all, I'm interested in expanding both my knowledge and skill-set of the profession.
                  </Grid.Col>
                
                
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
                      <li><span className='fw-bold'>Brutkit</span> - A React UI-component library.</li>
                    </ul>
                  </Grid.Col>

                  <Grid.Col span={1} addClass={"resume-heading text-heading fs-2 d-flex flex-column align-items-end"}>
                    Skills
                  </Grid.Col>
                  <Grid.Col span={3}>
                    <ul className='mu-0 pl-1'>

                      <li>
                        <div className='fw-bold fs-1_5 line-height-1_1 pb-1'>Web Development</div>
                        <div className="border-xs border-radius-xs border-dBlue">
                          <ul className='mu-0 pu-1'>
                            <div className="d-flex flex-column justify-content-btwn gap-0_5 pl-1">
                              <li><span className='fw-bold'>Languages:</span> <span className="text-display">HTML5, CSS3/SASS, JavaScript, PHP</span></li>
                              <li><span className='fw-bold'>Framework:</span> <span className="text-display">Bootstrap</span></li>
                              <li><span className='fw-bold'>Library:</span> <span className="text-display">React.js</span></li>
                            </div>
                          </ul>
                        </div>
                      </li>
                      
                      <li className='pb-2'>
                        <div className='fw-bold fs-1_5 line-height-1_1  pt-2 pb-1'>Graphic Design</div>
                        <ul className='mu-0 border-xs border-radius-xs border-dBlue pu-1'>
                          <div className="pl-1">
                            <li><span className='fw-bold'>Software:</span> <span className="text-display">Adobe Illustrator, Adobe Photoshop, Adobe After Effects, Figma</span></li>
                          </div>
                        </ul>
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
                  download="Resume_Kevin-Duong_2025_v3_standard.pdf"
                  target="_blank"
                  size={"md"}
                  color={"blue"}
                  addClass={"text-decoration-none"}
                >
                  PDF Download (Standard)
                </ButtonComponent>

                <ButtonComponent
                  href={grayscalePath}
                  download="Resume_Kevin-Duong_2025_v3_Grayscale.pdf"
                  target="_blank"
                  size={"md"}
                  color={"blue"}
                  addClass={"text-decoration-none"}
                >
                  PDF Download (Grayscale)
                </ButtonComponent>
              </div>

            </div>
        </div>
    )
});

export default ResumePage