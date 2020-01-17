// Função para pegar uma string com muitas palavras separadas por vigulas e transformar em um array

module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(string => string.trim());
}

