const database = require('../models')

class AnimesController {
    static async catchAnimes(req, res){
        try{
            const allAnimes = await database.Animes.findAll() 
            return res.status(200).json(allAnimes)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async catchOneAnimes(req, res) {
        const { id } =  req.params
        try {
            const oneUser = await database.Animes.findOne( { where: {id: Number(id)}} ) 
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async createAnimes(req, res) {
        const newAnimes = req.body
        try {
            const newAnimesCreated = await database.Animes.create(newAnimes)
            return res.status(200).json(newAnimesCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async uptadeAnimes(req, res){
        const { id } =  req.params
        const newInfos = req.body
        try {
            await database.Animes.update(newInfos, { where: {id: Number(id)}})
            const AnimesUpdated = await database.Animes.findOne( { where: {id: Number(id)}})
            return res.status(200).json(AnimesUpdated) 
        } catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async deleteAnimes(req, res){
        const { id } =  req.params
        try {
            await database.Animes.destroy({ where: {id: Number(id)}})
        return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

}

module.exports = AnimesController