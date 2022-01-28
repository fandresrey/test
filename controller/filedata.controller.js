import models from '../models/index';
import Sequelize from 'sequelize';
import {v4 as uuid} from 'uuid';

const getall = async (req, res, next) => {
  try {
    console.log ('Files');

    const Files = await models.Files.findAll ({});

    return res.status (200).send ({Results: 'Completado', res: Files});
  } catch (err) {
    console.log (err);
    next (err);
  }
};
const setCreate = async (req, res, next) => {
  try {
    console.log ('Files');
    const file = req.body;
    var newArray = [];
    console.log (uuid ());

    file.forEach ((element, index) => {
      newArray.push ({
        uuid: uuid (),
        name: element.name,
        lastNma: element.lastName,
        phone: element.phone,
     
      });
    });
    console.log (newArray);
    const Files = await models.Files.bulkCreate (newArray);
    return res.status (200).send ({Results: 'Completado', res: Files});
  } catch (err) {
    console.log (err);
    next (err);
  }
};

export default {
  getall,
  setCreate,
};
