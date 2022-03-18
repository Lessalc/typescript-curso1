export class Negociacao{
    //Usamos tralha para deixar nossos atributos privados
    #data;
    #quantidade;
    #valor;

    constructor(data, quantidade, valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
        
    }
}