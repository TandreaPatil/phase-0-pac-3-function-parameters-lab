function introduction(name = "Aki") {
    return (`Hi, my name is ${name}.`);
  }
function introductionWithLanguageOptional (name = "Aki", language = "JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
function introductionWithLanguage (name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}