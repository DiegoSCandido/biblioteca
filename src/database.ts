import mongoose from "mongoose";
import dotenv from "dotenv"; 

dotenv.config();

const mongoURI = process.env.MONGO_URI || "";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB:", error);
        process.exit(1);
    };
};