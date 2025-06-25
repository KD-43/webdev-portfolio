import React, { memo } from 'react';
import Grid from '../components/Grid/grid';
import CardComponent from '../components/Card/card';

const ProjectPage = memo(function ProjectPageComponent () {
  
  const linkTrigger = (url) => {
    if (url) {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');

      if (newWindow) {
        newWindow.opener = null;
      } else {
        alert('Popup blocker might have prevented the new tab from opening. Please check you browser settings.')
      }
    } else {
      console.warn("No URL provided to linkTrigger")
    }
  }
    return (
        <div className="page-wrapper container flex-column fs-1 text-blue pt-5">
            <h1 className='page-heading text-display fs-4 mu-0 pb-1'>Current Projects</h1>
            <div className="line-group w-75 mu-0">
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
              <hr className="line-item mu-0" />
            </div>

            <div className='w-50 pt-5'>
              <Grid.Row gap={40} columns={3}>
                <Grid.Col span={2}>
                  <CardComponent
                    addClassToBase={"border-xs border-radius-sm border-blue card-brutkit"}
                    addClassToHeader={""}
                    addClassToBody={""}
                    addClassToFooter={""}
                    title={"Brutkit"}
                    footer={"REACT.JS, SASS/CSS"}
                    onClick={() => linkTrigger("https://github.com/KD-43/brutkit")}
                  >
                    React UI-component Library
                    <ul id="list-style-plus">
                      <li className='pl-1'>9 controlled components</li>
                      <li className='pl-1'>'Brutalism' design theme</li>
                      <li className='pl-1'>Simple and easy integration</li>
                      <li className='pl-1'>Utility Classes</li>
                    </ul>
                  </CardComponent>
                </Grid.Col>
                {/* <CardComponent
                  addClassToBase={"border-xs border-radius-sm border-mGrey"}
                  addClassToHeader={""}
                  addClassToBody={""}
                  addClassToFooter={""}
                  title={"Pigeon Gamer"}
                  footer={"HTML5, JavaScript, SASS/CSS, Bootstrap"}
                  onClick={() => linkTrigger("https://github.com/KD-43/pigeongamer")}
                >
                  Discount games finder
                  <ul>
                    <li>Cheapshark-API integration</li>
                    <li>Bootstrap Integration</li>
                  </ul>
                </CardComponent> */}
              </Grid.Row>
            </div>
        </div>
    )
})

export default ProjectPage