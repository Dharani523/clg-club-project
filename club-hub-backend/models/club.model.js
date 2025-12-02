const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClubSchema = new Schema({
  name: { type: String, required: true, index: true },
  shortCode: { type: String, unique: true, uppercase: true },
  description: String,
  facultyInCharge: { type: Schema.Types.ObjectId, ref: 'User' },
  members: [{ user: { type: Schema.Types.ObjectId, ref: 'User' }, role: String, joinedAt: Date }],
  tags: [String],
  coverImageUrl: String,
  createdAt: { type: Date, default: Date.now }
});

ClubSchema.index({ name: 'text', description: 'text', tags: 1 });

module.exports = mongoose.model('Club', ClubSchema);
