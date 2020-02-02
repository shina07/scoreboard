// Based on the Bootstrap realtime validation code
// URL: https://www.jqueryscript.net/form/Bootstrap-4-Form-Validator.html

(function() {
	'use strict';

	$(document).ready(function() {

		var form = $('#signup-form');

		// On form submit take action, like an AJAX call
		$(form).submit(function(e) {

			var fields = document.getElementsByTagName("input");
			var fieldValidity = validateForm(fields);

			if(this.checkValidity() == false || fieldValidity == false) {
				e.preventDefault();
				e.stopPropagation();

				document.querySelectorAll(".is-invalid")[0].focus();
			} else {
				$(this).addClass('was-validated');
			}
		});

		// On every :input focusout validate if empty
		$(':input').blur(function () {
			var fieldName = this.name;

			switch(fieldName) {
				case 'email':
					validateEmail($(this));
					break;
				case 'first_name':
					validateFirstName($(this));
					break;
				case 'last_name':
					validateLastName($(this));
					break;
				case 'password':
					validatePassword($(this));
					break;
				case 'password_confirm':
					validatePasswordConfirm($(this));
					break;
				case 'user_id':
					validateUserID($(this));
					break;
				case 'user_name':
					validateUserName($(this));
					break;
				default:
					break;
			}
		});


		// On every :input focusin remove existing validation messages if any
		$(':input').click(function () {

			$(this).removeClass('is-valid is-invalid');

		});

		// On every :input focusin remove existing validation messages if any
		$(':input').keydown(function () {

			$(this).removeClass('is-valid is-invalid');

		});

		// Reset form and remove validation messages
		$(':reset').click(function () {
			$(':input, :checked').removeClass('is-valid is-invalid');
			$(form).removeClass('was-validated');
		});

	});

	// Validate Email
	function validateEmail(object) {
		
		var inputValue = object.val();
		var regex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

		if(regex.test(inputValue) == false) {
			$(object).addClass('is-invalid');

			var invalidFeedback = $('.email-feedback');
			invalidFeedback.text("이메일이 옳지 않습니다.");

		} else {
			$(object).addClass('is-valid');
		};
	};

	// Validate First Name
	function validateFirstName (object) {
		
		var inputValue = object.val();
		var regex = /^[a-zA-Z가-힣]{1,10}$/;

		if(regex.test(inputValue) == false) {
			$(object).addClass('is-invalid');

			var invalidFeedback = $('.first-name-feedback');
			invalidFeedback.text("이름이 옳지 않습니다. ^[a-zA-Z가-힣]{1,10}$");

		} else {
			$(object).addClass('is-valid');
		};
	};

	function validateForm (fields) {
		for (var i = 0; i < fields.length; i++) {
			let classList = fields[i].classList;

			if (classList.contains("is-invalid")) {
				return false;
			};
		}

		return true;
	};

	// Validate Last Name
	function validateLastName (object) {
		
		var inputValue = object.val();
		var regex = /^[a-zA-Z가-힣]{1,10}$/;

		if(regex.test(inputValue) == false) {
			$(object).addClass('is-invalid');

			var invalidFeedback = $('.last-name-feedback');
			invalidFeedback.text("성이 옳지 않습니다. ^[a-zA-Z가-힣]{1,10}$");

		} else {
			$(object).addClass('is-valid');
		};
	};

	// Validate Password
	function validatePassword (object) {

		var inputValue = object.val();
		var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
	
		if (regex.test(inputValue) == false) {
			$(object).addClass('is-invalid');
			
			var invalidFeedback = $('.password-feedback');
			invalidFeedback.text("비밀번호가 옳지 않습니다.");

		} else {
			$(object).addClass('is-valid');
		};
	};

	function validatePasswordConfirm (object) {
		
		var inputValue = object.val();
		var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
		var password = $("#password").val();

		if (inputValue !== password) {
			$(object).addClass('is-invalid');

			var invalidFeedback = $('.password-confirm-feedback');
			invalidFeedback.text("비밀번호가 일치하지 않습니다.");

		} else if (regex.test(inputValue) == false) {
			$(object).addClass('is-invalid');

			var invalidFeedback = $('.password-confirm-feedback');
			invalidFeedback.text("비밀번호가 옳지 않습니다.");

		} else {
			$(object).addClass('is-valid');
		};
	};

	// Validate User ID
	function validateUserID (object) {

		var inputValue = object.val();

		if(inputValue.length >= 4) {
			$(object).addClass('is-valid');
		} else {
			$(object).addClass('is-invalid');
		};
	};

	function validateUserName (object) {
		
		var inputValue = object.val();
		var regex = /^[a-zA-z0-9가-힣]{4,20}/;

		if(regex.test(inputValue) == false) {
			$(object).addClass('is-invalid');

			var invalidFeedback = $('.user-name-feedback');
			invalidFeedback.text("화면표기용 이름이 올바르지 않습니다. 4글자 이상, 20글자 이내이며, 알파벳 대, 소문자, 숫자, 한글만 가능합니다.");

		} else {
			$(object).addClass('is-valid');
		}
	};

})();
