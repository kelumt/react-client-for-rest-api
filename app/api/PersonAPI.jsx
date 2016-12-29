var axios = require('axios');

const PERSON_API_URL = 'http://agile-scrubland-48539.herokuapp.com/people';

module.exports = {

  getPersons: function(){
    var requestUrl = `${PERSON_API_URL}`;

    axios.get(requestUrl).then(function(res){
      console.log('Success');
      //alert(res);
    },function(res){
      //throw new Error(res.data.message);
      //alert(res);
      console.log('Fail');
    });
  }

};
