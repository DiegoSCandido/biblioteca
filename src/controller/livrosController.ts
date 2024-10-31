import { Request, Response } from "express";
import { LivrosService } from "../services/livrosServices";

const livrosService = new LivrosService();

export class LivrosController {
    async listarLivros(req: Request, res: Response): Promise<void> {
        const livros = await livrosService.obterLivros();
        res.json(livros);
    };

    async obterLivro(req: Request, res: Response): Promise<void> {
        const livro = await livrosService.obterLivroPorId(req.params.id);
        if (livro) {
            res.json(livro);
        } else {
            res.status(404).send("Livro não encontrado");
        }
    };

    async criarLivro(req: Request, res: Response): Promise<void> {
        const novoLivro = await livrosService.adicionarLivro(req.body);
        res.status(201).json(novoLivro);
    };

    async atualizarLivro(req: Request, res: Response): Promise<void> {
        const livroAtualizado = await livrosService.atualizarLivro(req.params.id, req.body);
        if (livroAtualizado) {
            res.json(livroAtualizado);
        } else {
            res.status(404).send("Livro não encontrado");
        };
    };

    async deletarLivro(req: Request, res: Response): Promise<void> {
        const sucesso = await livrosService.deletarLivro(req.params.id);
        if (sucesso) {
            res.status(204).send("Livro deletado");
        } else {
            res.status(404).send("Livro não encontrado");
        };
    };
};












