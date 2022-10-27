import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';

const Home = () => {
    const courseName = useLoaderData();
    return (
        <div>
            <h2>Courses are: {courseName.length}</h2>
            {
                courseName.map(course=><CourseCard
                key={course._id}
                course = {course}
                ></CourseCard>)
            }
        </div>
    );
};

export default Home;