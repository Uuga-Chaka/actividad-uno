import { ChatRoom } from "./src/mediator/ChatRoom";
import { RegularUser } from "./src/user/RegularUser";
import { AdminUser } from "./src/user/AdminUser";

export function scenarioThree() {
  const chatRoom = new ChatRoom();

  const luis = new RegularUser("Luis", chatRoom);
  const maria = new RegularUser("Maria", chatRoom);
  const sebastian = new AdminUser("Sebastian", chatRoom);

  chatRoom.addUser(luis);
  chatRoom.addUser(maria);
  chatRoom.addUser(sebastian);

  luis.send("Hola a todos!");
  maria.send("Hey que tal!");
  sebastian.send("Bienvenidos al grupo");
}
