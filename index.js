"Use strict";

// Create a contact list where every contact must have a name and email, and can (i.e. might not have) have phone number and company.

let myContacts = [
	{
		name: "Dietrich Jelliman",
		email: "djelliman0@mozilla.org",
		company: "Feedfish"
	},
	{
		name: "Meriel Gerge",
    email: "mgerge1@taobao.com"
	},
	{
		name: "Patricio Pote",
		email: "ppote2@wix.com",
		phone: "9025673",
		company: "Browsetype"
	},
	{
		name: "Willyt MacGiany",
		email: "wmacgiany3@webs.com",
		phone: "8269015"
	},
	{
		name: "Vale Bloomer",
		email: "vbloomer4@merriam-webster.com",
		phone: "9251300",
		company: "Feedmix"
	},
	{
		name: "Constantine Oliveto",
		email: "coliveto5@usda.gov",
		phone: "6792237",
		company: "Youspan"
	},
	{
		name: "Corty Bracken",
		email: "cbracken6@theatlantic.com",
		phone: "8585631"
	},
	{
		name: "Isacco Cureton",
		email: "icureton7@youtube.com",
		phone: "3366450",
		company: "Fanoodle"
	},
	{
		name: "Fitzgerald Mulryan",
		email: "fmulryan8@1688.com",
		phone: "4868192"
	}
]


/* ADD NEW CONTACT FUNCTION */
console.log(`---- ADD NEW CONTACT----`);

// Create a function that adds new contact and check for errors, 
// if no errors then output the new contact.
const addContact = (newContact) => {
  // Function to compare newContact email and existing contacts emails
  const isEmailSame = (existingContacts) => {
    return existingContacts.email === newContact.email;
  }
  // Checks if at least one contacts email in the array is the same 
  // as the email of the new contact
  const isEmailTaken = myContacts.some(isEmailSame);

  // if/else statements to check for errors before adding new contact
  if (newContact.name === undefined || newContact.email === undefined) { // check if name and/or email is missinig
    console.log(`Error: Missing fields`);
  } else if (isEmailTaken) { // check if email is duplicated
    console.log(`Error: Duplicate was found`);
  } else { // Add new contact to array
    myContacts.push(newContact);
    console.log(`Success: ${newContact.name} was added: `);
    console.log(newContact);
  }
}

// The new contact function called with the new contact as parameter
addContact({
  name: "Dalli Axston",
  email: "dalli@merriam.com",
  phone: "9403770",
  company: "Oodoo"
});




/* REMOVE CONTACT BY EMAIL FUNCTION */
console.log(` `);
console.log(`---- REMOVE CONTACT----`);

// Create a function that removes contact by identifying email
const removeContact = (index, email) => {
  console.log(`Email of contact to be removed: ${email}`);
  console.log(`Index of contact to be removed: ${index}`);
  
  // Function to compare newContact email and existing contacts emails
  const isEmailSame = (existingContacts) => {
    return existingContacts.email === email;
  }
  // Checks if the email exists among contacts
  const emailExists = myContacts.some(isEmailSame);

  if (!emailExists) { // Checks if email does not exist and console log error if true
    console.log(`Error: Contact not found`);
  } else { // If email does exist, remove corresponding contact
    console.log(`Success: ${myContacts[index].name} was removed`);
    myContacts.splice(index, 1);
  }
}

// Email of contact to be removed
const emailofContactToBeRemoved = myContacts[4].email;
// To get error code you can comment the above variable and uncomment the one here below:
// const emailofContactToBeRemoved = "bloomer@webster.com";

// Index of contact to be removed
const indexOfContactToBeRemoved = myContacts.map(function(e) {return e.email;}).indexOf(emailofContactToBeRemoved);

// The remove contact function called with index and email as parameters
removeContact(indexOfContactToBeRemoved, emailofContactToBeRemoved);




/* EDIT CONTACT BY EMAIL FUNCTION */
console.log(` `);
console.log(`---- EDIT CONTACT ----`);

// Create a function that removes contact by identifying email
const editContact = (email, newData) => {
  // Gets array index of contact with applied unique email
  const index = myContacts.map(function(e) {return e.email;}).indexOf(email);
  const indexobject = myContacts[index];

  console.log(`Email of contact to be edited:`, email);
  console.log(`Data to be added to contact:`, newData);
  // Shows contact info before edit
  console.log(`Contact info before update:`, indexobject);

  // Function to compare newContact email and existing contacts emails
  const isEmailSame = (existingContacts) => {
    return existingContacts.email === email;
  }
  // Checks if the email exists among contacts
  const emailExists = myContacts.some(isEmailSame);

  if (!emailExists) { // Checks if email does not exist and console log error if true
    console.log(`Error: Contact not found`);
  } else { // If email does exist, edit corresponding contact
    // Success message
    console.log(`Success: ${indexobject.name} was updated`);
    // Change name of contact
    indexobject.name = "Meriel Gerge Tarabanana";
    // Add data to contact
    Object.assign(indexobject, newData);
    // Shows contact after edit
    console.log(indexobject);
  }
}
// Email of contact to be edited
const emailOfContactToBeEdited = myContacts[1].email;
// To get error code you can comment the above variable and uncomment the one here below:
// const emailofContactToBeRemoved = "moogey@boogey.com";

// New data to be added to contact
const newDataToBeAdded = {
  phone: "9693040", 
  company: "Fogworths"
};

// The edit contact function called with email and new data as parameters
editContact(emailOfContactToBeEdited, newDataToBeAdded);




/* GET CONTACT INFO BY EMAIL FUNCTION */
console.log(` `);
console.log(`---- GET CONTACT INFO ----`);

const getContact = (email) => {
  // Gets array index of contact with applied unique email
  const index = myContacts.map(function(e) {return e.email;}).indexOf(email);
  // Gets object of index
  const indexObject = myContacts[index];

  console.log(`Email of contact:`, email);

  // Function to compare newContact email and existing contacts emails
  const isEmailSame = (existingContacts) => {
    return existingContacts.email === email;
  }
  // Checks if the email exists among contacts
  const emailExists = myContacts.some(isEmailSame);

  if (!emailExists) { // Checks if email does not exist and console log error if true
    console.log(`Error: Contact not found`);
  } else { // If email does exist, get contact info
    console.log(`Success:`, indexObject);
  }
}
// The get contact function called with email as parameter
getContact(myContacts[8].email);




/* LIST ALL CONTACTS FUNCTION */
console.log(` `);
console.log(`---- LIST ALL CONTACTS AVAILABLE ----`);

const listAllContacts = () => {

  // Go through array with for-in loop and get value of each
  for (let contact in myContacts) {
    var value = myContacts[contact];
    // Log name and email of each contact
    console.log(value.name + ":", value.email)
  }
  
}
// The list all contacts function called
listAllContacts();




/* CLEAR ALL CONTACTS FROM ARRAY FUNCTION */
console.log(` `);
console.log(`---- CLEAR ALL CONTACTS ----`);

const clearAllContacts = () => {

  // Remove contacts from array with splice(9) method,
  // removes all objects from 0 index to the last index
  myContacts.splice(0, myContacts.length);
  console.log('The contact list was cleared: ')
  console.log(myContacts, `- Array is empty`);
}
// The clear all contacts function called
clearAllContacts();
