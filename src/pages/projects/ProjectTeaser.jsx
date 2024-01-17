// ProjectTeaser.js

import React from 'react';
import { Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

function ProjectTeaser({ title, snippet, imageUrl, link }) {
    return (
        <Link to={link} style={{ color: '#000', }}>
        <Segment className="projectsTeaser">
            {imageUrl && <Image size='medium' style={{ float: 'left', marginRight: '34px', }} rounded src={imageUrl} alt={title} />}
            <h3>{title}</h3>
            <p>{snippet}</p>
        </Segment>
        </Link>
    );
}

export default ProjectTeaser;