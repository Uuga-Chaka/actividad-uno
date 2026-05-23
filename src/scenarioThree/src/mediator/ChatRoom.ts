import type { ChatMediator } from "./ChatMediator";
import type { User } from "../user/User";

export class ChatRoom implements ChatMediator {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
    console.log(`${user.name} se unio al chat`);
  }

  sendMessage(sender: User, message: string) {
    for (const user of this.users) {
      if (user !== sender) {
        user.receive(sender.name, message);
      }
    }
  }
}
