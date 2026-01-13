import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  content: {
    type: DataTypes.TEXT('long'), // For larger content
    allowNull: false,
  },
  excerpt: {
    type: DataTypes.TEXT,
  },
  coverImage: {
    type: DataTypes.STRING,
  },
  tags: {
    type: DataTypes.JSON,
    defaultValue: [],
  },
  author: {
    type: DataTypes.STRING,
    defaultValue: 'Admin',
  },
  readTime: {
    type: DataTypes.STRING,
  },
  published: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Blog;
