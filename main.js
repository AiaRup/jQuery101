// PARTNER EXERCISE 1
$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');
$('li:first-child').css('color', 'green');
$('li:last-child').css('color', 'pink');
$('#brown-div').css('color', 'brown');

// PARTNER EXERCISE 2
$('button').on('click', function() {
  alert($('input').val());
});

// PARTNER EXERCISE 3
$('button').on('click', function() {
  var name = $('#my-input').val();
  $('.students').append('<li>' + name + '</li>');
});


$('.students').on('click', 'li', function() {
  var item = $(this);
  item.remove();
});

