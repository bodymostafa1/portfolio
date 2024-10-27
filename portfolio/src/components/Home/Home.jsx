import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { FaHtml5,FaNode ,FaPython    } from "react-icons/fa";
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
        <div className='my-5 col-md-4'>
          <div className='text-white'>
            <h2 className='py-2'>About me</h2>
            <p className=' sm-text typing'> I am Abdelrahman Mostafa, a passionate Front-end/Back-end developer (MERN)  currently pursuing a Bachelor's degree in Computers and Artificial Intelligence at Cairo University. I have a strong foundation in both front-end and back-end development, and I am dedicated to building scalable, high-performance web applications.</p>
          </div>
        </div>
        <div className='col-md-6 my-5'>
          <div className='bg-body rounded rounded-5 bg-body-secondary'>
            <LineChart
              className=' mx-2'
              width={650}
              height={300}
              series={[
                { data: pData, label: 'Growth' },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center py-5 text-capitalize gap-3  ">
        <div className=' rounded rounded-5 home-card border border-black border-2 bg-black text-center text-white '>
          <FaHtml5 className='icon-size-xl mt-2' />
          <h5 className=' py-2'> Front-end technologies:</h5>
          <p>HTML5, CSS3, Javascript, jquery, React.js, ajax, bootstrap, typescript </p>
        </div>
        <div className=' rounded rounded-5 home-card border border-black border-2 bg-black text-center text-white '>
          <FaNode className='icon-size-xl mt-2' />
          <h5 className=' py-2'> Back-end technologies:</h5>
          <p>express.js, sql, noSql, mongodb, mongoose, sqlServer, Node.js, bcrypt, jwt</p>
        </div>
        <div className=' rounded rounded-5 home-card border border-black border-2 bg-black text-center text-white '>
        <FaPython  className='icon-size-xl mt-2' />
          <h5 className=' py-2'> miscellaneous:</h5>
          <p>django, C++, Java, python, godot</p>
        </div>
      </div>
    </div>

  </>
}
export default Home;
