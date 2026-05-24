import { Notifier } from "./Notifier";

export class ConfirmationNotifier extends Notifier {
  show(): void {
    console.log("\n===== [CONFIRMATION] mostrando notificación =====");
    this.renderer.renderTitle(this.title);
    this.renderer.renderMessage(this.message);
    this.renderer.applyStyle("confirmation");
    console.log("=================================================\n");
  }
  onConfirm(): void {
    console.log("User confirmed!");
  }
}
