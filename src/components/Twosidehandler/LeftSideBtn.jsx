import React from 'react';
import { Link } from 'react-router';
import useFetchData from '../../UseHooks/CustomHooks';
import Btn from './Btn';

const LeftSideBtn = () => {

    const {data} = useFetchData();
    

    return (
        <div className=''>
            <h1 className='text-xl font-bold'>All Categories({data.length})</h1>
           <div className='mt-3'>
             {
                data.map(item=> <Btn key={item.id} item={item}></Btn>)
            }
           </div>
        </div>
    );
};

export default LeftSideBtn;