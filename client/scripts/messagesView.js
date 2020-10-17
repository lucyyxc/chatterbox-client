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
  // need to check if message.text contains html elements
  // https://stackoverflow.com/questions/17289689/jquery-check-if-string-is-html-tag
  // message text = $('body').appened(<div> dsjfdsj</div>)
    if (message.username === undefined) {
      return;
    }
    var $compiled = MessageView.render(message);
    MessagesView.$chats.append($compiled);
  }
  //add as friend
};