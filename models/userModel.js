const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "doctor", "patient"], required: true }, // دور المستخدم
  phone: { type: String },
  profilePicture: { type: String },
  specialization: { type: String }, // خاص بالأطباء فقط
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
