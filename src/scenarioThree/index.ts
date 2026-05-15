interface IConversation {
  message: string;
  timeStamp: Date;
}

class ChatRoom {
  persons: Person[] = [];

  sendMessage(sender: Person, message: string) {
    for (const person of this.persons) {
      if (person !== sender) {
        person.receive({ message, timeStamp: new Date() });
      }
    }
  }
}

class Person {
  chatRoom: ChatRoom | null = null;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  joinChat(chatRoom: ChatRoom) {
    if (chatRoom !== null) {
      console.log("Already joined a chat");
    }
    this.chatRoom = chatRoom;
    this.chatRoom.persons.push(this);
    console.log(`${this.name} Joined the chat`);
  }

  notify(message: string) {
    if (this.chatRoom) {
      this.chatRoom.sendMessage(this, message);
    }
    console.log(`${this.name} has not joined to any chat`);
  }

  receive(message: IConversation) {
    console.log(`${this.name} recivio: `, message);
  }
}

export function scenarioThree() {
  const chatRoom = new ChatRoom();
  const pedrito = new Person("Pedrito");
  const maria = new Person("Maria");
  const alvaro = new Person("Alvaro");

  pedrito.joinChat(chatRoom);
  maria.joinChat(chatRoom);
  alvaro.joinChat(chatRoom);

  pedrito.notify("hola");
  maria.notify("Puta madre");
}
