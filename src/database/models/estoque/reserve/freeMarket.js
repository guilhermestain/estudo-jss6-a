const Sequelize = require('sequelize')

module.exports = (sequelize) => {
  const freeMarket = sequelize.define('freeMarket', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },

    trackingCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    zipCode: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    neighborhood: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    street: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    number: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    complement: {
      type: Sequelize.STRING,
    },


    referencePoint: {
      type: Sequelize.STRING,
    },

    cnpjOrCpf: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  })

  freeMarket.associate = (models) => {
    freeMarket.belongsToMany(models.productBase, { through: 'freeMarketParts' })
  }

  return freeMarket
}
