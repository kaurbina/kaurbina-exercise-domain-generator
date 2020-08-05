
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domainHacks = ['.com', '.net', '.us', '.io'];

/* function generator (parts) {
    
    var string = "";

    for (const i in parts) {
        var rand = Math.floor( Math.random() * parts[i].length );
        var space=(i==parts.length-1)?"":"";
        string += parts[i][rand]+space;
    }

    return string;
} */

function generator (parts) {
    console.log(parts);

    for (let i = 0; i < pronoun.length; i++) {
        const element = pronoun[i];
        for (let i = 0; i < adj.length; i++) {
            const element1 = adj[i];
            for (let i = 0; i < noun.length; i++) {
                const element2 = noun[i];
                for (let i = 0; i < domainHacks.length; i++) {
                    const element3 = domainHacks[i];
                    console.log('Domain:', element +''+element1 +''+ element2 +''+ element3);
                }
            }
        }
    }
}

console.log(generator([pronoun, adj, noun, domainHacks]));

// console.log();