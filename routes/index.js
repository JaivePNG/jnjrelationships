var express = require('express')
var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  getHome: getHome,
  getProfile: getProfile,
  newUser: newUser,
  newForm: newForm
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
  knex('profiles')
    .select()
    .then(function (profiles) {
      res.render('profile', {
        profiles: profiles
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function newForm(req, res) {
  res.render('submit')
}

function newUser(req, res) {
  knex('users').insert({
      name: req.body.name,
      email: req.body.email
    })
    .then(function (ids) {
      return knex('profiles')
        .insert({
          user_id: ids[0],
          url: req.body.url
        })
    })
    .then(function () {
      res.redirect('/')
    })
    .catch(function (err) {
      res.status(500).send(err.message)
    })
}

// ----------------------------------





// function oneProfile(req, res) {
//   knex('profiles')
//   var id = req.params.id
//     .select(id)
//     .then(function (user) {
//       res.render('profiles', {
//         profiles: id
//       })
//     })
//     .catch(function (err) {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// }


//specific id
