import Usuario from '../models/usuario.js';
import RepositoryBase from './base.js';

const usuarioRepository = new RepositoryBase(Usuario);

export default usuarioRepository;
