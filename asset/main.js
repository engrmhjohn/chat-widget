function toggleChat() {
    var chatOptions = document.getElementById('chat-options');
    var toggleButton = document.getElementById('toggle-button');
    var isOpening = !chatOptions.classList.contains('show');
  
    // Toggle visibility of the chat options container with fade-up or fade-down effect
    if (isOpening) {
        chatOptions.classList.add('show');
        chatOptions.classList.remove('hide');
        toggleButton.classList.add('spin-right');
        toggleButton.classList.remove('spin-left');
        toggleButton.innerHTML = '<i class="fas fa-times"></i>'; // Change to cross icon
    } else {
        chatOptions.classList.add('hide');
        chatOptions.classList.remove('show');
        toggleButton.classList.add('spin-left');
        toggleButton.classList.remove('spin-right');
        setTimeout(() => {
            toggleButton.innerHTML = '<i class="fas fa-comments"></i>'; // Change back to comments icon
        }, 150); // Delay to align with spin animation
    }
  }