var fs = require('fs');

function showScheme() {
	$('#scheme_input').removeClass('hide');
	$('#scheme_output').removeClass('hide');
	$('#comparison_output').removeClass('hide');
}
function hideScheme() {
	$('#scheme_input').addClass('hide');
	$('#scheme_output').addClass('hide');
	$('#comparison_output').addClass('hide');
}

$(document).ready(function() {
	$('#cb_scheme').click(function() {
		if (!$(this).is(':checked')) {
			hideScheme();
		} else {
			showScheme();
		}
	});

	$('#string_input').keyup(function() {
		if ($(this).val() !== ''){
			$('#string_output').text(hex_md5($(this).val()));
		} else {
			$('#string_output').text('');
		}
	});

	$('#file_input').change(function() {
		$('#file_output').text(hex_md5(fs.readFileSync($('#file_input').prop('files')[0].path).asciiSlice().replace('\n', '').replace('\r', '').replace(' ', '')))
	})

	$('#scheme_input').change(function() {
		$('#scheme_output').text(fs.readFileSync($('#scheme_input').prop('files')[0].path).hexSlice().substr(4, 32))
		if ($('#scheme_output').text() === $('#file_output').text()) {
			$('#comparison_output').text('MD5-хэши равны');
		} else {
			$('#comparison_output').text('MD5-хэши не равны');
		}
	})

	$('#scheme_input').click(function(e) {
		if ($('#file_input').prop('files').length !== 0) {
		} else {
			e.preventDefault();
			alert('Сначала выберите файл для хэширования');
		}
	})





})
