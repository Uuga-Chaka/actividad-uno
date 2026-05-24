import { Notifier } from "./Notifier";

export class AlertNotifier extends Notifier {
  show(): void {
    console.log("\n===== [ALERT] mostrando notificación =====");
    this.renderer.applyStyle("alert");
    this.renderer.renderTitle(this.title);
    this.renderer.renderMessage(this.message);
    console.log("==========================================\n");
  }
}
