const Event = require('../models/event.model');
const Registration = require('../models/registration.model');
const { generateTokenForEvent, verifyToken } = require('../services/qr.service');

exports.createEvent = async (req, res) => {
  try {
    const ev = new Event({ ...req.body, club: req.body.club || req.user.club });
    await ev.save();
    res.json(ev);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.listEvents = async (req, res) => {
  const { upcoming } = req.query;
  const q = upcoming ? { startTime: { $gte: new Date() } } : {};
  const events = await Event.find(q).populate('club');
  res.json(events);
};

exports.getEvent = async (req, res) => {
  const e = await Event.findById(req.params.id).populate('club');
  if (!e) return res.status(404).json({ message: 'Not found' });
  res.json(e);
};

exports.generateAttendanceQR = async (req, res) => {
  try {
    const eventId = req.params.id;
    const token = generateTokenForEvent(eventId, '8h');
    const event = await Event.findByIdAndUpdate(
      eventId,
      { attendanceToken: token, attendanceTokenExpires: new Date(Date.now() + 8 * 60 * 60 * 1000) },
      { new: true }
    );
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json({ ok: true, qrToken: token, expiresAt: event.attendanceTokenExpires });
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.verifyAttendance = async (req, res) => {
  const { token } = req.body;
  const eventId = req.params.id;
  try {
    const decoded = verifyToken(token);
    if (!decoded || decoded.eventId !== eventId) return res.status(400).json({ message: 'Invalid or wrong token' });
    const reg = await Registration.findOneAndUpdate(
      { event: eventId, user: req.user._id },
      { status: 'attended', attendanceMarked: true, attendanceTime: new Date() },
      { new: true }
    );
    if (!reg) return res.status(400).json({ message: 'Not registered' });
    res.json({ ok: true, reg });
  } catch (err) { res.status(500).json({ message: err.message }); }
};
