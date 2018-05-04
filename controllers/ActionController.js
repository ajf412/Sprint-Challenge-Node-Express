import ActionHelpers from '../data/helpers/actionModel';
import actiondb from '../data/seeds/02-actions';

// GET USER
const ActionController = {
  getActions: (req, res) => {
    actiondb
      ActionHelpers.get()
      .then(actions => {
        res.json(actions);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },

  getAction: (req, res) => {
    actiondb
      ActionHelpers.get(req.params.id)
      .then(actions => {
        res.json(actions);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },

  createAction: (req, res) => {
    actiondb
      ActionHelpers.insert(req.body)
      .then(newAction => {
        res.json(newAction);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }, 

  updateAction: (req, res) => {
    actiondb
      ActionHelpers.update(req.params.id, req.body)
      .then(action => {
        res.json(action);
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  },

  deleteAction: (req, res) => {
    actiondb
      ActionHelpers.remove(req.params.id)
      .then(action => {
        res.json({ msg: 'Action deleted.' });
      })
      .catch(err => {
        res.status(500).json({ error: err });
      });
  }
} 

export default ActionController;
