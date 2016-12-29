var React = require('react');
var PersonAPI = require('PersonAPI');

var PersonList = React.createClass({
  render: function(){
    PersonAPI.getPersons();

    return (
      <div>
        <h3>Person List</h3>
      </div>
    );
  }
});

module.exports = PersonList;
