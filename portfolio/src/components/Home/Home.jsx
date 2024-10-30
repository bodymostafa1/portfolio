import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { FaHtml5, FaNode, FaPython } from "react-icons/fa";
import './Home.css';
function Home() {
  const pData = [0, 2000, 4000, 6000, 8000,];
  const xLabels = [
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
  ];
  return <>
    <div className='container'>
      <div className='row justify-content-between'>
        <div className='my-5 col-md-5'>
          <div className='text-white'>
            <h2 className='py-2'>About me</h2>
            <p className=' sm-text'> I am Abdelrahman Mostafa, a dedicated and enthusiastic Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I’m currently pursuing a Bachelor’s degree in Computers and Artificial Intelligence at Cairo University, where I am deepening my expertise in both software development and artificial intelligence.</p>
            <p className='sm-text'>I have a strong foundation in web technologies and have experience building scalable, high-performance applications for both front-end and back-end. I am passionate about delivering seamless user experiences and am well-versed in creating responsive, accessible, and visually appealing web interfaces. On the back end, I focus on building efficient, secure, and reliable server-side applications that meet the demands of modern web standards.</p>
            <p className='sm-text'>Beyond web development, I have a growing interest in artificial intelligence and machine learning. I'm actively working on projects that integrate AI into web applications, utilizing my background in Python and data science. In my free time, I enjoy experimenting with new technologies and staying up-to-date with industry trends to keep my skills sharp and relevant.</p>
          </div>
        </div>
        <div className=' text-capitalize col-md-6 mt-4'>
          <div class="timeline">
            <ul>
              <li>
                <span>2023</span>
                <div class="content">
                  <h3>Front-end development</h3>
                  <p>
                    I completed a front-end development course in React.js at Route Academy, where I built several projects to reinforce my skills. These include an e-commerce website, a weather application, and a food recipe website, among others
                  </p>
                </div>
              </li>
              <li>
                <span>2024</span>
                <div class="content">
                  <h3>back-end development</h3>
                  <p>
                    took a back-end development course at Route Academy where i developed a range of APIs to solidify my server-side skills. These projects included an e-commerce API, a posts and comments API, and a LinkedIn-like API, among others.
                  </p>
                </div>
              </li>
              <li>
                <span>currently</span>
                <div class="content">
                  <h3>data science</h3>
                  <p>
                    I'm currently enrolled in an online data science course at DataCamp, where I'm gaining hands-on experience with data manipulation, statistical analysis, and machine learning. The course provides interactive exercises and real-world projects to build my skills in data-driven decision-making and analysis.
                  </p>
                </div>
              </li>
              <li>
                <span>expected</span>
                <div class="content">
                  <h3>future expectations</h3>
                  <p>
                    Over the next two years, I am committed to honing my skills in three interconnected fields: front-end development, back-end development, and data science. I have deliberately chosen these areas because they complement each other, creating a well-rounded expertise that will enable me to build comprehensive and innovative solutions.                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-between py-5 text-capitalize gap-3  row">
          <div className='col-md-4 rounded rounded-5 home-card text-center text-white '>
            <div>
            <FaHtml5 className='icon-size-xl mt-2 ' />
            <h5 className=' py-2'> Front-end technologies:</h5>
            <p>HTML5, CSS3, Javascript, jquery, React.js, ajax, bootstrap, typescript </p>
            </div>
          </div>
          <div className='col-md-4  rounded rounded-5 home-card text-center text-white '>
            <div>
            <FaNode className='icon-size-xl mt-2' />
            <h5 className=' py-2'> Back-end technologies:</h5>
            <p>express.js, sql, noSql, mongodb, mongoose, sqlServer, Node.js, bcrypt, jwt</p>
            </div>
          </div>
          <div className='col-md-3 rounded rounded-5 home-card text-center text-white '>
            <div>
            <FaPython className='icon-size-xl mt-2' />
            <h5 className=' py-2'> miscellaneous:</h5>
            <p>django, C++, Java, python, godot</p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </>
}
export default Home;
