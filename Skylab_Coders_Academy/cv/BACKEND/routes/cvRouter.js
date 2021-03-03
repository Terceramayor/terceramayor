const { Router } = require('express');
const controllerActions = require('../controller');

function cvRouter() {
  const router = Router();

  router
    .route('/retrieve')
    .get(controllerActions.getCurriculum);

  router
    .route('/upload')
    .post(controllerActions.uploadCurriculum);

  return router;
}

module.exports = cvRouter();
