// scripts/seedUser.js
const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.connect('mongodb://localhost:27017/skillswap');

const user = new User({
  name: "Alice Johnson",
  email: "alice@example.com",
  password: "$2a$10$hashedpasswordhere",
  photo: "https://randomuser.me/api/portraits/women/44.jpg",
  location: "San Francisco",
  skillsOffered: ["React", "Node.js"],
  skillsWanted: ["UI Design"],
  feedback: [
    {
      from: "Bob Smith",
      rating: 5,
      comment: "Great collaborator!",
      date: "2025-07-10"
    }
  ]
});

user.save().then(() => {
  console.log("Sample user inserted!");
  mongoose.disconnect();
});
