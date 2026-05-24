import { ChatRoom } from "./src/mediator/ChatRoom";
import { RegularUser } from "./src/user/RegularUser";
import { AdminUser } from "./src/user/AdminUser";

const chatRoom = new ChatRoom();

const luis = new RegularUser("Luis", chatRoom);
const maria = new RegularUser("Maria", chatRoom);
const sebastian = new AdminUser("Sebastian", chatRoom);

console.log('--------- Joining chat --------');
chatRoom.addUser(luis);
chatRoom.addUser(maria);
chatRoom.addUser(sebastian);

console.log('--------- Luis sends a message --------');
luis.send("Hola a todos!");

console.log('--------- Maria sends a message --------');
maria.send("Hey que tal!");

console.log('--------- Admin Sebastian sends a message --------');
sebastian.send("Bienvenidos al grupo");

console.log('--------- Admin kicks a user --------');
sebastian.kickUser(luis, chatRoom);
