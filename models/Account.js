module.exports = function(config, mongoose, nodemailer) {
  var crypto = require('crypto');

  var Status = new mongoose.Schema({
    name: {
      first:    {type: String},
      last:     {type: String}
    },
    status:     {type: String}
  });

  var AccountSchema = new mongoose.Schema({
    email:      {type: String, unique: true},
    password:   {type: String},
    name: {
      first:    {type: String},
      last:     {type: String}
    },
    birthday: {
      day:      {type: Number, min: 1, max: 31, required: false},
      month:    {type: Number, min: 1, max: 12, required: false},
      year:     {type: Number}
    },
    photoUrl:   {type: String},
    biography:  {type: String},
    status:     [Status], // my status updates only
    activity:   [Status]  // all status updates
  });

  var Account = mongoose.model('Account', AccountSchema);

  var registerCallback = function(err) {
    if(err) {
      return console.log(err);
    }
    return console.log('Account was created');
  }

  var changePassword = function(accountId, newpassword) {
    var shaSum = crypto.createHash('sha256');
    shaSum.update(newpassword);
    var hashedPassword = shaSum.digest('hex');
    Account.update(
      {_id: accountId},
      {$set: {password:hashedPassword}},
      {upsert: false},
      function changePasswordCallback(err) {
        colsole.log('Change password done for account ' + accountId);
      }
    );
  }

  var forgotPassword = function(email, resetPasswordUrl, callback) {
    var user = Account.findOne(
      {email: email},
      function findAccount(err, doc) {
        if(err) {
          // Email address is not a valid user
          callback(false);
        } else {
          var smtpTransport = nodemailer.createTransport(config.mail);
          resetPasswordUrl += '?account=' + doc._id;
          smtpTransport.sendMail({
            from: 'noreply@icekernel.com',
            to: doc.email,
            subject: 'SocialNet Password Request',
            text: 'Click here to reset your password: ' + resetPasswordUrl
          }, function forgotPasswordResult(err, message) {
            if(err) {
              callback(false);
            } else {
              console.log(message);
              callback(true);
            }
          });
        }
      }
    );
  }

  var login = function(email, password, callback) {
    var shaSum = crypto.createHash('sha256');
    shaSum.update(password);
    Account.findOne(
      { email:email, password:shaSum.digest('hex') },
      function(err, doc) {
        callback(doc);
      }
    );
  };

  var findById = function(accountId, callback) {
    Account.findOne({_id:accountId}, function(err, doc) {
      callback(doc);
    });
  }

  var register = function(email, password, firstName, lastName) {
    var shaSum = crypto.createHash('sha256');
    shaSum.update(password);

    var user = new Account( {
      email: email,
      name: {
        first: firstName,
        last: lastName
      },
      password: shaSum.digest('hex')
    });
    user.save(registerCallback);
  }

  return {
    findById: findById,
    register: register,
    forgotPassword: forgotPassword,
    changePassword: changePassword,
    login: login,
    Account: Account
  }
}
