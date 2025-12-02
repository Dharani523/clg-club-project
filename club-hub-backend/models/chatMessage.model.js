const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatMessageSchema = new Schema({
  roomId: String,
  sender: { type: Schema.Types.ObjectId, ref: 'User' },
  message: String,
  attachments: [String],
  createdAt: { type: Date, default: Date.now }
});

ChatMessageSchema.index({ roomId: 1, createdAt: 1 });
module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
