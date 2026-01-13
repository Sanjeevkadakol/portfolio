import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const isTiDB = process.env.DB_HOST && process.env.DB_HOST.includes('tidb');
const defaultPort = isTiDB ? 4000 : 3306;

const sequelize = new Sequelize(
  process.env.DB_NAME || 'portfolio_cms',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || defaultPort,
    dialect: 'mysql',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

export default sequelize;
