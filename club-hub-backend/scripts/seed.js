require('dotenv').config();
const connectDB = require('../config/db');
const User = require('../models/user.model');
const Club = require('../models/club.model');
const Event = require('../models/event.model');
const bcrypt = require('bcryptjs');

connectDB();

async function seed() {
  await User.deleteMany({});
  await Club.deleteMany({});
  await Event.deleteMany({});

  const pw = await bcrypt.hash('password123', 10);
  const faculty = await User.create({ name:'Prof A', email:'prof@example.com', passwordHash:pw, role:'faculty' });
  const student = await User.create({ name:'Student X', email:'stud@example.com', passwordHash:pw, role:'student' });

  const club = await Club.create({ name:'Coding Club', shortCode:'CC', description:'Build & learn', facultyInCharge:faculty._id });
  await Event.create({ club:club._id, title:'Hackathon', description:'24h hack', startTime: new Date(Date.now()+86400000), endTime: new Date(Date.now()+2*86400000) });

  console.log('seeded');
  process.exit();
}

seed();
