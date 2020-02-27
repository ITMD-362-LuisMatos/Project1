function onSubmit() {

  let collectionfOfInputs =  document.getElementsByClassName("semantic-inputs");

  let phoneInputItem = collectionfOfInputs.namedItem("phone_field");
  let emailInputItem = collectionfOfInputs.namedItem("email_field");


  let myPhoneRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  let myEmailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/


  if(myPhoneRegex.test(phoneInputItem.value.toString()) && myEmailRegex.test(emailInputItem.value.toString())){
    alert("Your form was submitted successfully!")
  }else{
    alert("Please verify the content of your form. Some information may be missing, incomplete, or not properly formatted")
  }

}