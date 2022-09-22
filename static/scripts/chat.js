jQuery('#textInput').keyup(function () {
  $(this).val($(this).val().toLowerCase());
});

// chat abre e fecha
var coll = document.getElementsByClassName('collapsible');

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let time = hours + ':' + minutes;
  return time;
}

// pega a primeira mensagem
function firstBotMessage() {
  let firstMessage = 'Olá, vamos falar sobre segurança hoje?';
  document.getElementById('botStarterMessage').innerHTML =
    '<p class="botText"><span>' + firstMessage + '</span></p>';

  let time = getTime();

  $('#chat-timestamp').append(time);
  document.getElementById('userInput').scrollIntoView(true);
}

//resposta vazia

firstBotMessage();

// Recupera a resposta
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
  $('#chatbox').append(botHtml);

  document.getElementById('chat-bar-bottom').scrollIntoView(true);
}

// // //Obtém o texto da caixa de entrada e o processa
function getResponse() {
  let userText = $('#textInput').val();

  if (userText == '') {
    userText = 'Digite uma mensagem!';
  }

  let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

  $('#textInput').val('');
  $('#chatbox').append(userHtml);
  document.getElementById('chat-bar-bottom').scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1500);
}

// Lida com o envio de texto por meio de cliques de botão
function buttonSendText(nill) {
  let userHtml = '<p class="userText"><span>' + nill + '</span></p>';

  $('#textInput').val('');
  $('#chatbox').append(userHtml);
  document.getElementById('chat-bar-bottom').scrollIntoView(true);

  //Remove o comentário se quiser que o bot responda a este evento buttonSendText
  // setTimeout(() => {
  //     getHardResponse(nill);
  // }, 1000)
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText('Que bom que esta gostando!🎉');
}

// Pressione enter para enviar uma mensagem
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});

// Pressione enter para enviar uma mensagem vazia
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    getResponseNill();
  }
});
