const mongoose = require('mongoose');
const activity = mongoose.model('activity');

exports.all_activities = (req, res) => {
    activity.find({}, (err, activities) => {
      if (err) res.send(err);
      res.json(activities);
    });
};

exports.activity = (req, res) => {
    activity.findById(req.params.activityId, (err, activity) => {
        if (err) res.send(err);
        res.json(activity)
    })
}