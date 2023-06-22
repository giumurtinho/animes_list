const database = require('../models')

class UsersController {
    static async catchUsers(req, res){
        try{
            const allUsers = await database.Users.findAll() 
            return res.status(200).json(allUsers)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async catchOneUser(req, res) {
        const { id } =  req.params
        try {
            const oneUser = await database.Users.findOne( { where: {id: Number(id)}} ) 
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createUser(req, res) {
        const newUser = req.body
        try {
            const newUserCreated = await database.Users.create(newUser)
            return res.status(200).json(newUserCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async uptadeUser(req, res){
        const { id } =  req.params
        const newInfos = req.body
        try {
            await database.Users.update(newInfos, { where: {id: Number(id)}})
            const userUpdated = await database.Users.findOne( { where: {id: Number(id)}})
            return res.status(200).json(userUpdated) 
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async deleteUser(req, res){
        const { id } =  req.params
        try {
            await database.Users.destroy({ where: {id: Number(id)}})
        return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = UsersController