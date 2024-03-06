import React from "react";
import { Navbar } from '../components/navigation-components/Navbar.js';
import { BlockItem1 } from "../components/blog-components/block-item1.js";

const BlogPage = () => {
    return (
    <div className='container'>
        <header>
            <Navbar/>
        </header> 
        <div >
            <BlockItem1></BlockItem1>
        </div>
    </div>
    );
};

export default BlogPage;