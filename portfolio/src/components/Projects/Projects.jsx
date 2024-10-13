import React from 'react'
import { FaNode,FaReact } from "react-icons/fa";
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
              <h4 className="card-title">First Project</h4>
              <p className="card-text">
                A brief description of the project goes here. Highlight the technologies used and key features.
              </p>
              <a href="#" className="btn btn-light btn-project">View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
              <div className='text-center'>
                <FaNode className='icon-size-xl' />
              </div>
              <h4 className="card-title">First Project</h4>
              <p className="card-text">
                A brief description of the project goes here. Highlight the technologies used and key features.
              </p>
              <a href="#" className="btn btn-light btn-project">View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
            <div className='text-center'>
              <FaNode className='icon-size-xl'/>
              </div>
              <h4 className="card-title">First Project</h4>
              <p className="card-text">
                A brief description of the project goes here. Highlight the technologies used and key features.
              </p>
              <a href="#" className="btn btn-light btn-project">View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
            <div className='text-center'>
              <FaReact className='icon-size-xl'/>
              </div>
              <h4 className="card-title">First Project</h4>
              <p className="card-text">
                A brief description of the project goes here. Highlight the technologies used and key features.
              </p>
              <a href="#" className="btn btn-light btn-project">View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
            <div className='text-center'>
              <FaReact className='icon-size-xl'/>
              </div>
              <h4 className="card-title">First Project</h4>
              <p className="card-text">
                A brief description of the project goes here. Highlight the technologies used and key features.
              </p>
              <a href="#" className="btn btn-light btn-project">View Project</a>
            </div>
          </div>
        </div>
        <div className="card-container col-md-4">
          <div className="card project-card text-white">
            <div className="card-body">
            <div className='text-center'>
              <FaReact className='icon-size-xl'/>
              </div>
              <h4 className="card-title">First Project</h4>
              <p className="card-text">
                A brief description of the project goes here. Highlight the technologies used and key features.
              </p>
              <a href="#" className="btn btn-light btn-project">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default Projects