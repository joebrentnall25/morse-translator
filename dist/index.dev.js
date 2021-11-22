"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translate = void 0;

var _data = require("./assets/data/data.js");

var dictionary = _data.data.dictionary;

var translate = function translate(word, option) {
  var translatedArr = [];

  if (option == 0) {
    var charArr = word.split("");

    for (var i = 0; i < charArr.length; i++) {
      translatedArr.push(translateSingleCharacterToEnglish(charArr[i]));
    }

    var result = translatedArr.join(" ");
    return result;
  } else if (option == 1) {
    var _charArr = word.split("/");

    for (var _i = 0; _i < _charArr.length; _i++) {
      var letter = _charArr[_i].split(' ');

      for (var _i2 = 0; _i2 < letter.length; _i2++) {
        translatedArr.push(translateSingleMorseToEnglish(letter[_i2]));
      }

      translatedArr.push(" ");
    }

    translatedArr.pop();

    var _result = translatedArr.join(""); //result = result.replace(/\s+/g, '');


    return _result;
  }
};

exports.translate = translate;

var translateSingleCharacterToEnglish = function translateSingleCharacterToEnglish(letter) {
  for (var i = 0; i < dictionary.length; i++) {
    if (dictionary[i][0] == letter) {
      return dictionary[i][1];
    } else if (letter == " ") {
      return "/";
    }
  }

  return "#";
};

var translateSingleMorseToEnglish = function translateSingleMorseToEnglish(letter) {
  for (var i = 0; i < dictionary.length; i++) {
    if (dictionary[i][1] == letter) {
      return dictionary[i][0];
    }
  }

  if (letter != "") {
    return '#';
  }
};

document.getElementById('form__translate-btn').addEventListener('click', function () {
  var text = document.getElementById('form__translate-input');
  var output = document.getElementById('output__text');
  var translateTo = document.getElementById('form__translate--toEnglish');

  if (translateTo.checked) {
    var outputText = translate(text.value, 1);
    text.value = outputText;
  } else {
    var textLowerCase = text.value.toLowerCase();

    var _outputText = translate(textLowerCase, 0);

    text.value = _outputText;
  }
});