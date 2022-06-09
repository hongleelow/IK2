function validate() {

  /* Section to validate email*/
      
  if( document.myForm.email.value == "" ) {
     alert( "Please enter your email address" );
     return false;
  }

  var emailID = document.myForm.email.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");
  
  if (atpos < 1 || ( dotpos - atpos < 2 )) {
    alert("Please enter a valid email")
    document.myForm.EMail.focus() ;
    return false;
  }

  /* Section to validate name*/

  if( document.myForm.name.value == "" ) {
    alert( "Please enter your name" );
    return false;
  }

  /* Section to validate contact number*/

  if( document.myForm.phoneno.value == "" ) {
    alert( "Please enter your phone number" );
    return false;
  }

  var b = document.myForm.phoneno.value;
  var brange=/^[0-9]+$/;
  if (!b.match(brange)) {
      alert("Please enter a valid phone number");
      return false;
  }

  /* Section to validate Street*/

  if( document.myForm.adr.value == "" ) {
    alert( "Please enter a street name" );
    return false;
  }

  

  /* Section to validate Suburb*/

  if( document.myForm.suburb.value == "" ) {
    alert( "Please enter a suburb" );
    return false;
  }

  var suburbck = document.myForm.suburb.value;
  var suburbckrange=/^[a-zA-Z]+$/;
  if (!suburbck.match(suburbckrange)) {
      alert("Please enter a valid suburb");
      return false;
  }

  /* Section to validate Postcode*/

  if( document.myForm.postcode.value == "" ) {
    alert( "Please enter a postcode" );
    return false;
  }

  var lengthpc = document.getElementById('postcode').value;
  if (lengthpc.length !=4) {
    alert("Please enter a valid Postcode");
    return false; 
  }

  var pcck = document.myForm.postcode.value;
  var pcckrange=/^[0-9]+$/;
  if (!pcck.match(pcckrange)) {
      alert("Please enter a valid postcode");
      return false;
  }


  /* Section to validate Cardholder name*/

  if( document.myForm.cname.value == "" ) {
    alert( "Please enter your card number" );
    return false;
  }

  /* Section to validate Card number*/

  if( document.myForm.cnum.value == "" ) {
    alert( "Please enter your card number" );
    return false;
  }

  var cnumck = document.myForm.cnum.value;
  var cnumckrange=/^[0-9]+$/;
  if (!cnumck.match(cnumckrange)) {
      alert("Please enter a valid postcode");
      return false;
  }

  /* Section to validate Card expiry*/

  if( document.myForm.expdate.value == "" ) {
    alert( "Please enter the expiry date" );
    return false;
  }

  /* Section to validate CVV*/

  if( document.myForm.cvv.value == "" ) {
    alert( "Please enter your CVV" );
    return false;
  }

  var lengthcvv = document.getElementById('cvv').value;
  if (lengthcvv.length != 3) {
    alert("Please enter a valid CVV");
    return false; 
  }

  var cvvck = document.myForm.cvv.value;
  var cvvckrange=/^[0-9]+$/;
  if (!f.match(cvvckrange)) {
      alert("Please enter a valid CVV");
      return false;
  }

  return( true );
}