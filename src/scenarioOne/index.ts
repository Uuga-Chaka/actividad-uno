
interface AutomovilConfig {
  motor: string;
  color: string;
  llantas: string;
  sistemaAudio: string;
  interiores: string;
 }

class Automovil {
  readonly motor: string;
  readonly color: string;
  readonly llantas: string;
  readonly sistemaAudio: string;
  readonly interiores: string


  constructor(config: AutomovilConfig) {
    this.motor       = config.motor;
    this.color       = config.color;
    this.llantas     = config.llantas;
    this.sistemaAudio = config.sistemaAudio;
    this.interiores  = config.interiores

  }

  describir(): string {
    return [
      `Motor        : ${this.motor}`,
      `Color        : ${this.color}`,
      `Llantas      : ${this.llantas}`,
      `Sistema audio: ${this.sistemaAudio}`,
      `Interiores   : ${this.interiores}`,
    ].join("\n");
  }
}



interface Iarmarauto{
  setMotor(tipo: string): Iarmarauto;
  setColor(color: string): Iarmarauto;
  setLlantas(tipo: string): Iarmarauto;
  setSistemaAudio(tipo: string): Iarmarauto;
  setInteriores(tipo: string): Iarmarauto;

  build(): Automovil;
}

 class AutomovilBuilder implements Iarmarauto {
  private motor: string        = "Estándar 1.6L";
  private color: string        = "Blanco perla";
  private llantas: string      = "Rin 15 estándar";
  private sistemaAudio: string = "Radio AM/FM";
  private interiores: string   = "Tela gris";


  setMotor(tipo: string): this {
    this.motor = tipo;
    return this;
  }

  setColor(color: string): this {
    this.color = color;
    return this;
  }

  setLlantas(tipo: string): this {
    this.llantas = tipo;
    return this;
  }

  setSistemaAudio(tipo: string): this {
    this.sistemaAudio = tipo;
    return this;
  }

  setInteriores(tipo: string): this {
    this.interiores = tipo;
    return this;
  }




  build(): Automovil {
    return new Automovil({
      motor:        this.motor,
      color:        this.color,
      llantas:      this.llantas,
      sistemaAudio: this.sistemaAudio,
      interiores:   this.interiores,
         });
  }
}



class Vendedor {
  
  construirAutoBasico(builder: Iarmarauto): Automovil {
    return builder
      .setMotor("1.4L Turbo")
      .setColor("Blanco")
      .setLlantas("Rin 15")
      .setSistemaAudio("Radio AM/FM")
      .setInteriores("Tela ")
      .build();
  }


  construirAutoLujo(builder: Iarmarauto): Automovil {
    return builder
      .setMotor("3.5L V6 Biturbo")
      .setColor("Negro")
      .setLlantas("Rin 20 ")
      .setSistemaAudio("Bose")
      .setInteriores("Cuero")
      .build();
  }


  construirSuvFamiliar(builder: Iarmarauto): Automovil {
    return builder
      .setMotor("2.5L Hybrid")
      .setColor("Gris")
      .setLlantas("Rin 18 aluminio")
      .setSistemaAudio("Sony")
      .setInteriores("Tela")
      .build();
  }
}


function main(): void {
  const vendedor = new Vendedor();



  console.log("=== Auto básico (vía Vendedor) ===");
  const autoBasico = vendedor.construirAutoBasico(new AutomovilBuilder());
  console.log(autoBasico.describir());

  console.log("\n=== Auto de lujo (vía Vendedor) ===");
  const autoLujo = vendedor.construirAutoLujo(new AutomovilBuilder());
  console.log(autoLujo.describir());

  console.log("\n=== SUV familiar (vía Vendedor) ===");
  const suv = vendedor.construirSuvFamiliar(new AutomovilBuilder());
  console.log(suv.describir());



  console.log("\n=== Auto personalizado (cliente) ===");
  const autoPersonalizado = new AutomovilBuilder()
    .setMotor("2.0L Turbo EcoBoost")
    .setColor("Azul")
    .setLlantas("Rin 17")
    .setSistemaAudio("Bose")
    .setInteriores("Cuero negro")
    .build();

  console.log(autoPersonalizado.describir());

}

main();