class TrianguloRectangulo {
    base: number;
    altura: number;

    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }

    getBase() {
        return this.base;
    }

    setBase(base: number) {
        this.base = base;
    }

    getAltura() {
        return this.altura;
    }

    setAltura(altura: number) {
        this.altura = altura;
    }

    calcularArea() {
        let area = (this.altura * this.base) / 2;
        console.log("area: " + area);
        return area;
    }

    calcularPerimetro() {
        let perimetro = this.base + this.altura + Math.sqrt(this.base ** 2 + this.altura ** 2);
        console.log("perimetro: " + perimetro);
        return perimetro;
    }

    calcularHipotenusa() {
        let hipotenusa = Math.sqrt(this.base ** 2 + this.altura ** 2);
        return hipotenusa;
    }

    esRectangulo() {
        return this.base * this.altura === this.calcularArea() * 2;
    }
}

let triRe = new TrianguloRectangulo(6, 10);

triRe.calcularArea();
triRe.calcularPerimetro();
console.log("hipotenusa: ", triRe.calcularHipotenusa());

if (triRe.esRectangulo()) {
    console.log("El triángulo es rectángulo.");
} else {
    console.log("El triángulo no es rectángulo.");
}
