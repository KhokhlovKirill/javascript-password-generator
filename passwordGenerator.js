// Password Generator by Khokhlov Kirill

"use strict" // Использование строгого режима

// Функция main
// В этой функции начинается и заканчивается выполнение программы
function main(){
    alert("Welcome to the Password Generator!"); // Приветствие

    // Получение от пользователя необходимой ему сложности пароля
    let passwordDifficulty = 0;
    while (typeof(passwordDifficulty) !== "number" || passwordDifficulty < 1 || passwordDifficulty > 3){
        passwordDifficulty = Number(prompt("Select difficulty of your password:\n1) Easy (Only numbers)\n2) Medium (Numbers and letters)\n3) Hard (Numbers, letters and special symbols)"));
    }

    // Получение от пользователя необходимой ему длины пароля
    let passwordLength = 0;
    while (typeof(passwordLength) !== "number" || passwordLength < 1){
        passwordLength = Number(prompt("Enter length of your password:"));
    }

    alert(`Your password: ${generatePassword(passwordDifficulty, passwordLength)}`); // Вывод сгенерированного пароля пользователю
}

// Функция generatePassword
// Эта функция принимает сложность пароля и его длину как аргументы, и согласно им генерирует и возвращает рандомный пароль.
// Аргументы:
// passwordDifficulty (number) - сложность пароля (1 - только цифры, 2 - цифры и буквы, 3 - цифры, буквы и спец. символы)
// passwordLength (number) - длина пароля (в символах)
// Возращает сгенерированный пароль в виде значения типа string
function generatePassword(passwordDifficulty, passwordLength){
    const numbersArray = "0123456789"; // Массив цифр
    const lettersArray = "qwertyuiopasdfghjklzxcvbnm"; // Массив букв
    const symbolsArray = "!@#%&*/*-+"; // Массив специальных символов

    // Добавление в массив totalArray необходимых символов согласно значению аргумента passwordDifficulty (см. документацию к этой функции)
    let totalArray = "";
    switch (passwordDifficulty){
        case 1:
            totalArray = numbersArray;
            break;
        case 2:
            totalArray = numbersArray + lettersArray;
            break;
        case 3:
            totalArray = numbersArray + lettersArray + symbolsArray;
            break;
    }

    // Генерация пароля, к паролю присоединяются рандомные элементы массива totalArray необходимое кол-во раз (определяется аргументом passwordLength (см. документацию к этой функции))
    let password = "";
    for (let i = 0; i < passwordLength; i++){
        password += totalArray[getRandomNumber(totalArray.length)];
    }

    return password; // Возвращение сгенерированного пароля
}

// Функция getRandomNumber
// Эта функция генерирует рандомное число от 0 до значения опредляемого аргументом max
// Аргументы: max (number) - верхний предел генерируемого числа
// Возвращает сгенерированное рандомное число типа number
function getRandomNumber(max) {
    return Math.floor(Math.random() * max); // Возвращение рандомного числа
  }

main(); // Вызов функции main()