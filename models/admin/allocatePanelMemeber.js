const mongoose = require("mongoose");

const AllocatePanelMemeberSchema = mongoose.Schema({
  groupName: {
    type: String,
    required: true,
  },
  panelMemberName: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
});

const APMembers = mongoose.model("APMember", AllocatePanelMemeberSchema);

module.exports = APMembers;
