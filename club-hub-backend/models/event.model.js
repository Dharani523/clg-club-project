const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  club: { type: Schema.Types.ObjectId, ref: 'Club', required: true, index: true },
  title: { type: String, required: true },
  description: String,
  location: String,
  startTime: Date,
  endTime: Date,
  capacity: Number,
  bannerUrl: String,
  registrationOpen: { type: Boolean, default: true },
  attendanceToken: { type: String },
  attendanceTokenExpires: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

EventSchema.index({ startTime: 1 });
module.exports = mongoose.model('Event', EventSchema);
