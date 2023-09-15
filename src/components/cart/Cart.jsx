import React from 'react';

const Cart = ({ selectedCourse }) => {
    console.log(selectedCourse)
    return (
        <div>
            <div className='w-72 bg-white p-4 rounded-md'>
                <h1 className='my-3 text-lg font-bold text-[#2F80ED] '>Credit Hour Remaining 20 hr</h1>
                <hr />
                <h1 className='my-3 text-xl font-bold text-[#1C1B1B]'>Course Name</h1>
                {
                    selectedCourse.map((course, index) => (
                        <p key={index}> {index + 1}. {course.title}</p>))
                }
                <hr />
                <p className='my-3 text-base font-medium text-[#494949]'>Total Credit Hour : </p>
                <hr />
                <p className='mt-3 text-base font-semibold text-[#494949]'>Total Price :  USD</p>

            </div>
        </div>
    );
};

export default Cart;