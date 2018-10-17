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
const oddInput = $('.activities label input:odd').addClass('odd');
const evenInput = $('.activities label input:even').addClass('even');

  function greyColor(number) {
    $('.activities label').eq(number).css('color', 'grey');
  };
//
// if ($('oddInput').is(":checked")){
//   console.log('yes');
// } else {
//   console.log('nope');
// }

function whatsChecked() {
  $('.activities input[type="checkbox"]').click(function(){
    if($('.odd').is(':checked'))
    // $(this).prop("checked")
    {
      console.log('1');
    }
    else if($('.even').is(':checked'))
    {
      console.log('2');
    }
  })
};


whatsChecked();


// function whatsChecked() {
//   $('.activities input[type="checkbox"]'). click(function(){
//     if($(this).prop("checked") == oddInput.is(':checked')){
//
//     //  .attr('disabled', 'disabled');
//     }
//     else if($(this).prop("checked") == evenInput.is(':checked')){
//       oddInput.not(':checked');
//
//     }
//   });
// };







// $('.activities label').change('click', function(){
//   console.log('hi');
// });


//   $( ".activities label" ).each(function( index )
//   {
//   console.log( index + ": " + $( this ).text() );
// });

//   function greyColor(number) {
//     $('.activities label').eq(number).css('color', 'grey');
//   };
//
//   function inputClass(){
//     $(".activities label input:odd").is(":checked").addClass("odd");
//   };
//   //$(this).siblings("input[value=none]")
//   //ticked, pos1,pos2
//   function inputClass(){
//     if($(".activities label input:odd").is(":checked") === true) {
//       $(".activities label input:odd").addClass("greg")
//       $('.greg').attr('disabled', 'disabled');
//     }
//   };
// inputClass();


    //  if ($(".activities label input").is(":checked")) {
    //   $('.activities label input:odd').attr('disabled', 'disabled');
    //     $('.activities label input:odd').not(this);
    // } else {
    //   $('.activities label input:even').attr('disabled', false);
    //   $('.activities label input:even').not(this);
    // }


  // $('.activities label input').change('click', function() {
  //   getLabel(1, 2, 3);
  //
  // });

//.eq(pos1)
//.eq(pos2)
//add class with style to grey out the ones we dont want to choose since in same time block





//When a user unchecks an activity, make sure that competing activities (if there are any) are
// no longer disabled.










//As a user selects activities, a running total should display below the list of checkboxes.
//For example, if the user selects "Main Conference", then Total: $200 should appear.
//If they add 1 workshop, the total should change to Total: $300.
