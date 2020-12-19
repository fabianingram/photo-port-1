import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About (){
    return (
        <section className="my-5">
            <h1 id="about" >Who Am I? Who are we all who walk on earth for a fraction of eternity and creating it so through its own experience... of itself. </h1>
            <h2>We are you.</h2>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
        
    );
}

export default About;