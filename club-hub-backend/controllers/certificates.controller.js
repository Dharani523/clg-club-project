const PDFDocument = require('pdfkit');
const { uploadBuffer } = require('../services/storage.service');
const Certificate = require('../models/certificate.model');
const Registration = require('../models/registration.model');

exports.generateCertificate = async (req, res) => {
  try {
    const { eventId, userId, role } = req.body;
    // basic check: ensure registration exists
    const reg = await Registration.findOne({ event: eventId, user: userId });
    if (!reg) return res.status(400).json({ message: 'User not registered' });

    // make pdf
    const doc = new PDFDocument({ size: 'A4' });
    const buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', async () => {
      const pdfData = Buffer.concat(buffers);
      const result = await uploadBuffer(pdfData, 'certificates', { resource_type: 'raw' });
      const cert = await Certificate.create({ user: userId, event: eventId, issueDate: new Date(), fileUrl: result.secure_url, metadata: { role } });
      res.json({ ok: true, cert });
    });

    // content
    doc.fontSize(20).text('Certificate of Participation', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`This is to certify that`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(18).text(req.body.name || 'Participant', { align: 'center', underline: true });
    doc.moveDown();
    doc.fontSize(12).text(`Has participated in event`, { align: 'center' });
    doc.fontSize(14).text(req.body.eventTitle || '', { align: 'center' });
    doc.end();

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
