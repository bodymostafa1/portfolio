import React from 'react'
import { FaNode, FaReact } from "react-icons/fa";
import "./Projects.css"
function Projects() {
  return <>
    <div className='container poppins-regular text-capitalize'>
      <div className='row'>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body ">
              <div className='text-center'>
                <FaNode className='icon-size-xl' />
              </div>
              <h4 className="card-title">e-commerce api</h4>
              <p className="card-text">
                an e-commerce api done with node.js and mongoose with features such as authorization , authentication and file upload
              </p>
              <a href="#https://github.com/bodymostafa1/e-commerce" className="btn btn-light btn-project" target='_blank't='_blank'>View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
              <div className='text-center'>
                <FaNode className='icon-size-xl' />
              </div>
              <h4 className="card-title">Job search Api</h4>
              <p className="card-text">
                a linkedIn like api Made with node.js and mongoose with features such as error handling ,validation using JOI , send emails using node mailer and many more
              </p>
              <a href="https://github.com/bodymostafa1/jobSearch" className="btn btn-light btn-project" target='_blank'>View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
              <div className='text-center'>
                <FaNode className='icon-size-xl' />
              </div>
              <h4 className="card-title">post api</h4>
              <p className="card-text">
                a simple post and comments api made with sequelize (ORM)
              </p>
              <a href="https://github.com/bodymostafa1/sequelize2" className="btn btn-light btn-project" target='_blank'>View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
              <div className='text-center'>
                <FaReact className='icon-size-xl' />
              </div>
              <h4 className="card-title">e-commerce (front)</h4>
              <p className="card-text">
                an e-commerce front-end done with react.js and has features such as authentication , validation using yup and many more
              </p>
              <a href="https://bodymostafa1.github.io/ecommerce/" className="btn btn-light btn-project" target='_blank'>View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
              <div className='text-center'>
                <FaReact className='icon-size-xl' />
              </div>
              <h4 className="card-title">recipes website</h4>
              <p className="card-text">
                a food recipes website made with jquery and bootstrap,  has features such as searching by name or first letter , user signup and login and more
              </p>
              <a href="https://bodymostafa1.github.io/food-recipes/" target='_blank' className="btn btn-light btn-project" >View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
              <div className='text-center'>
                <FaReact className='icon-size-xl' />
              </div>
              <h4 className="card-title">Weather Website</h4>
              <p className="card-text">
                a simple wather app made with bootstrap and javascript
              </p>
              <a href="https://bodymostafa1.github.io/weather/" className="btn btn-light btn-project"target='_blank'>View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default Projects