import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('https://learning-platform-server-jet.vercel.app/course_categories')
        .then(res => res.json())
        .then(data=> setCategories(data))

    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div>
                {
                    categories.map(category => <h5 key={category.id} >
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </h5>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;