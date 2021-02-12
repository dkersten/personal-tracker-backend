const mongoose = require('mongoose')
const { Schema } = mongoose

const activitySchema = new Schema(
    {
        activity1: {
            type: String,
            required: 'activity1 cannot be blank'
        },
        activity2: {
            type: String,
            required: 'activity2 cannot be blank'
        }
    },
    { collection: 'activity'}
)

module.exports = mongoose.model('activity', activitySchema)