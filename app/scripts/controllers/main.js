'use strict';

angular.module('trialFrontEndApp')
  .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['getContacts', '$http'];

   function MainCtrl(getContacts, $http) {
    var vm = this;

    vm.contacts = [];
    vm.addNewContact = addNewContact;
    vm.successAddContact = false;
    vm.deleteContact = deleteContact;
    vm.newContact = {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      homeAddress: {
        home: '',
        city: '',
        state: '',
        zipCode: '',
      }
    };

    activate(); 

    function activate() {
      return getContact().then(function(){
        console.log('done');
      });
    }

    function getContact() {
      return getContacts.getContactList()
      .then(function(data) {
        vm.contacts = data;
        return vm.contacts
      })
    }

function addNewContact(contact) {
    $http({
        url: 'http://berickson-001-site1.ctempurl.com/api/contacts',
        method: "POST",
        data: contact
    })
    .then(function(response) {
      vm.contacts.push(response.data);
        vm.newContact = {};
        vm.successAddContact = true;
    }, 
    function(response) { 
        console.log("failed");
    });
}

function deleteContact(contact) {
$http({
    method: 'DELETE',
    url: 'http://berickson-001-site1.ctempurl.com/api/contacts/' + contact.contactId
})
.then(function(response) {
    vm.contacts = getContact();
}, function(rejection) {
    console.log(rejection.data);
});

}


  };
