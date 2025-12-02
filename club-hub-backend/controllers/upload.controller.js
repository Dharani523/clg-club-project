const { uploadBuffer } = require('../services/storage.service');

exports.uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file provided' });
    const folder = req.query.folder || 'uploads';
    const result = await uploadBuffer(req.file.buffer, folder);
    res.json({ ok: true, url: result.secure_url, public_id: result.public_id });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
