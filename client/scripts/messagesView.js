var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    var successCB = function(data) {
      for (var i = 0; i < data.results.length; i++) {
        MessagesView.renderMessage(data.results[i]);
      }
    };
    var errorCB = function(data) {
      console.error('chatterbox: Failed to retrieve message', data);
    };
    Parse.readAll(successCB, errorCB);
  },

  renderMessage: function (message) {
    var $compiled = MessageView.render(message);
    MessagesView.$chats.append($compiled);
    // $body.append($compiled);
  }
};