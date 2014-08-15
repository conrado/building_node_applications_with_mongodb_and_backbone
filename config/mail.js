var mail = {
  name: 'console',
  version: '0.0.1',
  send: function(mail, callback) {
    var input = mail.message.createReadStream();
    input.pipe(process.stdout);
    input.on('end', function() {
      callback(null, true);
    });
  }
};
