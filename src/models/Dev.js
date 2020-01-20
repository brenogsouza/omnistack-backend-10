const mongoose = require('mongoose')
const PointSchema = require('./util/PointSchema')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar: String,
    techs: [String],
    location: {
        type: PointSchema,
        indexes: '2dsphere'
    }
})

module.exports = mongoose.model('Dev', DevSchema);