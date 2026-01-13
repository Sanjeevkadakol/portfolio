import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Settings = sequelize.define('Settings', {
  siteName: {
    type: DataTypes.STRING,
    defaultValue: 'My Portfolio',
  },
  siteDescription: {
    type: DataTypes.TEXT,
  },
  socialLinks: {
    type: DataTypes.JSON,
    defaultValue: {},
  },
  theme: {
    type: DataTypes.JSON,
    defaultValue: {
      primaryColor: '#3b82f6',
      secondaryColor: '#8b5cf6',
      mode: 'light',
    },
  },
});

export default Settings;
