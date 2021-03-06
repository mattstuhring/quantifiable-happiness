const knex = require('../../knex/knex.js');

// @desc    Get current user snapshots
// @route   GET /api/v1/snapshots/mysnapshots
// @access  Private
const getUserSnapshots = async (req, res, next) => {
  try {
    const { userId } = req;

    const snapshots = await knex('mood_snapshots').where({ user_id: userId });

    res.status(200).json(snapshots);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// @desc    Create new user snapshot
// @route   POST /api/v1/snapshots
// @access  Private
const createUserSnapshot = async (req, res, next) => {
  try {
    res.status(200).json('Create snapshot');
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getUserSnapshots, createUserSnapshot };
