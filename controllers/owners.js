var express = require('express');
var models = require('../models');
var passport = require('../middlewares/authentication');
var Redirect = require('../middlewares/redirect');
var geocoder = require('../middlewares/geocoder');

module.exports = {
  registerRouter() {
    var router = express.Router();
    router.get('/', Redirect.ifNotLoggedIn('/login'), this.index);
    router.get('/listings', Redirect.ifNotLoggedIn('/login'), this.listings);
    router.post('/listings', Redirect.ifNotLoggedIn('/login'), this.create);

    router.get('/listings/new', Redirect.ifNotLoggedIn('/login'), this.new);
    router.get('/listings/:id', Redirect.ifNotLoggedIn('/login'), this.show);
    router.get('/:nameFirst', this.user);
    router.get('/listings/:id/edit', Redirect.ifNotLoggedIn('/login'), this.edit);
    router.put('/listings/:id', Redirect.ifNotLoggedIn('/login'), this.update);
    router.delete('/listings/:id', Redirect.ifNotLoggedIn('/login'), this.delete);

    return router;
  },
  index(req, res) {
    models.space.findAll({
      where: {
        userId: req.user.id
      },
    }).then((space) => {
        res.render('owners', {
          space,
        });
    }).catch(() => {
        res.render('owners');
    });
  },
  listings(req, res) {
      res.render('owners/listings', { error: req.flash('error') });
  },
  new(req,res) {
    res.render('owners/listings/new');
  },
  create(req, res) {
    geocoder.geocode(
      req.body.address1 + ' ' + req.body.city + ' ' + req.body.state + ' ' + req.body.zip
    ).then((point) => {
      models.space.create({
        userId: req.user.id,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        coordinates: {
          type: 'Point',
          coordinates: point,
        },
      }).then((space) => {
        res.redirect('/owners');
      }).catch(() => {
        res.render('owners/listings/new');
      });
    });
  },
  show(req, res) {
    models.space.findOne({
      where: {
        id: req.params.id,
      },
    }).then((space) => {
      models.user.findOne({
        where: {
          nameFirst: req.user.nameFirst,
          nameLast: req.user.nameLast,
        },
      }).then((user) => {
        res.render('owners/listings/single', {
          space,
          user,
        });
      });
    }).catch(() => {
        res.render('owners/listings/single');
    });
  },
  user(req, res){
     models.space.findAll().then((space) => {
       models.user.findOne({
         where: {
          nameFirst: req.user.nameFirst,
          nameLast: req.user.nameLast,
         },
      }).then((user) => {
        res.render('owners/single', {
          user,
          space,
        });
      });
    }).catch(() => {
      res.render('owners/single');
    });
  },
  edit(req,res) {
    models.space.findOne({
      where: {
        userId: req.user.id,
        id: req.params.id,
      },
    }).then((space) => {
      res.render('owners/listings/edit', { space });
    }).catch(() => {
      res.redirect('/owners');
    });
  },
  update(req, res) {
    geocoder.geocode(
      req.body.address1 + ' ' + req.body.city + ' ' + req.body.state + ' ' + req.body.zip
    ).then((point) => {
      models.space.update({
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        coordinates: {
          type: 'Point',
          coordinates: point,
        },
      }, {
        where: {
          id: req.params.id,
        },
      }).then((space) => {
        res.redirect('/owners');
      });
    });
  },
  delete(req, res) {
    models.space.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect('/owners');
    });
  },
};
