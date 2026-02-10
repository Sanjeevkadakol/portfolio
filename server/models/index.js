import sequelize from '../config/database.js';
import Project from './Project.js';
import Skill from './Skill.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import Settings from './Settings.js';

const models = {
    Project,
    Skill,
    Blog,
    Contact,
    Settings,
};

// Initialize models
Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

export { Project, Skill, Blog, Contact, Settings };
export default sequelize;
