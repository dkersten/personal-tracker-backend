const mongoose = require('mongoose');
const activity = mongoose.model('activity');

exports.all_activities = (req, res) => {
    activity.find({}, (err, activities) => {
      if (err) res.send(err);
      res.json(activities);
    });
};

exports.create_an_activity = (req, res) => {
    const newActivity = new activity(req.body);
    newActivity.save((err, activity) => {
      if (err) res.send(err);
      res.json(activity);
    });
  };

exports.read_activity = (req, res) => {
    activity.findById(req.params.activityId, (err, activity) => {
        if (err) res.send(err);
        res.json(activity)
    })
}

exports.update_an_activity = (req, res) => {
    activity.findOneAndUpdate(
      { _id: req.params.activityId },
      req.body,
      { new: true },
      (err, activity) => {
        if (err) res.send(err);
        res.json(activity);
      }
    );
  };

  exports.delete_an_activity = (req, res) => {
    activity.deleteOne({ _id: req.params.activityId }, err => {
      if (err) res.send(err);
      res.json({
        message: 'activity successfully deleted',
       _id: req.params.activityId
      });
    });
  };