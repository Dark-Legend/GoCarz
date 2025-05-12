import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  firstName: String,
  lastName: String,
  imageUrl: String,
  role: { type: String, default: "user" },
  createdAt: { type: Date, default: Date.now },
  savedCars: [
    {
      type: Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
});

const User = models.User || model("User", UserSchema);

export default User;
