## **[Silly React Chatbot](https://silly-bot-4-u.netlify.app/) with Multiple Transformers**

This is a simple React-based chatbot that gives silly output. It try to give the output from some text transformations such as word counting, reversing text, removing vowels, etc. It also includes a random transformer bot.

## **Features**

- **Multiple Bots**: Each bot performs a different text transformation like counting words, reversing text, converting to uppercase, and more.
- **Random Transformer Bot**: Randomly selects a different bot for every user input.
- **Dynamic Bot Names**: The bot's name changes randomly with every message, providing a unique experience.
- **Dynamic Bot Chat Colour**: Background colour of chat depend's on Bot.


## **Bots and Transformations**

1. **Word Count Bot**: Counts the number of words in the message.
2. **Vowel & Consonant Counter Bot**: Counts the number of vowels and consonants in the message.
3. **Text Reverser Bot**: Reverses the text in the message.
4. **Uppercase Bot**: Converts all the text to uppercase.
5. **Lowercase Bot**: Converts all the text to lowercase.
6. **Capitalize Words Bot**: Capitalizes the first letter of each word.
7. **Remove Vowels Bot**: Removes all vowels from the message.
8. **Remove Consonants Bot**: Removes all consonants from the message.
9. **Repeat Words Bot**: Repeats each word in the message twice.
10. **Replace Spaces with Underscores Bot**: Replaces all spaces in the message with underscores.
11. **Shuffle Characters Bot**: Randomly shuffles the characters in each word.

## **How to Use It**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Sonalkumari05/chatBot.git
   cd project-directory
   ```

2. **Install Dependencies**
   Make sure you have [Node.js](https://nodejs.org/) installed in your system. Then, run the following command to install the necessary dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm run dev
   ```

4. **Use the Chatbot**
   - Choose a bot from the sidebar to start chatting.
   - Type a message in the chatbox and press Enter or click the send button.
   - You can choose the random transformation for silly bot where output comes randomly.
   - The bot will respond based on the selected transformation.

## **React Technologies Used**

We used React features and hooks to create a chatbot:

### **1. `useState`**
   - Used to manage the state of components, such as storing user messages, the selected bot.
   - Example:
     ```js
     const [messages, setMessages] = useState([]);
     ```

### **2. `useEffect`**
   - Used for selecting random bots and auto scroll to new message.
   - Example:
     ```js
     useEffect(() => {
       selectRandomBot();
     }, []);  
     ```

### **3. `useRef`**
   - Used useRef to auto scroll on current chat.
   - Example:
     ```js
     const chatEndRef = useRef(null);

     const scrollToBottom = () => {
       chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
     };
     ```

### **4. `.map()`**
   - Used .map to dynamically render the messages.
   - Example:
     ```js
     {messages.map((message, index) => (
       <Message key={index} text={message.text} sender={message.sender} timestamp={message.timestamp} />
     ))}
     ```


### **5. Event Handlers**
   - Used to handle user interactions, such as sending a message, selecting a bot.
   - Example:
     ```js
     const handleSend = (input) => {
     };

     const handleBotSelection = (botName) => {
     };
     ```