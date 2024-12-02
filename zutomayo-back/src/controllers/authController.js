import repository from '../repository/usuarioRepository.js';

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await repository.findByEmailAndPassword(email, password);

    if (user) {
        res.json({ message: 'Login successful', role: user.role });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

const authController = { login };

export default authController;