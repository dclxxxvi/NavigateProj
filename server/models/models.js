const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Video = sequelize.define('video', {
    number: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    adding_date: {type: DataTypes.INTEGER},
    can_comment: {type: DataTypes.INTEGER},
    can_like: {type: DataTypes.INTEGER},
    can_repost: {type: DataTypes.INTEGER},
    can_subscribe: {type: DataTypes.INTEGER},
    can_add_to_faves: {type: DataTypes.INTEGER},
    can_add: {type: DataTypes.INTEGER},
    comments: {type: DataTypes.INTEGER},
    date: {type: DataTypes.INTEGER},
    description: {type: DataTypes.STRING(500)},
    duration: {type: DataTypes.INTEGER},
    photo_130: {type: DataTypes.STRING(1000)},
    photo_320: {type: DataTypes.STRING(1000)},
    photo_640: {type: DataTypes.STRING(1000)},
    photo_800: {type: DataTypes.STRING(1000)},
    photo_1280: {type: DataTypes.STRING(1000)},
    first_frame_130: {type: DataTypes.STRING(1000)},
    first_frame_160: {type: DataTypes.STRING(1000)},
    first_frame_320: {type: DataTypes.STRING(1000)},
    first_frame_800: {type: DataTypes.STRING(1000)},
    first_frame_1280: {type: DataTypes.STRING(1000)},
    width: {type: DataTypes.INTEGER},
    height: {type: DataTypes.INTEGER},
    id: {type: DataTypes.INTEGER, unique: true},
    owner_id: {type: DataTypes.INTEGER},
    user_id: {type: DataTypes.INTEGER},
    ov_id: {type: DataTypes.INTEGER},
    title: {type: DataTypes.STRING(500)},
    player: {type: DataTypes.STRING(500)},
    views: {type: DataTypes.INTEGER},
    is_mobile_live: {type: DataTypes.INTEGER},
    local_views: {type: DataTypes.INTEGER},
    platform: {type: DataTypes.STRING},
    live: {type: DataTypes.INTEGER},
    upcoming: {type: DataTypes.INTEGER},
    live_start_time: {type: DataTypes.INTEGER},
    live_notify: {type: DataTypes.INTEGER},
    createdAt: {type: DataTypes.STRING},
    updatedAt: {type: DataTypes.STRING}
})

module.exports = {
    Video
}
