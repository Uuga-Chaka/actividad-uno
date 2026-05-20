import { NotificationRenderer } from "../renderer/NotificationRenderer";
import { Notifier } from "./Notifier";

export class AlertNotifier extends Notifier {
  constructor(
    title: string,
    message: string,
    renderer: NotificationRenderer
  ) {
    super(title, message, renderer)
  }

  show(): void {
    this.renderer.renderTitle(this.title);
    this.renderer.renderMessage(this.message);
    this.renderer.applyStyle("alert")
  }
}
