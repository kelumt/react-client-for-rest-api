var axios = require('axios');

const PERSON_API_URL = 'https://agile-scrubland-48539.herokuapp.com/people';

module.exports = {

  getPersons: function(){
    var requestUrl = `${PERSON_API_URL}`;

    return axios.get(requestUrl).then(function(res){
      return res;
      //console.log('Success', 'XXXXX');
      //alert(res);
    },function(res){
      throw new Error('Error While Fetching Person List');
      //alert(res);
      //console.log('Fail', 'YYYY');
    });
  }

};
