// Пример простой программы на JavaScript

// Ввод данных с помощью командной строки (Node.js)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Функция для приветствия пользователя
function greetUser() {
  rl.question('Как вас зовут? ', (name) => {
    console.log(`Привет, ${name}! Добро пожаловать в мир JavaScript.`);
    rl.close();
  });
}

// Запускаем программу
greetUser();
