class RepositoryBase {
    constructor(model) {
        this.model = model;
    }

    async findAll() {
        try {
            return await this.model.findAll();
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async create(entity) {
        try {
            return await this.model.create(entity);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findOne(id) {
        try {
            return await this.model.findOne({ where: { id: id} });
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async update(entity) {
        try {
            const { id } = entity;
            await this.model.update(entity, { where: { id } });
            return entity;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async remove(id) {
        try {
            return await this.model.destroy({ where: { id: id} });
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async findByEmailAndPassword(email, password) { 
        try { 
            return await this.model.findOne({ where: { email, password } }); 
        } catch (error) { 
            console.log(error); 
            return null; 
        } 
    }

    async updateStock(id, cantidadComprada) { 
        try { 
            const musicMovie = await this.model.findByPk(id); 
            if (musicMovie) { 
                const stockActual = parseInt(musicMovie.stock, 10); 
                const cantidadCompradaNum = parseInt(cantidadComprada, 10); 
                musicMovie.stock = (stockActual - cantidadCompradaNum).toString(); 
                await musicMovie.save(); return musicMovie; 
            } else { 
                return null; 
            } 
        } catch (error) { 
            console.log(error); 
            return null; 
        } 
    }

    async updateQuantity(id, cantidad) { 
        try { 
            const carrito = await this.model.findByPk(id); 
            if (carrito) { 
                carrito.quantity = cantidad; 
                await carrito.save(); 
                return carrito; 
            } else { 
                return null; 
            } 
        } catch (error) { 
            console.log(error); 
            return null; 
        } 
    }

    async removeAll() { 
        try { 
            await this.model.destroy({ where: {}, truncate: true }); 
            return true; 
        } catch (error) { 
            console.log(error);
            return false; 
        } 
    }
}

export default RepositoryBase;