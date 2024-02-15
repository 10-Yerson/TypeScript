class Trapecio {
    baseMayor: number;
    baseMenor: number;
    altura: number;
    lado1: number;
    lado2: number;

    constructor(baseMayor: number, baseMenor: number, altura: number, lado1: number, lado2: number) {
        this.baseMayor = baseMayor;
        this.baseMenor = baseMenor;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    calcularArea(){
        return ((this.baseMayor + this.baseMenor) * this.altura) / 2;
    }

    calcularPerimetro(){
        return this.baseMayor + this.baseMenor + this.lado1 + this.lado2;
    }
}


const miTrapecio = new Trapecio(6, 4, 5, 3, 3);
console.log("Área del trapecio:", miTrapecio.calcularArea());
console.log("Perímetro del trapecio:", miTrapecio.calcularPerimetro());
