// Ejemplo de clase en TypeScript
class Animal {
  private nombre: string;
  private edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  public hacerSonido(): void {
    console.log("El animal hace un sonido");
  }

  public mostrarInfo(): void {
    console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
  }
}

// Ejemplo de herencia
class Perro extends Animal {
  private raza: string;

  constructor(nombre: string, edad: number, raza: string) {
    super(nombre, edad);
    this.raza = raza;
  }

  public hacerSonido(): void {
    console.log("Guau guau");
  }

  public mostrarInfo(): void {
    super.mostrarInfo();
    console.log(`Raza: ${this.raza}`);
  }
}

class Gato extends Animal {
  private color: string;

  constructor(nombre: string, edad: number, color: string) {
    super(nombre, edad);
    this.color = color;
  }

  public hacerSonido(): void {
    console.log("Miau miau");
  }

  public mostrarInfo(): void {
    super.mostrarInfo();
    console.log(`Color: ${this.color}`);
  }
}
// Ejemplo de polimorfismo
const perro: Perro = new Perro("Fido", 4, "Labrador");
perro.hacerSonido();
perro.mostrarInfo();

const gato: Gato = new Gato("Mia", 3, "Gris");
gato.hacerSonido();
gato.mostrarInfo();

// Ejemplo de herencia usando el constructor de la clase padre
class Ave extends Animal {
  private tipoAve: string;

  constructor(nombre: string, edad: number, tipoAve: string) {
    super(nombre, edad); // Llama al constructor de la clase padre (Animal)
    this.tipoAve = tipoAve;
  }

  public hacerSonido(): void {
    console.log("Pio pio");
  }

  public mostrarInfo(): void {
    super.mostrarInfo();
    console.log(`Tipo de ave: ${this.tipoAve}`);
  }
}
