import {data} from './assets/data/data.js';

const dictionary = data.dictionary;

const translate = (word) => {
    const charArr = word.split("");
    const translatedArr = [];
    for (let i = 0; i<charArr.length; i++) {
        translatedArr.push(translateSingleCharacter(charArr[i]));
    }
    console.log(charArr)
    const result = translatedArr.join(" ")
    console.log(result)
}

const translateSingleCharacter = (letter) => {
    for (let i = 0; i<dictionary.length; i++) {
        if (dictionary[i][0] == letter) {
            return dictionary[i][1]
        }
        if (letter == " ") {
            return "       ";
        }
    }
}

translate('hello world');