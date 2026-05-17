import { Notifier } from "./notification.abstract.js";

export class Warning extends Notifier {
  styling(): string {
    return "[WARNING] - ";
  }
}
