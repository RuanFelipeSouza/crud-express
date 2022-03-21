const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema(
  {
    name: String,
    celphone: String,
  },
  {
    timestamps: true,
  },
);

export const clientModel = mongoose.model('client', clientSchema);
