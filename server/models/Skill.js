import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true,
  },
  category: {
    type: String,
    enum: ['frontend', 'backend', 'database', 'tools', 'other'],
    required: [true, 'Skill category is required'],
  },
  proficiency: {
    type: Number,
    min: 0,
    max: 100,
    default: 50,
  },
  icon: {
    type: String,
    default: '',
  },
  order: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

skillSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;

