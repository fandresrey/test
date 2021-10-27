'use strict';
//Modelo ORM de la tabla Tests, con las respectivas asociaciones foraneas

import sequelizePaginate from 'sequelize-paginate';
module.exports = (sequelize, DataTypes) => {
  const Tests = sequelize.define (
    'Tests',
    {
      unique_id: DataTypes.STRING,
      data: DataTypes.STRING,
      value: DataTypes.INTEGER,
    },
    {}
  );
  //   Tests.associate = function (models) {
  //     Tests.belongsTo(models.User, {
  //       foreignKey: { name: 'user_id', allowNull: true }

  //     })
  //     Tests.belongsTo(models.Building, {
  //       foreignKey: { name: 'building_id', allowNull: true }

  //     })
  //   }

  sequelizePaginate.paginate (Tests);
  return Tests;
};
