const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ['referral', 'deposit'], required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transaction', transactionSchema);