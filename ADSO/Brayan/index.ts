class Circulo {
    private _radio: number;

    constructor(radio: number) {
        this._radio = radio;
    }

    get radio(): number {
        return this._radio;
    }

    set radio(radio: number) {
        this._radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}


const circulo = new Circulo(5);
console.log("Radio:", circulo.radio);
console.log("Área:", circulo.calcularArea());
console.log("Perímetro:", circulo.calcularPerimetro());
class Cuadrado {
    lado: number;

    
    constructor(lado: number) {
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

   
    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

const miCuadrado = new Cuadrado(5); 
console.log('Área:', miCuadrado.calcularArea()); 
console.log('Perímetro:', miCuadrado.calcularPerimetro()); 
