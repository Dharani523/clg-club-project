const Registration = require('../models/registration.model');

exports.registerForEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const reg = new Registration({ event: eventId, user: req.user._id });
    await reg.save();
    res.json(reg);
  } catch (err) {
    if (err.code === 11000) return res.status(400).json({ message: 'Already registered' });
    res.status(500).json({ message: err.message });
  }
};
