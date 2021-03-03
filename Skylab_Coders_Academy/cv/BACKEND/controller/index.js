const CurriculumModel = require('../model/cvObjectModel');

function cvController() {
  const getCurriculum = async (required, response) => {
    try {
      const cv = await CurriculumModel.find({});
      response.json(cv);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  };

  const uploadCurriculum = async (required, response) => {
    try {
      const cv = new CurriculumModel(required.body);
      await cv.save();
      response.json(cv);
    } catch (error) {
      response.status(500);
      response.send(error);
    }
  };

  return { getCurriculum, uploadCurriculum };
}

module.exports = cvController();
