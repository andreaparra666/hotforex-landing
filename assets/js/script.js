
// jQuery and jQuery Validation Plugin are required for this script to work
$(document).ready(function() {
  // Form Validation
  $('form').validate({
    // validate required fields
    rules: {
      email: {
        required: true,
        email: true
      },
      first_name: {
        required: true
      },
      last_name: {
        required: true
      },
      privacy_policy: {
        required: true
      },
      phone: {
        required: true,
        digits: true 
      }
    },
    // error messages
    messages: {
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      first_name: "Please enter your first name",
      last_name: "Please enter your last name",
      privacy_policy: "You must accept the privacy policy",
      phone: {
        required: "Please enter your phone number",
        digits: "Please enter only numbers for the phone number"
      }
    },
    errorElement: 'div',
    errorClass: 'invalid-feedback',
    highlight: function (element) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function (element) {
      $(element).removeClass('is-invalid');
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") === "checkbox") {
        error.insertAfter(element.closest('.form-check'));
      } else {
        error.insertAfter(element);
      }
    },
    //Success message on submit
    submitHandler: function(form) {
      $('#success-message').show();  
      $(form).trigger('reset'); 
    }
  });

  // country code and currency swithcer according to the selected country
  $('#country').on('change', function() {
    var selectedCountry = $(this).val();

    // Update the country code and currency
    switch(selectedCountry) {
      case 'Mexico':
        $('#country_code').val('+52');
        $('#currency').val('MXN'); 
        break;
      case 'United States':
        $('#country_code').val('+1');
        $('#currency').val('USD'); 
        break;
      case 'Venezuela':
        $('#country_code').val('+58');
        $('#currency').val('VEF'); 
        break;
      default:
        $('#country_code').val('+00');
        $('#currency').val('');
        break;
    }
  });

  // only numbers in phone input
  $('#phone').on('input', function() {
    var value = $(this).val();
    // Replace all non-numeric characters with empty string
    $(this).val(value.replace(/\D/g, ''));
  });
});







