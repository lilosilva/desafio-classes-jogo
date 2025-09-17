
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    /**
     * 
     */
    atacar() {

        let ataque;

        if (this.tipo === 'mago') {
            ataque = 'magia'
        } else if (this.tipo === 'guerreiro') {
            ataque = 'espada'
        } else if (this.tipo === 'monge') {
            ataque = 'artes marciais'
        } else if (this.tipo === 'ninja') {
            ataque = 'shuriken'
        }
        
        console.log("o " + this.tipo + " atacou com " + ataque);

    }    

}

const heroi1 = new Hero("Artur", "10", "guerreiro");
const heroi2 = new Hero("Gandalf", "253", "mago");
const heroi3 = new Hero("Shaolin", "68", "monge");
const heroi4 = new Hero("Ra's al Ghul", "999", "ninja");


heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();