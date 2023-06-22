const database = require('../models')

class Users_animesController {
    static async catchUsers_animes(req, res){
        try{
            const allUsers_animes = await database.Users_animes.findAll() 
            return res.status(200).json(allUsers_animes)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async catchOneUsers_animes(req, res) {
        const { id } =  req.params
        try {
            const oneUsers_animes = await database.Users_animes.findOne( { where: {id: Number(id)}} ) 
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createUsers_animes(req, res) {
        const newUsers_animes = req.body
        try {
            const newUsers_animesCreated = await database.Users_animes.create(newUsers_animes)
            return res.status(200).json(newUsers_animesCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async uptadeUsers_animes(req, res){
        const { id } =  req.params
        const newInfos = req.body
        try {
            await database.Users_animes.update(newInfos, { where: {id: Number(id)}})
            const user_animesUpdated = await database.Users_animes.findOne( { where: {id: Number(id)}})
            return res.status(200).json(user_animesUpdated) 
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async deleteUsers_animes(req, res){
        const { id } =  req.params
        try {
            await database.Users_animes.destroy({ where: {id: Number(id)}})
        return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = Users_animesController