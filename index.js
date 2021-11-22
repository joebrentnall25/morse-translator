import {data} from './assets/data/data.js';

const dictionary = data.dictionary;

export const translate = (word, option) => {
    const translatedArr = [];
    if (option == 0){
        const charArr = word.split("");
        for (let i = 0; i<charArr.length; i++) {
            translatedArr.push(translateSingleCharacterToEnglish(charArr[i]));
        }
        const result = translatedArr.join(" ")
        return result;
    }
    else if (option == 1) {
        const charArr = word.split("/");
        for (let i = 0; i<charArr.length; i++){
            const letter = charArr[i].split(' ');
            console.log(letter)
            for (let i=0; i<letter.length; i++){
                translatedArr.push(translateSingleMorseToEnglish(letter[i]));
            }
            translatedArr.push(" ");
        }
        translatedArr.pop();
        let result = translatedArr.join("");
        //result = result.replace(/\s+/g, '');
        return result;
    }
}

const translateSingleCharacterToEnglish = (letter) => {
    for (let i = 0; i<dictionary.length; i++) {
        if (dictionary[i][0] == letter) {
            return dictionary[i][1]
        }
        else if (letter == " ") {
            return "/";
        }       
    }
    return "#";
}

const translateSingleMorseToEnglish = (letter) => {    
    for (let i = 0; i<dictionary.length; i++) {
        if (dictionary[i][1] == letter){
            return dictionary[i][0];
        }
    }
    if (letter != ""){
        return '#';
    } 
}

document.getElementById('form__translate-btn').addEventListener('click', () => {
    const text = document.getElementById('form__translate-input');
    const output = document.getElementById('output__text');
    const translateTo = document.getElementById('form__translate--toEnglish');

    if (translateTo.checked){
        const outputText = translate(text.value,1);
        text.value = outputText;
    }
    else {
        const outputText = translate(text.value,0);
        text.value = outputText
    }    
})