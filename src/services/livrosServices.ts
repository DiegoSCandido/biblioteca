
import { ILivro, Livro } from "../models/livro"; 

export class LivrosService {
    async adicionarLivro(livroData: ILivro): Promise<ILivro> {
        const livro = new Livro(livroData);
        return await livro.save();
    };

    async obterLivros(): Promise<ILivro[]> {
        return await Livro.find();
    };

    async obterLivroPorId(id: string): Promise<ILivro | null> {
        return await Livro.findById(id);
    };

    async atualizarLivro(id: string, livroAtualizado: Partial<ILivro>): Promise<ILivro | null> {
        return await Livro.findByIdAndUpdate(id, livroAtualizado, { new: true });
    }

    async deletarLivro(id: string): Promise<boolean> {
        const result = await Livro.findByIdAndDelete(id);
        return result !== null;
    }
};