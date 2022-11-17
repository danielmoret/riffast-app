export class Talonario {
  constructor(num, premio, precio, plataformaSorteo, fecha) {
    this.numeros = this.numberBuilder(num);
    this.premio = premio;
    this.precio = precio;
    this.plataformaSorteo = plataformaSorteo;
    this.fecha = fecha;
  }

  numberBuilder(num) {
    let numbers = [];

    for (let i = 0; i < num; i++) {
      numbers.push({
        value: i.toString().padStart(2, "0"),
        status: "disponible",
      });
    }

    return numbers;
  }
}
