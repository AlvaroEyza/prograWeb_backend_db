import model from "../models/music_movie.js";

import RepositoryBase from "../repository/base.js";

const repository = new RepositoryBase(model)

const findAll = async (req, res) => {
    const music_movie = await repository.findAll();

    return res.status(200).json(music_movie);
}

const create = async (req, res) => {
    const music_movie = req.body;
    const music_movieCreated = await repository.create(music_movie);
    return res.status(201).json(music_movieCreated)
}

const findOne = async (req,res) => {
    
    const id = req.params.id;

    const result = await repository.findOne(id);

    return res.status(200).json(result);
}

const update = async(req, res) => {
    const music_movie = req.body;
    const result = await repository.update(music_movie);

    return res.status(200).json(result)
}

const remove = async (req, res) => {
    const id = req.params.id;

    const result = await repository.remove(id);

    return res.status(200).json(result);
}

const updateStock = async (req, res) => { 
    const id = req.params.id; 
    const { cantidadComprada } = req.body; 
    const result = await repository.updateStock(id, cantidadComprada); 
    if (result) { 
        return res.status(200).json(result); 
    } else { 
        return res.status(404).json({ message: 'Music movie not found' });
    }
}

const controller = { findAll, create, findOne, update, remove, updateStock }

export default controller;
