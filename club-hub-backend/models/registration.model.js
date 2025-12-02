const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
  event: { type: Schema.Types.ObjectId, ref: 'Event', required: true, index: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  status: { type: String, enum: ['registered','attended','cancelled'], default: 'registered' },
  registeredAt: { type: Date, default: Date.now },
  attendanceMarked: { type: Boolean, default: false },
  attendanceTime: Date
});

RegistrationSchema.index({ event: 1, user: 1 }, { unique: true });
module.exports = mongoose.model('Registration', RegistrationSchema);
