var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var successCB = function(data) {
      for (var i = 0; i < data.length; i++) {
        MessagesView.renderMessage(data[i]);
      }
    };
    var errorCB = function(data) {
      console.error('chatterbox: Failed to send message', data);
    };
    Parse.readAll(successCB, errorCB);
  },

  renderMessage: function (message) {
    var compiled = MessageView.render(message);
    MessagesView.$chats.append(compiled);
  }

};