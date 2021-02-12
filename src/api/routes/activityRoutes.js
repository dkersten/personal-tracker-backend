const activityBuilder = require('../controllers/activityController')

module.exports = app => {
    app
        .route('/activities')
        .get(activityBuilder.all_activities)
        .post(activityBuilder.create_an_activity)

    app
        .route('/activities/:activityId')
        .get(activityBuilder.read_activity)
        .patch(activityBuilder.update_an_activity)
        .delete(activityBuilder.delete_an_activity)
}