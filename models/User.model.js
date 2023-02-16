const { Schema, model } = require("mongoose")

const locationSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['coffee shop', 'bookstore'],
      required: true
    },
    location: {
      type: {
        type: String
      },
      coordinates: [Number]
    },
  },
  {
    timestamps: true
  }
);

locationSchema.index({ location: '2dsphere' })

const Location = model("Location", locationSchema)

module.exports = Location
