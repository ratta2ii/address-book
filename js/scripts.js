//Business Logic for AddressBook --------

function AddressBook(){
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact){
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id){
  for (var i=0; i< this.contacts.length; i++){
      if (this.contacts[i]){
        if (this.contacts[i].id == id){
          return this.contacts[i];
        }
      }
    };
  return false;
}

AddressBook.prototype.deleteContact = function(id){
  for (var i=0; i< this.contacts.length; i++){
    if(this.contacts[i]){
      if (this.contacts[i].id == id){
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}


// Business Logic for Contacts --------

function Contact(firstName, lastName, phoneNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}


// User Logic -------

var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay){
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact){
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " +
      contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

$(document).ready(function(){

  $("form#form1").submit(function(ready){
    event.preventDefault();

    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var phoneNumberInput = $("input#phoneNumber").val();

    var newContact = new Contact(firstNameInput, lastNameInput, phoneNumberInput);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);


  });

});

// var contact = new Contact("Ada", "Lovelace", "503-555-0100");
// var contact2 = new Contact("Grace", "Hopper", "503-555-0199");

// addressBook.addContact(contact);
// addressBook.addContact(contact2);
// console.log(firstNameInput,lastNameInput,phoneNumberInput);
