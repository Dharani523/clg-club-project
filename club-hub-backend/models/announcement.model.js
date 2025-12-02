const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnnouncementSchema = new Schema({
  club: { type: Schema.Types.ObjectId, ref: 'Club' },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  body: String,
  attachments: [String],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  comments: [{ author: Schema.Types.ObjectId, text: String, createdAt: Date }],
  visibility: { type: String, enum: ['public','club-only','department'], default: 'public' },
  createdAt: { type: Date, default: Date.now }
});

AnnouncementSchema.index({ createdAt: -1 });
module.exports = mongoose.model('Announcement', AnnouncementSchema);
