import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const[categories, setCategory] = useState([])

    useEffect( () =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className=" space-y-6">
            <h2 className="text-2xl mt-5 p-2 font-bold">All Categories</h2>
            {
                categories.map(category => 
                <Link key={category.id} 
                className=" block ml-4 text-xl font-semibold"
                to={`ctegory${category.id}`}
                >
                    {category.name}
                </Link>)
            }
        </div>
    );
};

export default LeftSideNav;