// AggregationPage.js

import React from 'react';
import './Projects.css'
import ProjectTeaser from './ProjectTeaser';

function Projects() {
    const projects = [
        {
            title: "Genetic Alliance",
            snippet: "Lorem Ipsum Dolor Sit AmetLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque habitant morbi tristique senectus. Eros donec ac odio tempor orci. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris.",
            imageUrl: "/images/content/GALogo.png",
            link: "/designer-space-blog/layout-around-awkward-fireplace"
        },
        {
            title: "iHope Genetic Health",
            snippet: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar pellentesque habitant morbi tristique senectus. Eros donec ac odio tempor orci. Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. ",
            imageUrl: "/images/content/iHope-logo-yellow.png",
            link: "/designer-space-blog/healing-havens"
        },
        // ... add more projects as required
    ];

    return (
        <div class='pageContainer'>
            <div class='projectsContent'>
                <h2 style={{ marginTop: '34px', marginBottom: '89px', }}>Past and Present Projects for Aretetic Solutions, LLC</h2>
                {projects.map((post, index) => (
                     <ProjectTeaser key={index} {...post} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
