function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    if (message !== '') {
      const chat = document.querySelector('.chat');
      const div = document.createElement('div');
      div.className = 'message user1';
      div.innerHTML = `<p>${message}</p>`;
      chat.appendChild(div);
      input.value = '';
      chat.scrollTop = chat.scrollHeight;
    }
  }
  