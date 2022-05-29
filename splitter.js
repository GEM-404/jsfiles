
const string = "How is $everything g$oing";

const breakpoint = /\$e|\$o/;

const splitted = string.split(breakpoint);

console.log(splitted);
