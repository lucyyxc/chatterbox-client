var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    console.log('hi');
    var successCB = function(data) {
      for (var i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname === undefined) {
          continue;
        }
        RoomsView.renderRoom(data.results[i].roomname);
      }
    };
    var errorCB = function(data) {
      console.error('chatterbox: Failed to retrieve room name', data);
    };
    Parse.readAll(successCB, errorCB);
  },

  renderRoom: function(roomname) {
    //use underscore template on each room property
    //create conditional to assess if roomname already exists in drop down list
    var compile = _.template(`
      <option value="<%- roomname %>"><%- roomname %></option>
    `);
    var $roomname = $(`<option value="${roomname}">${roomname}</option>`);
    RoomsView.$select.append($roomname);

  }

};
