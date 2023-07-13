Your App Name
Description
This application is a cryptocurrency tracker that allows users to view current prices of various cryptocurrencies, add cryptocurrencies to favorites, check Ethereum balance and perform Ethereum transactions between two wallet addresses.

Design Decisions
Using styled-components: The use of the styled-components library for styling our components helps maintain clean and reusable code. Each component has its own declared style which can be easily modified and reused across the app.

Responsive Design: Our app is designed with principles of Responsive Design, ensuring an optimal user experience on various devices including mobile devices.

Flexbox Layout: The use of Flexbox for layout creation enables us to easily manipulate the placement and alignment of items regardless of their original size and order in the DOM.

Libraries and APIs
Web3: The Web3.js library is used for interacting with the Ethereum blockchain, including balance check and transaction execution.
CryptoCompare API: Used to fetch cryptocurrency data.
Goerli Test Network: We use the Goerli Test Network for testing Ethereum transactions.
Installation and Running
Install Node.js and npm.
Clone this repository: git clone https://github.com/your-username/your-repository.git.
Install dependencies: npm install.
Run the app: npm start.
Open a web browser and go to http://localhost:3001.
Usage
Navigate to the main page of the app.
Here you'll find a list of all cryptocurrencies. You can select one to get more detailed information.
You can also add a cryptocurrency to favorites by clicking on the "Add to Favorites" button. This cryptocurrency will be saved in your browser's local storage.
You can remove a cryptocurrency from favorites by clicking on the "Remove from Favorites" button.
To check Ethereum balance, go to the "Ethereum Balance Checker" page and enter an Ethereum wallet address.
To perform an Ethereum transaction, go to the "Ethereum Transaction" page and enter the source and target Ethereum addresses, and the transaction amount.
