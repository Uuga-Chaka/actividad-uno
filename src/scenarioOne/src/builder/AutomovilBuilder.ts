import { IArmarauto } from "./IArmarAuto";
import { Automovil } from "../automovil/Automovil";

export class AutomovilBuilder implements IArmarauto {
  private motor: string = "Estándar 1.6L";
  private color: string = "Blanco perla";
  private llantas: string = "Rin 15 estándar";
  private sistemaAudio: string = "Radio AM/FM";
  private interiores: string = "Tela gris";

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
      motor: this.motor,
      color: this.color,
      llantas: this.llantas,
      sistemaAudio: this.sistemaAudio,
      interiores: this.interiores,
    });
  }
}
