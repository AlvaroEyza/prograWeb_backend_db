import model from "../models/usuario.js";

import RepositoryBase from "../repository/base.js";

const repository = new RepositoryBase(model)

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await repository.findByEmailAndPassword(email, password);

    if (user) {
        res.json({ message: 'Login successful', role: user.role });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}

const findAll = async (req, res) => {
    const usuarios = await repository.findAll();
    return res.status(200).json(usuarios);
}

const create = async (req, res) => {
    const usuario = req.body;
    const usuarioCreated = await repository.create(usuario);
    return res.status(201).json(usuarioCreated);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await repository.findOne(id);
    return res.status(200).json(result);
}

const update = async (req, res) => {
    const usuario = req.body;
    const result = await repository.update(usuario);
    return res.status(200).json(result);
}

const remove = async (req, res) => {
    const id = req.params.id;
    const result = await repository.remove(id);
    return res.status(200).json(result);
}

const controller = { login, findAll, findOne, create, update, remove };

export default controller;
