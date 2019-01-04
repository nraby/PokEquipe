const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    trainer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    first: { type: String, required: true },
    second: { type: String, required: false },
    third: { type: String, required: false },
    forth: { type: String, required: false },
    fifth: { type: String, required: false },
    sixth: { type: String, required: false }
});

module.exports = mongoose.model('Team', teamSchema);