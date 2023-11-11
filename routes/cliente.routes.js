import express from 'express'
import clienteController from '../controllers/cliente.controller.js'

const router = express.Router()


router.get('', clienteController.getTodosClientes)
router.get('/:cpf', clienteController.getUmCliente)
router.post('', clienteController.criarCliente)
router.delete('/:cpf', clienteController.excluirCliente)
router.put('/:cpf', clienteController.alterarCliente)

export default router;