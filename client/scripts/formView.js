var FormView = {

  $form: $('form'),
  $text: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');
    //use .val() on the id message
    var $texts = FormView.$text.val();
    //create message obj
    var message = {
      username: App.username,
      text: $texts,
      roomname: 'lobby'
    };
    var $texts = FormView.$text.val('');
    //create successCB
    var successCB = function() {
      console.log('chatterbox: Message submitted');
      App.fetch();
      MessagesView.$chats.html('');
      location.reload();
      //MessagesView.initialize();
    };
    //create errorCB
    var errorCB = function() {
      console.log('chatterbox: Failed to submit message', data);
    };
    //call Parse.create
    Parse.create(message, successCB, errorCB);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};