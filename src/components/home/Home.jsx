import React, { useEffect, useState } from 'react';


const Home = () => {

    const [allCourses, setAllCourses] = useState([])

    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data))
    }, [])
    console.log(allCourses)










    return (
        <div className='max-w-screen-xl mx-auto mb-14'>
            <h1 className='text-3xl font-bold text-center mt-14'>Course Registration</h1>
            {/* main section  */}
            <div className='flex mt-14'>
                {/* card section  */}
                <div className='flex flex-wrap gap-4 '>
                    {
                        allCourses.map(course => (
                            <div key={course.id} className='w-72 bg-white p-3 rounded-md '>
                                <img src={course.img} alt="" />
                                <h1 className='font-semibold text-lg mt-3'>{course.title}</h1>
                                <p className='text-sm font-normal text-[#777676] mt-3'>{course.description}</p>
                                <div className='flex justify-between mt-3'>
                                    <p className='font-normal text-base text-[#777676]'>$ Price: {course.price}</p>
                                    <p className='font-normal text-base text-[#777676]'># Credit: {course.credit} hrs</p>
                                </div>
                                <button className='mt-3 text-lg font-semibold bg-[#2F80ED] rounded-md text-white w-full'>Select</button>
                            </div>
                        ))
                    }
                </div>
                {/* cart section  */}
                <div className=''>
                    <div className='w-72 bg-white p-4 rounded-md'>
                        <h1 className='my-3 text-lg font-bold text-[#2F80ED] '>Credit Hour Remaining 20 hr</h1>
                        <hr />
                        <h1 className='my-3 text-xl font-bold text-[#1C1B1B]'>Course Name</h1>
                        <hr />
                        <p className='my-3 text-base font-medium text-[#494949]'>Total Credit Hour : </p>
                        <hr />
                        <p className='mt-3 text-base font-semibold text-[#494949]'>Total Price :  USD</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;