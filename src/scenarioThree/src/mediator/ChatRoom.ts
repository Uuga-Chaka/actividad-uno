import type { ChatMediator } from "./ChatMediator";
import type { User } from "../user/User";
import { AdminUser } from "../user/AdminUser";

export class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
    console.log(`${user.name} se unio al chat`);
    console.log(`Hay ${this.users.length} usuario(s) en el chat`);
  }

  sendMessage(sender: User, message: string) {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(sender.name, message);
      }
    }
  }
  
  kickUser(admin: User, userToKick: User): void {
    if (admin instanceof AdminUser) {
      this.users = this.users.filter((u) => u !== userToKick);
      console.log(`[ADMIN] ${admin.name} expulsó a ${userToKick.name}`);
      console.log(`Hay ${this.users.length} usuario(s) en el chat`);
    }
  }
}
