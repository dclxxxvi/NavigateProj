const {Video} = require('../models/models')
const ApiError = require('../error/ApiError');


class VideoController {
    async create(req, res) {
        let tags = req.body
        const video = await Video.create(tags)
        return res.json(video)
    }
    async getAll(req, res) {
        const videos = await Video.findAll()
        return res.json(videos)
    }
}   

module.exports = new VideoController()
