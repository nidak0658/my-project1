// index.js

// Import the required modules from crypto-js library
const CryptoJS = require("crypto-js");

// Example data to encrypt
const data = "Hello, World!";

// Encryption with AES (Advanced Encryption Standard)
const secretKey = "MySecretKey123"; // Replace with your own secret key
const encryptedData = CryptoJS.AES.encrypt(data, secretKey).toString();
console.log("Encrypted:", encryptedData);

// Decryption of the encrypted data
const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
console.log("Decrypted:", decryptedData);
