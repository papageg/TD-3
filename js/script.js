// ***************   JOB ROLE SECTION START *************************
  //This takes the focus of the first textarea when page is loaded
  $("fieldset input").eq(0).focus();
  //Done************************************

  //Include a text field that will be revealed when the "Other" option
  //is selected from the "Job Role" drop down menu.

  //Give the field an id of “other-title,” and add the placeholder text of
  //"Your Job Role".
  $('#other-title').remove();
  $('#title').change(function(){
      if( $(this).val() === 'other'){
          $('fieldset').eq(0).append('<input id="other-title" type="text" placeholder="Your Job Role" />').html();
      }
      else {
          $('#other-title').remove();
      }
  });
  //JOB ROLE DONE*********************************


// ***************   T-SHIRT SECTION START *************************


//For the T-Shirt "Color" menu, only display the color options that match
//the design selected in the "Design" menu.

function hideOption(number) {
 $('#colors-js-puns select option').eq(number).hide();
};

function showOption(number) {
 $('#colors-js-puns select option').eq(number).show();

};

//When a new theme is selected from the "Design" menu, the "Color" field
// and drop down menu is updated.
$('#color').append('<option value="choosecolor">Choose Color</option>');
$('#color').val('choosecolor')
  $('#design').change('click', function(){
    if($(this).val() === 'js puns')
    {
      $('#color').val('cornflowerblue')
      showOption(0);
      showOption(1);
      showOption(2);
      hideOption(3);
      hideOption(4);
      hideOption(5);
      hideOption(6);
     }
     else if($(this).val() === 'heart js')
     {
        $('#color').val('tomato')
         hideOption(0);
         hideOption(1);
         hideOption(2);
         hideOption(6);
         showOption(3);
         showOption(4);
         showOption(5);
     }
     else if($(this).val() === 'Select Theme')
     {
        $('#color').val('choosecolor')
        showOption(0);
        showOption(1);
        showOption(2);
         showOption(3);
         showOption(4);
         showOption(5);
         showOption(6);
     }
});

///*******  T SHIRT DONE **********************///




// ***************   Register for Activities SECTION START *************************



//Some events are at the same day and time as others. If the user selects a workshop,
//don't allow selection of a workshop at the same day and time -- you should disable the
//checkbox and visually indicate that the workshop in the competing time slot isn't available.
// const oddInput = $('.activities label input:odd').addClass('odd');
// const evenInput = $('.activities label input:even').addClass('even');
const all = $('.activities label input').eq(0);
const jsFrameworks = $('.activities label input').eq(1);
const jsLibs = $('.activities label input').eq(2);
const express = $('.activities label input').eq(3);
const node = $('.activities label input').eq(4);
const buildTools = $('.activities label input').eq(5);
const poo = $('.activities label input').eq(6);

//add class with style to grey out the ones we dont want to choose since in same time block
$('.activities label').change('click', function(){
  if ($(jsFrameworks).is(':checked') === true) {
    $(express).prop('disabled', true);
    $('.activities label').eq(3).css('color', 'grey');
} else if ($(jsFrameworks).is(':checked') === false) {
   $(express).prop('disabled', false);
   $('.activities label').eq(3).css('color', 'black');
  }
////////////////////////////////////////////////////////////////////////////////////////////
  if ($(jsLibs).is(':checked') === true) {
    $(node).prop('disabled', true);
    $('.activities label').eq(4).css('color', 'grey');
} else if ($(jsLibs).is(':checked') === false) {
   $(node).prop('disabled', false);
   $('.activities label').eq(4).css('color', 'black');
  }
////////////////////////////////////////////////////////////////////////////////////////////
    if ($(express).is(':checked') === true) {
      $(jsFrameworks).prop('disabled', true);
      $('.activities label').eq(1).css('color', 'grey');
  } else if ($(express).is(':checked') === false) {
     $(jsFrameworks).prop('disabled', false);
     $('.activities label').eq(1).css('color', 'black');
    }
////////////////////////////////////////////////////////////////////////////////////////////
      if ($(node).is(':checked') === true) {
        $(jsLibs).prop('disabled', true);
        $('.activities label').eq(2).css('color', 'grey');
    } else if ($(node).is(':checked') === false) {
       $(jsLibs).prop('disabled', false);
       $('.activities label').eq(2).css('color', 'black');
      }
});

//When a user unchecks an activity, make sure that competing activities (if there are any) are
// no longer disabled.
//As a user selects activities, a running total should display below the list of checkboxes.
//For example, if the user selects "Main Conference", then Total: $200 should appear.
//If they add 1 workshop, the total should change to Total: $300.

// ***************   Register for Activities SECTION END *************************


// ***************   PAYMENT SECTION START *************************

/*"Payment Info" section
Display payment sections based on the payment option chosen in the select menu.
*/


/*
The "Credit Card" payment option should be selected by default. Display the #credit-card div,
and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match
 the payment option displayed on the page.
*/
const creditCard = $('#payment option:nth-child(2)');
//$('#payment option').eq(1);
const payPal = $('#payment option:nth-child(3)');
const bitCoin = $('#payment option:nth-child(4)');
const paymentTypes = $('payment');
const cc = $('#credit-card');
console.log(creditCard);
$(creditCard).is('click', function(){
  if($(creditCard) === true){
    $(cc).hide();
  } else if(($(creditCard) === false)){
    $(cc).show();
  }
});



//
// if ($(creditCard).is(':checked') === true) {
//   $('#credit-card').show();
// }else if ($(creditCard).is(':checked') === false) {
//   $('#credit-card').hide();
//  }
//
// ////////////////////////////////////////////////////////////////////////////////////
//
// if ($(payPal).is(':checked') === true) {
//
// } else if ($(payPal).is(':checked') === false) {
//
// }
//
// ////////////////////////////////////////////////////////////////////////////////////
//
// if ($(bitCoin).is(':checked') === true) {
//
// } else if ($(bitCoin).is(':checked') === false) {
//
// }
//
//
// /*
// When a user selects the "PayPal" payment option, the PayPal information should display,
//  and the credit card and “Bitcoin” information should be hidden.
// */
//
//
//
// /*When a user selects the "Bitcoin" payment option, the Bitcoin information should display,
// and the credit card and “PayPal” information should be hidden.
// */
//
//
//
// /*
// note: The user should not be able to select the "Select Payment Method" option from
//  the payment select menu, because the user should not be able to submit the form without
//   a chosen payment option.
// */
//
//
//
//
//
//
//
//
//
//
//
//
//
// // ***************   PAYMENT SECTION END *************************
