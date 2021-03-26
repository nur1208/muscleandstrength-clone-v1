import mongoose from "mongoose";

const reportModalSchema = new mongoose.Schema({
  reviewId: { type: mongoose.Types.ObjectId, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true },
  productId: { type: mongoose.Types.ObjectId, required: true },
  userName: { type: String },
  content: { type: String, required: true },
});

const ReportModal = mongoose.model("report", reportModalSchema);
export default ReportModal;
