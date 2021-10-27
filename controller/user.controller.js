import models from '../models/index';
import Sequelize from 'sequelize';

const test = async (req, res, next) => {
  try {
    console.log ('test');

    const test = await models.Tests.findAll ({});

    return res.status (200).send ({Results: 'Completado', res: test});
  } catch (err) {
    console.log (err);
    next (err);
  }
};

export default {
  test,
};
