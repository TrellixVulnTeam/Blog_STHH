import React from "react";
import AllArticles from "./AllArticles";
import HeaderBg from '../assets/img/Blog.jpg'
import Header from "./Header";
function Blog(){
    return(
        <div>
            <Header img={HeaderBg} title="Blog" subtitle="Articles sur mes expériences scolaires,professionnelles et personnelles."/>
            <AllArticles/>
        </div>
    )
}

export default Blog;