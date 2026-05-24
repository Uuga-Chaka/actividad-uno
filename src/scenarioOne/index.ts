import { Vendedor } from "./src/vendedor/Vendedor"
import { AutomovilBuilder } from "./src/builder/AutomovilBuilder"

const vendedor = new Vendedor();

console.log("=== Auto básico (vía Vendedor) ===");
const autoBasico = vendedor.construirAutoBasico(new AutomovilBuilder());
console.log(autoBasico.describir());

console.log("=== Auto de lujo (vía Vendedor) ===");
const autoLujo = vendedor.construirAutoLujo(new AutomovilBuilder());
console.log(autoLujo.describir());

console.log("=== SUV familiar (vía Vendedor) ===");
const suv = vendedor.construirSuvFamiliar(new AutomovilBuilder());
console.log(suv.describir());



console.log("=== Auto personalizado (cliente) ===");
const autoPersonalizado = new AutomovilBuilder()
  .setMotor("2.0L Turbo EcoBoost")
  .setColor("Azul")
  .setLlantas("Rin 17")
  .setSistemaAudio("Bose")
  .setInteriores("Cuero negro")
  .build();

console.log(autoPersonalizado.describir());

