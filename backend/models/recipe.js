'use strict';
module.exports = (sequelize, DataTypes) => {
  var Recipe = sequelize.define('Recipe', {
    name: DataTypes.STRING,
    products: {
        type:DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue:[],
        primaryKey: true
    },
    proteins: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    ratings: DataTypes.INTEGER,
    thumb: DataTypes.STRING,
    time: DataTypes.STRING,
    undeliverable_ingredients: 
    {
        type:DataTypes.ARRAY(DataTypes.TEXT),
        allowNUll: false,
        defaultValue:[],
        primaryKey: true
    },
    weeks:{
        type:DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue:[],
        primaryKey: true
    },
    calories: DataTypes.STRING,
    carbos: DataTypes.STRING,
    country: DataTypes.STRING,
    deliverable_ingredients: {
        type:DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue:[],
        primaryKey: true
    },
    description: DataTypes.TEXT,
    difficulty: DataTypes.INTEGER,
    fats: DataTypes.STRING,
    favorites: DataTypes.INTEGER,
    fibers: DataTypes.STRING,
    highlighted: DataTypes.BOOLEAN,
    headline: DataTypes.STRING,
    recipe_id: DataTypes.STRING,
    image: DataTypes.STRING,
    incompatiabilites: DataTypes.BOOLEAN,
    ingredients:{
        type:DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: false,
        defaultValue:[],
        primaryKey: true
    },
    keyword: {
        type:DataTypes.ARRAY(DataTypes.TEXT),
        allowNull: true,
        defaultValue:[],
        primaryKey: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Recipe.belongsTo(models.User, {
            onDelete: "CASCADE",
            foreignKey:{
                allowNull:false
            }
        });
      }
    }
  });
  return Recipe;
};
