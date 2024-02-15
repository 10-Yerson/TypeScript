
class Rectangulo {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    getBase(): number {
        return this.base;
    }

    setBase(base: number): void {
        this.base = base;
    }

    getAltura(): number {
        return this.altura;
    }

    setAltura(altura: number): void {
        this.altura = altura;
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularPerimetro(): number {
        return 2 * (this.base + this.altura);
    }
}


let rectangulo = new Rectangulo(5, 10);

console.log("Base:", rectangulo.getBase()); 
console.log("Altura:", rectangulo.getAltura());

console.log("Área:", rectangulo.calcularArea()); 
console.log("Perímetro:", rectangulo.calcularPerimetro()); 

