var chai = require('chai');
var expect = chai.expect;
const models = require('../../models');

describe('user model', function() {

  before(function(done) {
    models.user.sync({ force: true })
    .then(function() {
      done(null);
    })
    .catch(function(error) {
      done(error);
    });
  });

  it('should contain a firstName property', function(done) {
    var u1 = models.user.build();
    expect(u1).to.have.property('nameFirst');
    done();
  });

  it('should contain a lastName property', function(done) {
    var u1 = models.user.build();
    expect(u1).to.have.property('nameLast');
    done();
  });

  it('should contain a email property', function(done) {
    var u1 = models.user.build();
    expect(u1).to.have.property('email');
    done();
  });

  it('should contain a password property', function(done) {
    var u1 = models.user.build();
    expect(u1).to.have.property('password');
    done();
  });

  it('should NOT contain a foobar property', function(done) {
    var u1 = models.user.build();
    expect(u1).to.not.have.property('foobar');
    done();
  });

  describe('creating users', function() {

    it('should NOT save when missing a nameFirst', function(done) {
      models.user.create({
      })
      .then(function() {
        done('failed');
      })
      .catch(function(e) {
        done(); // pass
      });
    });

    it('should NOT save when missing a nameLast', function(done) {
      models.user.create({
      })
      .then(function() {
        done('failed');
      })
      .catch(function(e) {
        done(); // pass
      });
    });

    it('should NOT save when missing a email', function(done) {
      models.user.create({
      })
      .then(function() {
        done('failed');
      })
      .catch(function(e) {
        done(); // pass
      });
    });

    it('should NOT save when missing a password', function(done) {
      models.user.create({
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
        nameFirst: 'foo',
        nameLast: 'bar',
        email: 'batz@example.com',
        password: 'foobarpassword'
      })
      .then(function() {
        done(); // pass
      })
      .catch(function(e) {
        done(e);
      });
    });

  });

});
