import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const course = useLoaderData();
    return (
        <div>
            <h2>Courses are: {course.length}</h2>
        </div>
    );
};

export default Home;