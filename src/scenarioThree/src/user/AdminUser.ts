import type { ChatRoom } from "../mediator/ChatRoom";
import { User } from "./User";

export class AdminUser extends User {
  send(message: string) {
    console.log(`[ADMIN] ${this.name} envia: ${message}`);
    this.mediator.sendMessage(this, `[ADMIN] ${message}`);
  }

  receive(sender: string, message: string) {
    console.log(`[ADMIN] ${this.name} recibio de ${sender}: ${message}`);
  }

  kickUser(user: User, chatRoom: ChatRoom) {
    console.log(`[ADMIN] ${this.name} ha expulsado a ${user.name} del chat`);
  }
}
