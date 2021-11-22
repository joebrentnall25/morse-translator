import {data} from './assets/data/data.js';

const dictionary = data.dictionary;

const translate = (word, option) => {
    const translatedArr = [];
    let result = '';
    if (option == 0){
        const charArr = word.split("");
        for (let i = 0; i<charArr.length; i++) {
            translatedArr.push(translateSingleCharacterToEnglish(charArr[i]));
        }
        result = translatedArr.join(" ")
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
        result = translatedArr.join("");
        return result;
    }
    return result;
}

const translateSingleCharacterToEnglish = (letter) => {
    for (let i = 0; i<dictionary.length; i++) {
        if (dictionary[i][0] == letter) {
            return dictionary[i][1]
        }
        if (letter == " ") {
            return "/";
        }
    }
}

const translateSingleMorseToEnglish = (letter) => {
    
    for (let i = 0; i<dictionary.length; i++) {
        if (dictionary[i][1] == letter){
            return dictionary[i][0];
        }
    }
}

translate('.... . .-.. .-.. ---/.-- --- .-. .-.. -..', 1);