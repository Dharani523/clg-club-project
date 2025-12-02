const Club = require('../models/club.model');

exports.createClub = async (req, res) => {
  try {
    const { name, shortCode, description, tags } = req.body;
    const c = new Club({ name, shortCode, description, tags, facultyInCharge: req.user._id });
    await c.save();
    res.json(c);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.listClubs = async (req, res) => {
  const { q, page = 1, limit = 20 } = req.query;
  const filter = q ? { $text: { $search: q } } : {};
  const clubs = await Club.find(filter).skip((page-1)*limit).limit(Number(limit));
  res.json(clubs);
};

exports.getClub = async (req, res) => {
  const club = await Club.findById(req.params.id).populate('members.user', 'name email role');
  if (!club) return res.status(404).json({ message: 'Not found' });
  res.json(club);
};
