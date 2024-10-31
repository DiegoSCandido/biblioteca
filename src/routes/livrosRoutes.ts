import express from "express";
import { LivrosController } from "../controller/livrosController";

const router = express.Router();
const livrosController = new LivrosController();

router.get("/livros", (req, res) => livrosController.listarLivros(req, res));
router.get("/livros/:id", (req, res) => livrosController.obterLivro(req, res));
router.post("/livros", (req, res) => livrosController.criarLivro(req, res));
router.put("/livros/:id", (req, res) => livrosController.atualizarLivro(req, res));
router.delete("/livros/:id", (req, res) => livrosController.deletarLivro(req, res));

export default router; 