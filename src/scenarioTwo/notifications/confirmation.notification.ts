import { Notifier } from "./notification.abstract.js";

export class Confirmation extends Notifier {
  styling(): string {
    return "[CONFIRMATION] - ";
  }
}
