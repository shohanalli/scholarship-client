import { useQuery } from '@tanstack/react-query';
import React from 'react';
import UseAxiosSecure from '../../Hooks/UseAxios/UseAxiosSecure';
import Loading from '../../Component/Loading/Loading';
import { Pie, PieChart, Tooltip } from 'recharts';

const Analytics = () => {
    const axiosSecure = UseAxiosSecure();
    const { data, isLoading } = useQuery({
        queryKey: ['dashboardStatus'],
        queryFn: async()=>{
            const result = await axiosSecure.get('/dashboard-status');
            return result.data
        }  
        });
    const { data: category = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async()=>{
            const result = await axiosSecure.get('/scholarship-category');
            return result.data
        }  
        });
        const paichartData = data =>{
    return data.map(item => {
        return { category: item._id, value: item.count}
    })
}
        console.log(category);
        if (isLoading){
            return <Loading />
        }
    return (
        <div>
<div className="flex items-center gap-7 p-5 flex-wrap"> 

      <div className="bg-white  shadow px-10 py-8 flex flex-col items-center rounded-sm">
    <div className="text-2xl text-secondary font-semibold mb-2 ">Total Users</div>
    <div className="stat-value text-primary">{data.totalUser}</div>
  </div>


  <div className="bg-white shadow px-10 py-8 flex flex-col items-center rounded-sm">
    <div className="text-2xl text-secondary font-semibold mb-2 ">Total Scholarships</div>
    <div className="stat-value text-primary">{data.totalScholarships}</div>
  </div>
 
  <div className="bg-white shadow px-10 py-8 flex  flex-col items-center rounded-sm">
    <div className="text-2xl text-secondary font-semibold mb-2 ">Total Fees Collected</div>
    <div className="stat-value text-primary"> $ {data.totalScholarFree}</div>
  </div>
</div>


<div className='w-full h-[400px]'>
    <h1 className='text-2xl py-5 ml-5 font-bold'>Application Counts Scholarship Category</h1>
    <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 2 }} responsive>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        nameKey='category'
        data={paichartData(category)}
        
        cx="50%"
        cy="80%"
        outerRadius="120%"
        fill="#8884d8"
        label
        isAnimationActive={true}

      />
      <legend></legend>
      <Tooltip></Tooltip>
    </PieChart>
</div>



        </div>
    );
};

export default Analytics;