import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ProjectView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: null,
            actions: []
        };
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        this.fetchProject(id);
        this.fetchActions(id);
    }

    fetchProject = id => {
        axios.get(`http://localhost:5000/api/projects`)
        .then(response => {
            this.setState(() => ({project: response.data[id-1]}));
            console.log('fetch project: ', this.state);
        })
        .catch(error => {
            console.error(error);
        });
    };

    fetchActions = id => {
      axios.get(`http://localhost:5000/api/projects/${id}/actions`)
        .then(response => {
          console.log('response: ', response);
          this.setState(() => ({actions: response.data.actions}));
          console.log('fetch actions: ', this.state);
        })
        .catch(error => {
            console.error(error);
        });
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    render() {
        if (!this.state.project) {
            return <div>Loading project information...</div>;
          }
        const { name, description, completed } = this.state.project;
        return (
            <div>
                <h2>{name}</h2>
                <p className='description'>
                    Description: <em>{description}</em>
                </p>
                <p className='completed'>
                  Completed: <input type='checkbox' value={completed} readOnly/>
                </p>
                <p>ACTIONS</p>
                  {this.state.actions.map(action => (
                    <ActionList key={action.id} action={action} />
                  ))}
            </div>
        )
    }
}

function ActionList({ action }) {
  const { id, project_id, description, notes, completed } = action;
  return (
    <div>
      <p className='description'>
        Description: <em>{description}</em>
      </p>
      <p className='notes'>
        Notes: <em>{notes}</em>
      </p>
      <p className='completed'>
        Completed: <input type='checkbox' value={completed} readOnly/>
      </p>
    </div>
  );
}