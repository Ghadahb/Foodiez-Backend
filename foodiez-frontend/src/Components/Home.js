import React from 'react';
import CateList from './CateList'
import { Link } from "react-router-dom";
import RecipeList from './RecipeList';
import RecipeCard from './RecipeCard';

function Home() {
    return (
        <div>
            <Link to="">
            <h1>  Take Me Home ♞ </h1>
            </Link>

            <CateList/>

           
           {/* <RecipeList /> */}
           
           
        </div>
    )
}

export default Home;
