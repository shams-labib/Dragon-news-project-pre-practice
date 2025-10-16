import React from 'react';
import { Link } from 'react-router';

const Btn = ({item}) => {
    return (
        <div className='p-1'>
             <Link to={`/category/${item.id}`} className="btn bg-white hover:bg-gray-100 w-full rounded-lg">{item.name}</Link>
        </div>
    );
};

export default Btn;