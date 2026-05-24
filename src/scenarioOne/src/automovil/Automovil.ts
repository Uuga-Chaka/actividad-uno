import { AutomovilConfig } from "./AutomovilConfig";

export class Automovil {
  readonly motor: string;
  readonly color: string;
  readonly llantas: string;
  readonly sistemaAudio: string;
  readonly interiores: string


  constructor(config: AutomovilConfig) {
    this.motor = config.motor;
    this.color = config.color;
    this.llantas = config.llantas;
    this.sistemaAudio = config.sistemaAudio;
    this.interiores = config.interiores

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
