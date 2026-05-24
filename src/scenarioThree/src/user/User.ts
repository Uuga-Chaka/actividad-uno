import type { ChatMediator } from "../mediator/ChatMediator";

export abstract class User {
  protected mediator: ChatMediator;
  name: string;

  constructor(name: string, mediator: ChatMediator) {
    this.name = name;
    this.mediator = mediator;
  }

  abstract send(message: string): void;
  abstract receive(sender: string, message: string): void;
}
