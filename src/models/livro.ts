// src/models/livro.ts

import mongoose, { Document, Schema } from "mongoose";

export interface ILivro extends Document {
    titulo: string;
    autor: string;
    sinopse: string;
}

const LivroSchema: Schema = new Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    sinopse: { type: String, required: true },
});

export const Livro = mongoose.model<ILivro>("Livro", LivroSchema);
