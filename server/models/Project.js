import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Project = sequelize.define('Project', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  techStack: {
    type: DataTypes.JSON, // Stores array as JSON
    defaultValue: [],
  },
  category: {
    type: DataTypes.ENUM('ai', 'ml', 'web', 'fullstack'),
    defaultValue: 'web',
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  link: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  github: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  featured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

export default Project;
