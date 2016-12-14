'use strict';

angular.module('trialFrontEndApp')
  .factory('getContacts', getContacts);

getContacts.$inject = ['$http'];

function getContacts($http) {
  return {
    getContactList: getContactList
  };

  function getContactList() {
        return $http.get('http://berickson-001-site1.ctempurl.com/api/contacts')
            .then(getContactComplete);

        function getContactComplete(response) {
            return response.data;
        }
    }
}