import mongoose from 'mongoose';
const attendanceSchema = new mongoose.Schema({
  employeeId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  workDate: { type: String, required: true },
  checkInAt: { type: Date },
  checkOutAt: { type: Date },
  status: { type: String, enum: ['present', 'late', 'half-day'], default: 'present' }
}, { timestamps: true });
attendanceSchema.index({ employeeId: 1, workDate: 1 }, { unique: true });
export default mongoose.model('Attendance', attendanceSchema);
