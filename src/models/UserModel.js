const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    phoneNumber: { type: String },
    address: { type: String },
    avatar: { type: String },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
    status: {
        type: Number,
        default: 1,
        enum: [0, 1],
    },
    userType: {
        type: Number,
        default: 3,
        enum: [1, 2, 3],
    },
}
, {timestamps: true});

userSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
  };

const User = mongoose.model("User", userSchema);
module.exports = User;