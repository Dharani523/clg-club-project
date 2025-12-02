const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student','faculty','superadmin','clubadmin'], default: 'student' },
  department: String,
  year: Number,
  interests: [String],
  badges: [{ name: String, date: Date }],
  profilePicUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);
