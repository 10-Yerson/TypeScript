class Rombo {
    private diagonalMayor: number;
    private diagonalMenor: number;

    constructor(diagonalMayor: number, diagonalMenor: number) {
        this.diagonalMayor = diagonalMayor;
        this.diagonalMenor = diagonalMenor;
    }

    public getDiagonalMayor(): number {
        return this.diagonalMayor;
    }

    public setDiagonalMayor(diagonalMayor: number): void {
        this.diagonalMayor = diagonalMayor;
    }

    public getDiagonalMenor(): number {
        return this.diagonalMenor;
    }

    public setDiagonalMenor(diagonalMenor: number): void {
        this.diagonalMenor = diagonalMenor;
    }

    public calcularArea(): number {
        return (this.diagonalMayor * this.diagonalMenor) / 2;
    }

    public calcularPerimetro(): number {
        return 4 * Math.sqrt((Math.pow(this.diagonalMayor / 2, 2)) + (Math.pow(this.diagonalMenor / 2, 2)));
    }
}
class PruebasRombo {
    public static main(): void {
        const rombo: Rombo = new Rombo(8, 6);
        const area: number = rombo.calcularArea();
        const perimetro: number = rombo.calcularPerimetro();

        console.log("Área del rombo:", area);
        console.log("Perímetro del rombo:", perimetro);
    }
}

PruebasRombo.main();


