import type { User } from "../user/User";

export interface ChatMediator {
  sendMessage(sender: User, message: string): void;
  addUser(user: User): void;
  kickUser(admin: User, userToKick: User): void;
}
