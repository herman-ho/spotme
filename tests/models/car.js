var chai = require('chai');
var expect = chai.expect;
const models = require('../../models');

describe('car model', function() {

  before(function(done) {
    models.user.sync({ force : true })
    .then(function(){
      models.car.sync({ force : true })
      .then(function(){
        done(null);
      })
      .catch(function(error) {
        done(error);
      });
    })
    .catch(function(error) {
      done(error);
    });
  });

  it('should contain a userId property', function(done) {
    var c1 = models.car.build();
    expect(c1).to.have.property('userId');
    done();
  });

  it('should contain a make property', function(done) {
    var c1 = models.car.build();
    expect(c1).to.have.property('make');
    done();
  });

  it('should contain a model property', function(done) {
    var c1 = models.car.build();
    expect(c1).to.have.property('model');
    done();
  });

  it('should contain a year property', function(done) {
    var c1 = models.car.build();
    expect(c1).to.have.property('year');
    done();
  });

  it('should contain a license property', function(done) {
    var c1 = models.car.build();
    expect(c1).to.have.property('license');
    done();
  });

  it('should contain a active property', function(done) {
    var c1 = models.car.build();
    expect(c1).to.have.property('active');
    done();
  });

  it('should NOT contain a foobar property', function(done) {
    var c1 = models.car.build();
    expect(c1).to.not.have.property('foobar');
    done();
  });

  describe('creating cars', function() {

    it('should NOT save when missing a userId', function(done) {
      models.car.create({
      })
      .then(function() {
        done('failed');
      })
      .catch(function(e) {
        done(); // pass
      });
    });

    it('should NOT save when userId NOT in user table', function(done) {
      models.car.create({
        userId: 1000
      })
      .then(function() {
        done('failed');
      })
      .catch(function(e) {
        done(); // pass
      });
    });

    it('should save when all properties are provided', function(done) {
      models.user.create({
        id: 1,
        nameFirst: 'fooFirstName',
        nameLast: 'barLastName',
        email: 'foobar@example.com',
        password: 'testpassword'
      })
      .then(function() {
        models.car.create({
          userId: 1,
          make: 'fooMake',
          model: 'barMake',
          year: '2017',
          license: 'batzLicense',
          active: true
        })
        .then(function() {
          done(); // pass
        })
        .catch(function(e) {
          done(e);
        });
      })
      .catch(function() {
        done(e);
      });
    });

  });

});
