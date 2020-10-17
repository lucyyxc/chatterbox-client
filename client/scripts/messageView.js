var MessageView = {

  render: _.template(`
    <div class="chat">
      <div class="username"><%- username %></div>
      <div class="text"><%- text %></div>
      <div class="roomname"><%- roomname %></div>
    </div>
  `)
//https://underscorejs.org/#template
//MessageView.render(messgeObj)
// place object properties into html elements
// returns a string with updated html element
};