import { ChatRoom } from "./src/mediator/ChatRoom";
import { RegularUser } from "./src/user/RegularUser";
import { AdminUser } from "./src/user/AdminUser";

const chatRoom = new ChatRoom();

const luis = new RegularUser("Luis", chatRoom);
const maria = new RegularUser("Maria", chatRoom);
const sebastian = new AdminUser("Sebastian", chatRoom);

console.log('--------- Uniendo al chat --------');
chatRoom.addUser(luis);
chatRoom.addUser(maria);
chatRoom.addUser(sebastian);

console.log('--------- Luis envia un mensaje --------');
luis.send("Hola a todos!");

console.log('--------- Maria envia un mensaje --------');
maria.send("Hey que tal!");

console.log('--------- Admin Sebastian envia un mensaje --------');
sebastian.send("Bienvenidos al grupo");

console.log('--------- Admin expulsa un usuario --------');
sebastian.kickUser(luis, chatRoom);
