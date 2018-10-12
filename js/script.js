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
      }else{
          $('#other-title').remove();
      }
  });
  //DONE*********************************



// ***************   T-SHIRT SECTION START *************************


//For the T-Shirt "Color" menu, only display the color options that match
//the design selected in the "Design" menu.

$('#design').change('click', function(){

  if($(this).val() == 'js puns') {
    $('#colors-js-puns select option').eq(3).hide();
    $('#colors-js-puns select option').eq(4).hide();
    $('#colors-js-puns select option').eq(5).hide();
  }

});


//If the user selects "Theme - JS Puns" then the color menu should only
//display "Cornflower Blue," "Dark Slate Grey," and "Gold."





//If the user selects "Theme - I ♥ JS" then the color menu should only
//display "Tomato," "Steel Blue," and "Dim Grey."




//When a new theme is selected from the "Design" menu, the "Color" field
// and drop down menu is updated.
