var React = require('react');
var PersonAPI = require('PersonAPI');

var PersonList = React.createClass({
  render: function(){

    PersonAPI.getPersons().then(function(personList){
      alert(personList);
    }, function(errorMessage){
      alert(errorMessage);
    });
    
    return (
      <div>
        <h3>Person List</h3>
      </div>
    );
  }
});

module.exports = PersonList;
