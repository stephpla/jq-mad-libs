const question = 'Please provide a';
let data = [
  ['n exclamation', '(Wow!, Oh!, Yuck!)', '! he said '],
  ['n adverb', 'A description of an action (-ly)', ' as he jumped into his convertible '],
  [' noun', 'person, place or thing', ' and drove off with his '],
  [' adjective', 'A describing word', ' wife.']
];
let index = 0;
let product = '';

$('#answer-area').hide();
$('#clear-button').hide();

$('#start-button').click(function() {
  launchMadLib();
})

function launchMadLib() {
  $('#answer-area').show();
  $('#start-button').hide();
  if (index === data.length) {
    executeMadLib();
  } else {
    $('#question-span').html(question + data[index][0]);
    $('textarea').attr('placeholder', data[index][1]);
  }
}

$('#enter-button').click(function(){
  loopMadLib();
});

function loopMadLib() {
  product += $('textarea').val() + data[index][2];
  index += 1;
  $('textarea').val('');
  launchMadLib();
  console.log(product);
}

function executeMadLib() {
  const $madLib = $('<p>'+product+'</p>');
  $('#mad-lib-generated').append($madLib);

  $('#answer-area').hide();
  $('#start-button').hide();

  $('#clear-button').show();
  $('#start-button').show();

  product = '';
  index = 0;
}

$('#clear-button').click(function(){
  $('#mad-lib-generated').html('');
  $('#clear-button').hide();
});
