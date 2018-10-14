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
      if( $(this).val() == 'other'){
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

// function displayFirstColor(number) {
//   $( "#color option:first" ).show();
// }
//If the user selects "Theme - JS Puns" then the color menu should only
//display "Cornflower Blue," "Dark Slate Grey," and "Gold."




  // $('#design').on('click', function(){
  //     if($(this).val() == 'heart js') {
  //       // console.log('this')
  //     });



  //If the user selects "Theme - I ♥ JS" then the color menu should only
  //display "Tomato," "Steel Blue," and "Dim Grey."
  // showOption(0);
  // showOption(1);
  // showOption(2);
  // showOption(3);
  // showOption(4);
  // showOption(5);


  $('#design').change('click', function(){
    if($(this).val() == 'js puns')
    {
      showOption(0);
      showOption(1);
      showOption(2);
      hideOption(3);
       hideOption(4);
       hideOption(5);

     }
     else($(this).val() == 'heart js')
     {
      // displayFirstColor(3)

      hideOption(0);
       hideOption(1);
       hideOption(2);
       showOption(3);
       showOption(4);
       showOption(5);

   }
   //    showOption(0);
   //   showOption(0);
   //   showOption(0);
   // }else{
   //
   //    }
    });
    // $('#design').change('click', function(){
    //
    //
    //   });

  // $('#design').change('click', function(){
  //   if($(this).val() == 'js puns') {
  //     $('#colors-js-puns select option').eq(3).hide();
  //     $('#colors-js-puns select option').eq(4).hide();
  //     $('#colors-js-puns select option').eq(5).hide();
  //   }
  //   else {
  //     $('#colors-js-puns select option').eq(3).show();
  //     $('#colors-js-puns select option').eq(4).show();
  //     $('#colors-js-puns select option').eq(5).show();
  //   }
  // });
  //
  // $('#design').change('click', function(){
  //   if($(this).val() == 'heart js') {
  //     $('#colors-js-puns select option').eq(0).hide();
  //     $('#colors-js-puns select option').eq(1).hide();
  //     $('#colors-js-puns select option').eq(2).hide();
  //   } else {
  //     $('#colors-js-puns select option').eq(0).show();
  //     $('#colors-js-puns select option').eq(1).show();
  //     $('#colors-js-puns select option').eq(2).show();
  //   }
  // });

///*******  T SHIRT DONE **********************///



//When a new theme is selected from the "Design" menu, the "Color" field
// and drop down menu is updated.
