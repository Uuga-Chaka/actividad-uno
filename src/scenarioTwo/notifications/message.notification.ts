import { Notifier } from "./notification.abstract.js";

export class Message extends Notifier {
  styling(): string {
    return "[MESSAGE] - ";
  }
}