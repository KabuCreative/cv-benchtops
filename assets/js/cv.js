$(document).ready(function() {
  $('.contact-form').isHappy({
      submitButton: '#submit',
      fields: {
        '#name': {
          required: true,
          message: 'Please provide your name'
        },
        '#email': {
          required: true,
          message: 'Please provide your email',
          test: happy.email
        }
      }
  });
});
