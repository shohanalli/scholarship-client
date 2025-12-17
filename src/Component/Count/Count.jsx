import React from 'react';
import image from '../../image//bgcount.png'
import { RiGraduationCapLine } from 'react-icons/ri';
import { FaUserGraduate } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import { LuNotebookPen } from "react-icons/lu";
import CountNumber from '../CountNumber/CountNumber';
const Count = () => {
    return (
<div className='relative inset-0 bg-cover bg-center bg-no-repeat min-h-[60vh] sm:min-h-[50vh] md:min-h-[50vh]  w-full' style={{ backgroundImage: `url(${image})` }}>
    <div className='absolute inset-0 bg-black/60'></div>
    <div className="relative w-11/12 md:w-10/12 mx-auto py-15 items-center  flex flex-col md:flex-row gap-5 text-white h-full">
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center items-center w-full h-full'>
            <div className='flex flex-col justify-center items-center w-full border-r '>
                <LuNotebookPen size={50} color="#F94C10"/>
                <h1 className='text-3xl mt-5 font-bold'><CountNumber value={2865} /></h1>
                <p className='text-lg font-bold'>Learners</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full border-r '>
                <TbWorld size={50} color="#F94C10"/>
                <h1 className='text-3xl mt-5 font-bold'><CountNumber value={35} /></h1>
                <p className='text-lg font-bold'>Countries Reached</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full border-r'>
                <FaUserGraduate size={50} color="#F94C10"/>
                <h1 className='text-3xl mt-5 font-bold'><CountNumber value={5238} /></h1>
                <p className='text-lg font-bold'>Graduates</p>
            </div>
            <div className='flex flex-col justify-center items-center w-full border-r'>
                <RiGraduationCapLine size={50} color="#F94C10"/>
                <h1 className='text-3xl mt-5 font-bold'><CountNumber value={603} /></h1>
                <p className='text-lg font-bold'>Courses Published</p>
            </div>
        </div>
    </div>
</div>

    );
};

export default Count;