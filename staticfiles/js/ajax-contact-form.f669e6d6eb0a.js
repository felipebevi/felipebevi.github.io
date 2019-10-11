$(function() {

	// Get the form.
	var form = $('.ct-form');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		var campos = {};
        campos['nome'] = $('input[name=name]').val();
        campos['telefone'] = '-';
        campos['email'] = $('input[name=email]').val();
        campos['mensagem'] = $('textarea[name=message]').val();
        if (campos['nome'].trim() != '' && campos['telefone'].trim() != '' && campos['email'].trim() != '' && campos['mensagem'].trim() != '') {
            $('.post-btn').unbind('click').html('Enviando...');
            $.ajax({
                type: "POST",
                url: 'http://precoja.com/header.php?enviamsgform&github',
                data: campos,
                success: function(a) {
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text('Mensagem enviada com sucesso');

					// Clear the form.
					$('#name').val('');
					$('#email').val('');
					$('#msg').val('');
                }
            });
        } else {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');
            $(formMessages).text('preencha todos os campos');
        }



	});

});
