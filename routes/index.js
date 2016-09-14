var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  getHome: getHome,
  getProfile: getProfile
}

function getHome(req, res) {
  knex('users')
    .select()
    .then(function (users) {
      res.render('index', {
        users: users
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getProfile(req, res) {
  var id = req.params.id
  return knex('users').select('users.name')
    .createTable('users', function (table) {
      table.string('users.name')
      table.string('email')
        //creates a profile table that list username + url + profile picture
      res.render('index', {
        users: users
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
