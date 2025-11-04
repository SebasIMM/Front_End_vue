$ (function() {
  $('.list-color').css('color', 'red');

  $('#list').append('<li>Nuevo elemento jQuery</li>');

  $('#toggle-btn').on('click', function () {
    const lista = $('ul');
    if (lista.is(':visible')) {
      lista.hide();
      $(this).text('Mostrar lista');
    } else {
      lista.show();
      $(this).text('Ocultar lista');
    }
  });
});
