// Changing "prototype"

function Rabbit(){
    Rabbit.prototype = {
        eats: true
    }
}

let rabbit = new Rabbit();

console.log(rabbit.eats);

// 1.
