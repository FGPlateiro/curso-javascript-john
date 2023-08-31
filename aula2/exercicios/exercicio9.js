/**
 * Validação de password: Construa um guarda de segurança digital! 
 * Crie um programa que verifica se a password que você escolheu é forte o suficiente para proteger suas coisas.
 * uma password forte o suficiente deve ter ao menos 8 digitos, conter números e letras maíusculas e minúsculas
 */

const letter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "x",
    "z",
    "y",
]

const letterUP = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "X",
    "Z",
    "Y",
]

const number = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
]

const especialChar = [
    "@",
    "#",
    "$",
    "%",
    "_",
    "&",
    "*",
    "ç",
    "/",
    "<",
    ">",
    "¨",
    "^",
    "~",
    "-",
    "+",
    ".",
]

const password = "Plateiro@1234";

let letterQuantity = 0;

let numberQuantity = 0;

let letterUp = 0;

let especialCharQuantity = 0;

const passwordSize = password.length;

     
    if (password.lenght < 8){

        
    }
    
