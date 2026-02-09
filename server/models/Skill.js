import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Skill = sequelize.define('Skill', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.ENUM('frontend', 'backend', 'tools', 'soft-skills', 'ai-ml', 'web-dev', 'design', 'certification', 'other'),
    defaultValue: 'frontend',
  },
  proficiency: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 100,
    },
  },
  icon: {
    type: DataTypes.STRING,
    defaultValue: '',
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive'),
    defaultValue: 'active',
  },
});

export default Skill;
