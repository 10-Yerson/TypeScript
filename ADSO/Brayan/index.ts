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