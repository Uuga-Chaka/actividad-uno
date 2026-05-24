import { Notifier } from "./Notifier";

export class MessageNotifier extends Notifier {
  show(): void {
    console.log("\n===== [MESSAGE] mostrando notificación =====");
    this.renderer.renderTitle(this.title);
    this.renderer.renderMessage(this.message);
    this.renderer.applyStyle("message");
    console.log("============================================\n");
  }
}
