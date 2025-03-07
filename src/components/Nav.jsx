import React from 'react';

const Nav = () => {
    return (
        <div className='p-4  bg-#fff flex  items-center gap-4'>
            <div className='relative text-xl font-semibold'>NotyNote</div>
            <div className='top-0 right-1 absolute color-#555 text-8px font-semibold'>
                DEV
            </div>
        </div>
    );
};

export default Nav;
