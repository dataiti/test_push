const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    workLocation: {
      type: String,
      required: true,
    },
    companyLogo: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
    },
    companyName: {
      type: String,
      required: true,
    },
    companyEmail: {
      type: String,
      required: true,
    },
    companyPhoneNumber: {
      type: String,
      required: true,
    },
    websiteUrl: {
      type: String,
      required: true,
    },
    companyIndustry: {
      type: String,
      required: true,
    },
    companySize: {
      type: String,
      required: true,
    },
    companyLocation: {
      type: String,
      required: true,
    },
    companyDescription: {
      type: String,
      required: true,
    },
    followerIds: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    status: {
      type: String,
      default: "Active",
      enum: ["Active", "Locked"],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

const employer = mongoose.model("Employer", employerSchema);

module.exports = employer;