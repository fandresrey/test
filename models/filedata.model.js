'use strict';
//Modelo ORM de la tabla Files, con las respectivas asociaciones foraneas

import sequelizePaginate from 'sequelize-paginate';
module.exports = (sequelize, DataTypes) => {
  const Files = sequelize.define (
    'Files',
    {
      uuid: DataTypes.STRING,
      name: DataTypes.STRING,
      lastNma: DataTypes.STRING,
      phone: DataTypes.STRING,
      adress: DataTypes.STRING,
    },
    {}
  );

  sequelizePaginate.paginate (Files);
  return Files;
};
