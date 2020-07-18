
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domainHacks = ['.com', '.net', '.us', '.io'];

function generator (parts) {
    
    var string = "";

    for (const i in parts) {
        var rand = Math.floor( Math.random() * parts[i].length );
        var space=(i==parts.length-1)?"":"";
        string += parts[i][rand]+space;
    }

    return string;
}

console.log(generator([pronoun, adj, noun, domainHacks]));

// console.log();