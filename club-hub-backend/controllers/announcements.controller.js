const Announcement = require('../models/announcement.model');

exports.createAnnouncement = async (req, res) => {
  try {
    const a = new Announcement({ ...req.body, author: req.user._id });
    await a.save();
    req.app.get('io')?.emit('announcement', a);
    res.json(a);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.listAnnouncements = async (req, res) => {
  const anns = await Announcement.find().sort({ createdAt: -1 }).limit(50).populate('author','name');
  res.json(anns);
};
