const Sequelize = require('sequelize')
const db = require('../db')

const Application = db.define('application', {
  applied: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  referral: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  interviewStage: {
    type: Sequelize.ENUM('No response', 'Informational phone interview', 'Technical phone interview', 'Behavioral onsite', 'Technical onsite', 'Take-home coding challenge', 'Offer')
  },
  rejected: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  }
})

module.exports = Application
