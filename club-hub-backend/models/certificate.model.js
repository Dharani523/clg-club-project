const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CertificateSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  event: { type: Schema.Types.ObjectId, ref: 'Event' },
  issueDate: Date,
  fileUrl: String,
  metadata: { position: String, role: String }
});

CertificateSchema.index({ user: 1, event: 1 }, { unique: true });
module.exports = mongoose.model('Certificate', CertificateSchema);
