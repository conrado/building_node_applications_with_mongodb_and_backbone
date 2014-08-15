define(['text!templates/forgotpassword.html'], function(forgotPasswordTemplate) {
  var forgotPasswordView = Backbone.View.extend({
    el: $('#content'),

    events: {
      'submit form': 'password'
    },

    password: function() {
      $.post('/forgotpassword', {
        email: $('input[name=email]').val()
      }, function(data) {
        console.log(data);
      });
      return false;
    },

    render: function() {
      this.$el.html(forgotPasswordTemplate);
    }
  });

  return forgotPasswordView;
})
