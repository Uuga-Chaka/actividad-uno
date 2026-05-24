import { User } from "./User";

export class RegularUser extends User {
  send(message: string) {
    console.log(`${this.name} envia: ${message}`);
    this.mediator.sendMessage(this, message);
  }

  receive(sender: string, message: string) {
    console.log(`${this.name} recibio de ${sender}: ${message}`);
  }
}
