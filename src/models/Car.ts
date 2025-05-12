import { model, models, Schema } from "mongoose";

const CarSchema = new Schema({
  title: String,
  make: String,
  model: String,
  year: Number,
  kilomeretesDrive: Number,
  fuelType: String,
  transmission: String,
  owner: Number, // 1st 2nd owner
  location: String,
  color: String,
  imageUrls: [String],
  description: String,
  features: [String],
  contactNumber: String,
  isFeatured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

const Car = models.Car || model("Car", CarSchema);

export default Car;
