import { Document, Schema, model } from "mongoose";

export interface IDogs extends Document{
  id?: number;
  name: string;
  age: number;
  breed: string;
  coat_color: string;
  picture_url?: string;
  owner_name: string;
}

const dogSchema = new Schema<IDogs>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: {
    type: String,
    enum: ["caniche", "pastor aleman", "perro de la calle", "boxer"],
    default: "boxer",
  },
  coat_color: {
    type: String,
    enum: ["negro", "blanco", "marron", "sin cabello", "marron con blanco"],
    default: "negro",
  },
  owner_name: { type: String },
  picture_url: { type: String },
});

export const Dog = model<IDogs>('Dog', dogSchema);