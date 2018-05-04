import express from 'express';
import ActionController from '../controllers/ActionController';

const actionRoutes = express.Router();
const { getActions, getAction, getActionActions, createAction, updateAction, deleteAction } = ActionController;
// 

actionRoutes.get('/', getActions);
actionRoutes.get('/:id', getAction);
actionRoutes.post('/', createAction);
actionRoutes.put('/:id', updateAction);
actionRoutes.delete('/:id', deleteAction);

export default actionRoutes;