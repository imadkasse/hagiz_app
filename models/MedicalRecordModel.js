const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  diagnosis: { type: String, required: true }, // التشخيص
  treatment: { type: String }, // العلاج
  attachments: [{ type: String }], // روابط الملفات المرفوعة
  createdAt: { type: Date, default: Date.now },
});

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

module.exports = MedicalRecord;
