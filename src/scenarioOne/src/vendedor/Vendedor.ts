import { IArmarauto } from "../builder/IArmarAuto";
import { Automovil } from "../automovil/Automovil";

export class Vendedor {
  construirAutoBasico(builder: IArmarauto): Automovil {
    return builder
      .setMotor("1.4L Turbo")
      .setColor("Blanco")
      .setLlantas("Rin 15")
      .setSistemaAudio("Radio AM/FM")
      .setInteriores("Tela ")
      .build();
  }

  construirAutoLujo(builder: IArmarauto): Automovil {
    return builder
      .setMotor("3.5L V6 Biturbo")
      .setColor("Negro")
      .setLlantas("Rin 20 ")
      .setSistemaAudio("Bose")
      .setInteriores("Cuero")
      .build();
  }

  construirSuvFamiliar(builder: IArmarauto): Automovil {
    return builder
      .setMotor("2.5L Hybrid")
      .setColor("Gris")
      .setLlantas("Rin 18 aluminio")
      .setSistemaAudio("Sony")
      .setInteriores("Tela")
      .build();
  }
}

