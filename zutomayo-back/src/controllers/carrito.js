import model from "../models/carrito.js";

import RepositoryBase from "../repository/base.js";

const repository = new RepositoryBase(model)

const findAll = async (req, res) => {
    const carritos = await repository.findAll();
    return res.status(200).json(carritos);
}

const addItem = async (req, res) => {
    const carrito = req.body;
    const carritoCreated = await repository.create(carrito);
    return res.status(201).json(carritoCreated);
}

const updateQuantity = async (req, res) => {
    const id = req.params.id;
    const { cantidad } = req.body;
    const result = await repository.updateQuantity(id, cantidad);
    return res.status(200).json(result);
}

const remove = async (req, res) => {
    const id = req.params.id;
    const result = await repository.remove(id);
    return res.status(200).json(result);
}

const removeAll = async (req, res) => {
    const result = await repository.removeAll();
    return res.status(200).json(result);
}

const controller = { findAll, addItem, updateQuantity, remove, removeAll };

export default controller;
