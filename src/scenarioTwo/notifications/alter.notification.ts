import { Notifier } from "./notification.abstract.js";

export class Alert extends Notifier {
  styling(): string {
    return "[ALERT] - ";
  }
}
