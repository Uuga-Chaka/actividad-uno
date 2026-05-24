import { Automovil } from "../automovil/Automovil";

export interface IArmarauto {
  setMotor(tipo: string): IArmarauto;
  setColor(color: string): IArmarauto;
  setLlantas(tipo: string): IArmarauto;
  setSistemaAudio(tipo: string): IArmarauto;
  setInteriores(tipo: string): IArmarauto;

  build(): Automovil;
}
