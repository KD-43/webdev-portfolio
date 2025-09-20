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
              <Grid.Row gap={40} columns={4}>
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
                <Grid.Col span={2}>
                  <CardComponent
                    addClassToBase={"border-xs border-radius-sm border-blue"}
                    addClassToHeader={""}
                    addClassToBody={""}
                    addClassToFooter={""}
                    title={"CineRank"}
                    footer={"HTML5, SASS/CSS, Vite/REACT.JS, Bootstrap"}
                    onClick={() => linkTrigger("https://cinerank.pages.dev")}
                  >
                    Move tier list maker
                    <ul id="list-style-plus">
                      <li className='pl-1 mb-1'>Fully interactive, single-page application that allows users to create, customize, and manage personal tier lists.</li>
                      <li className='pl-1 mb-1'>Architected a custom, all-in-one state management hook (useTierList) to encapsulate all complex logic.</li>
                      <li className='pl-1 mb-1'>Implemented a multi-container, sortable drag-and-drop interface with 'React DnD'</li>
                      <li className='pl-1 mb-1'>Designed and built a RESTful API backend using Cloudflare Functions to handle all CRUD operations.</li>
                      <li className='pl-1 mb-1'>Configured a full CI/CD pipeline from GitHub to Cloudflare Pages for automatic deployments, including management of server-side secrets and SPA routing (_redirects).</li>
                    </ul>
                  </CardComponent>
                </Grid.Col>
              </Grid.Row>
            </div>
        </div>
    )
})

export default ProjectPage