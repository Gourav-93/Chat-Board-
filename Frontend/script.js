const chatForm = document.getElementById('chat-form');
const messageInput = document.getElementById('message-input');
const chatMessages = document.getElementById('chat-messages');
const sendBtn = document.getElementById('send-btn');

// API Endpoint (Backend URL)
const API_URL = 'http://localhost:5280/api/chat';

chatForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const messageText = messageInput.value.trim();
    if (!messageText) return;

    // 1. Add user message to UI
    addMessageToUI(messageText, 'user');
    
    // Clear input
    messageInput.value = '';
    
    // 2. Add typing indicator
    const typingId = addTypingIndicator();
    
    // Disable input while waiting
    messageInput.disabled = true;
    sendBtn.disabled = true;

    try {
        // 3. Call Backend API
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: messageText })
        });

        const data = await response.json();
        
        // Remove typing indicator
        removeTypingIndicator(typingId);

        // 4. Show AI response or error
        if (response.ok) {
            addMessageToUI(data.response, 'ai');
        } else {
            // Handle error from backend (like the 503 we saw earlier)
            const errorMsg = data.message || JSON.stringify(data);
            addMessageToUI(`Error: ${errorMsg}`, 'error');
        }
    } catch (error) {
        // Remove typing indicator in case of network error
        removeTypingIndicator(typingId);
        addMessageToUI(`Network Error: Ensure the backend is running. (${error.message})`, 'error');
    } finally {
        // Re-enable input
        messageInput.disabled = false;
        sendBtn.disabled = false;
        messageInput.focus();
    }
});

function addMessageToUI(text, sender) {
    const messageDiv = document.createElement('div');
    
    // Determine classes based on sender
    let cssClass = 'ai-message';
    let avatarIcon = '✨';
    
    if (sender === 'user') {
        cssClass = 'user-message';
        avatarIcon = '👤';
    } else if (sender === 'error') {
        cssClass = 'ai-message error-message';
        avatarIcon = '⚠️';
    }

    messageDiv.className = `message ${cssClass}`;
    
    // Format text nicely (basic newline handling for AI)
    const formattedText = text.replace(/\n/g, '<br>');

    messageDiv.innerHTML = `
        <div class="avatar">${avatarIcon}</div>
        <div class="bubble">
            <p>${formattedText}</p>
        </div>
    `;

    chatMessages.appendChild(messageDiv);
    scrollToBottom();
}

function addTypingIndicator() {
    const id = 'typing-' + Date.now();
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message ai-message typing-msg';
    messageDiv.id = id;
    
    messageDiv.innerHTML = `
        <div class="avatar">✨</div>
        <div class="bubble">
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
    
    return id;
}

function removeTypingIndicator(id) {
    const indicator = document.getElementById(id);
    if (indicator) {
        indicator.remove();
    }
}

function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
