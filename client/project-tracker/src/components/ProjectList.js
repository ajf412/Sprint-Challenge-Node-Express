import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/api/projects')
            .then(response => {
            this.setState(() => ({ projects: response.data }));
            })
            .catch(error => {
            console.error('Server Error', error);
            });
        }
    
    render() {
        return (
            <div className="project-list">
            {this.state.projects.map(project => (
                <ProjectDetails key={project.id} project={project} />
            ))}
            </div>
        );
    }
}

function ProjectDetails({ project }) {
    const { id, name, description, completed } = project;
    return (
        <div>
            <Link to={`/${project.id}`} className='project-card'>
                <h2>{name}</h2>
            </Link>
            <p className='description'>
                Description: <em>{description}</em>
            </p>
            <p className='completed'>
                Completed: <input type='checkbox' value={completed} readOnly/>
            </p>
        </div>
    );
}