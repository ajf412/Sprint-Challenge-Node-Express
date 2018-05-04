import express from 'express';
import ProjectController from '../controllers/ProjectController';

const projectRoutes = express.Router();
const { getProjects, getProject, getProjectActions, createProject, updateProject, deleteProject } = ProjectController;
// 

projectRoutes.get('/', getProjects);
projectRoutes.get('/:id', getProject);
projectRoutes.get('/:id/actions', getProjectActions);
projectRoutes.post('/', createProject);
projectRoutes.put('/:id', updateProject);
projectRoutes.delete('/:id', deleteProject);

export default projectRoutes;