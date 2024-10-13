import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import './Home.css';
function Home() {
  const uData = [4000, 3000, 2000, 2780, 1890];
  const pData = [2400, 1398, 9800, 3908, 4800,];
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
        <div className='mx-4 col-md-4'>
          <div className='text-white '>
            <h2 className='py-2'>About me</h2>
            <p className=' sm-text pb-2'> I am Abdelrahman Mostafa, a passionate Front-end/Back-end developer (MERN)  currently pursuing a Bachelor's degree in Computers and Artificial Intelligence at Cairo University. I have a strong foundation in both front-end and back-end development, and I am dedicated to building scalable, high-performance web applications.</p>
          </div>
        </div>
        <div className='col-md-6 '>
          <div className='bg-body rounded rounded-5'>
            <LineChart
              width={500}
              height={300}
              series={[
                { data: pData, label: 'Growth' },
              ]}
              xAxis={[{ scaleType: 'point', data: xLabels }]}
            />
          </div>
        </div>
      </div>
    </div>

  </>
}
export default Home;
