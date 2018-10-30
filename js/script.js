// ***************   JOB ROLE SECTION START *************************
//This takes the focus of the first textarea when page is loaded
$("fieldset input").eq(0).focus();
//Done************************************
//Include a text field that will be revealed when the "Other" option
//is selected from the "Job Role" drop down menu.
//Give the field an id of “other-title,” and add the placeholder text of
//"Your Job Role".
$('#other-title').remove();
$('#title').change(function() {
	if ($(this).val() === 'other') {
		$('fieldset').eq(0).append('<input id="other-title" type="text" placeholder="Your Job Role" />').html();
	} else {
		$('#other-title').remove();
	}
});
//JOB ROLE DONE*********************************
// ***************   T-SHIRT SECTION START *************************
//$('form').submit(function(e) {
//For the T-Shirt "Color" menu, only display the color options that match
//the design selected in the "Design" menu.
$(function() {
	$('#color').hide();
	$('#design').change(function() {
		if ($('#design option').val() === 'js puns') {
			$('#color').hide();
		} else {
			$('#color').show();
		}
	});
});

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
$('#design').change('click', function() {
	if ($(this).val() === 'js puns') {
		$('#color').val('cornflowerblue')
		showOption(0);
		showOption(1);
		showOption(2);
		hideOption(3);
		hideOption(4);
		hideOption(5);
		hideOption(6);
	} else if ($(this).val() === 'heart js') {
		$('#color').val('tomato')
		hideOption(0);
		hideOption(1);
		hideOption(2);
		hideOption(6);
		showOption(3);
		showOption(4);
		showOption(5);
	} else if ($(this).val() === 'Select Theme') {
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
const npm = $('.activities label input').eq(6);
//let costs = 0;
let totaling = '<span id="totaling">' + 'Total:' + '0' + '</span>';
$(".activities").append(totaling);
//else if ($(jsFrameworks).is(":checked") === false){
//totalPrice = totalPrice - 100;
//}
// add class with style to grey out the ones we dont want to choose since in same time block
///////////////////////////////
$('.activities label').on('click', function() {
	///////////////////////////////////
	if ($(all).is(':checked') === true) {
		costA = 200;
	} else if ($(all).is(':checked') === false) {
		costA = 0;
	}
	if ($(jsFrameworks).is(":checked") === true) {
		costB = 100;
	} else if ($(jsFrameworks).is(":checked") === false) {
		costB = 0;
	}
	if ($(jsLibs).is(':checked') === true) {
		costC = 100;
	} else if ($(jsLibs).is(':checked') === false) {
		costC = 0;
	}
	if ($(express).is(':checked') === true) {
		costD = 100;
	} else if ($(express).is(':checked') === false) {
		costD = 0;
	}
	if ($(node).is(':checked') === true) {
		costE = 100;
	} else if ($(node).is(':checked') === false) {
		costE = 0;
	}
	if ($(buildTools).is(':checked') === true) {
		costF = 100;
	} else if ($(buildTools).is(':checked') === false) {
		costF = 0;
	}
	if ($(npm).is(':checked') === true) {
		costG = 100;
	} else if ($(npm).is(':checked') === false) {
		costG = 0;
	}
	//////////////////////////////////
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
	totaling = costA + costB + costC + costD + costE + costF + costG;
	document.getElementById('totaling').innerHTML = "Total: " + totaling;
});
//When a user unchecks an activity, make sure that competing activities (if there are any) are
// no longer disabled.
//As a user selects activities, a running total should display below the list of checkboxes.
//For example, if the user selects "Main Conference", then Total: $200 should appear.
//If they add 1 workshop, the total should change to Total: $300.
// ***************   Register for Activities SECTION END *************************
// ***************   PAYMENT SECTION START *************************
//Starts page off only showing credit card payment
$('#bit-coin').hide();
$('#pay-pal').hide();
$('#payment option[value="select_method"]').remove();
/*"Payment Info" section
Display payment sections based on the payment option chosen in the select menu.
*/
let paymentChange = $('#payment');
//$('')
$(paymentChange).on('change', function(e) {
	console.log(e.target);
	let select = $("#payment option:selected").text();
	console.log(select);
	//$('#payment option').eq(0).hide();
	/*
	The "Credit Card" payment option should be selected by default. Display the #credit-card div,
	and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match
	 the payment option displayed on the page.
	*/
	//  if(select === 'Select Payment Method'){
	//}
	if (select === 'Credit Card') {
		$('#credit-card').show();
		$('#bit-coin').hide();
		$('#pay-pal').hide();
	} else if (select !== 'Credit Card') {
		$('#credit-card').hide();
	}
	/*
	When a user selects the "PayPal" payment option, the PayPal information should display,
	 and the credit card and “Bitcoin” information should be hidden.
	*/
	if (select === 'PayPal') {
		$('#pay-pal').show();
		$('#bit-coin').hide();
	}
	/*When a user selects the "Bitcoin" payment option, the Bitcoin information should display,
	and the credit card and “PayPal” information should be hidden.
	*/
	if (select === 'Bitcoin') {
		$('#bit-coin').show();
		$('#pay-pal').hide();
	}
	if (select === 'Select Payment Method') {
		$('#credit-card').hide();
		$('#bit-coin').hide();
		$('#pay-pal').hide();
	}
});
// /*
// note: The user should not be able to select the "Select Payment Method" option from
//  the payment select menu, because the user should not be able to submit the form without
//   a chosen payment option.
// */
//
// // ***************   PAYMENT SECTION END *************************
// ***************   VALIDATION START *************************
$(document).ready(function() {
	$('button[type="submit"]').click(function(e) {
		let isValid = true;
		$("#payment option:selected").text();

		$('input').each(function(i) {
      if (i < 9){
			if ($.trim($(this).val()) == '') {
				isValid = false;
				$(this).css({
					"border": "1px solid red",
					"background": "#FFCECE"
				});
			} else {
				$(this).css({
					"border": "",
					"background": ""
				});
      }

    }
});



		//This will give a warning to the name section if it is less than 3 letters long and add text
		if ($('#name').val().length < 3) {
			$('fieldset label').eq(0).append('<span class="redWarning"> Name is to short</span>');
			$('.redWarning').css('color', 'red');
		} else {
			$('span').remove();
		}
		//////////////////////////////////////////////////////////////////////
		//This will check if the email is correctly typed in with @ and a period.
		const email = $('#mail').val();
		const pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if (email !== '') {
			if (pattern.test(email)) {
				console.log('accepted');
			} else {
				$('fieldset label').eq(1).append('<span class="redWarning"> Email is invalid</span>');
				$('.redWarning').css('color', 'red');
			}
		}
		//////////////////////////////////////////////////////
		//This is to validate the creditcard secction
		if ($('#payment option:selected').val() === 'credit card') {
    const creditcardNum = $('#cc-num').val().length;
    const userZip = $('#zip').val().length;
    const userCvv = $('#cvv').val().length;
    const isNumber = $('.col-6 input');
    const ccc = $('#cc-num').val()
    const zzz = $('#zip').val()
    const vvv = $('#cvv').val()
		if (creditcardNum !== '') {

			if (isNaN(ccc)) {
				e.preventDefault();
				$('.col-6 label').append('<span class="redWarning"> Numbers Only*  </span>');
				$('.redWarning').css('color', 'red');
			} else {
				console.log('accepted');
			}
			if (creditcardNum < 13 || creditcardNum > 16) {
				e.preventDefault();
				$('.col-6 label').append('<span class="redWarning"> Invalid*</span>');
				$('.redWarning').css('color', 'red');
			} else {
				console.log('accepted');
			}
			/////////////////////
			if (isNaN(zzz)) {
				e.preventDefault();
				$('.col-3 label').eq(0).append('<span class="redWarning"> Numbers Only*  </span>');
				$('.redWarning').css('color', 'red');
			} else {
				console.log('accepted');
			}
			if (userZip < 5 || userZip > 5) {
				e.preventDefault();
				$('.col-3 label').eq(0).append('<span class="redWarning"> Invalid*</span>');
				$('.redWarning').css('color', 'red');
			} else {
				console.log('accepted');
			}
			//////////////////////////////
			if (isNaN(vvv)) {
				e.preventDefault();
				$('.col-3 label').eq(1).append('<span class="redWarning"> Numbers Only*  </span>');
				$('.redWarning').css('color', 'red');
			} else {
				console.log('accepted');
			}
			if (userCvv < 3 || userCvv > 4) {
				e.preventDefault();
				$('.col-3 label').eq(1).append('<span class="redWarning"> Invalid*</span>');
				$('.redWarning').css('color', 'red');
			} else {
				console.log('accepted');
			}
		};
};

		////////////////////////////////
		if ($(".activities input").prop("checked")) {
			console.log('accepted');
		} else {
			e.preventDefault();
			$('.activities legend').append('<span class="redWarning"> Choose One*  </span>');
			$('.redWarning').css('color', 'red');
		}
		/////////////////////
		if (isValid == false) {
			e.preventDefault();
		} else {
			alert('Thank you for submitting');
		}
		////////////////////////////////////////////////////////////////
	});
});
//});
// ***************   VALIDATION END *************************
