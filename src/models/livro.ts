// src/models/livro.ts

import mongoose, { Document, Schema } from "mongoose";

export interface ILivro extends Document {
    title: string;
    author: string;
    synopsis: string;
    coverImage: string;
    category: string
}

const LivroSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    synopsis: { type: String, required: true },
    coverImage: { type: String, required: true },
    category: { type: String, enum: ['Agronomia', 'Gestão', 'Diversos', 'Infantil'], required: true}
});

export const Livro = mongoose.model<ILivro>("Livro", LivroSchema);
