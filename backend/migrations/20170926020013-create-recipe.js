'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      product: {
        type: Sequelize.ARRAY
      },
      protein: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      ratings: {
        type: Sequelize.INTGER
      },
      thumb: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      undeliverable_ingredients: {
        type: Sequelize.ARRAY
      },
      weeks: {
        type: Sequelize.ARRAY
      },
      calories: {
        type: Sequelize.STRING
      },
      carbos: {
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
      },
      deliverable_ingredients: {
        type: Sequelize.ARRAY
      },
      description: {
        type: Sequelize.TEXT
      },
      difficulty: {
        type: Sequelize.INTEGER
      },
      fats: {
        type: Sequelize.STRING
      },
      favorites: {
        type: Sequelize.INTEGER
      },
      fiber: {
        type: Sequelize.STRING
      },
      headline: {
        type: Sequelize.STRING
      },
      recipe_id: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      incompatiabilites: {
        type: Sequelize.BOOLEAN
      },
      ingredients: {
        type: Sequelize.ARRAY
      },
      keyword: {
        type: Sequelize.ARRAY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Recipes');
  }
};
