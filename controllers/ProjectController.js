import ProjectHelpers from '../data/helpers/projectModel';
import projectdb from '../data/seeds/01-projects';

// GET USER
const ProjectController = {
  getProjects: (req, res) => {
    projectdb
      ProjectHelpers.get()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },

  getProject: (req, res) => {
    projectdb
      ProjectHelpers.get()
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },

  getProjectActions: (req, res) => {
    projectdb
      ProjectHelpers.get(req.params.id)
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },

  createProject: (req, res) => {
    projectdb
      ProjectHelpers.insert(req.body)
      .then(newProject => {
        res.json(newProject);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }, 

  updateProject: (req, res) => {
    projectdb
      ProjectHelpers.update(req.params.id, req.body)
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },

  deleteProject: (req, res) => {
    projectdb
      ProjectHelpers.remove(req.params.id)
      .then(project => {
        res.json({ msg: 'Project deleted.' });
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }
} 

export default ProjectController;
