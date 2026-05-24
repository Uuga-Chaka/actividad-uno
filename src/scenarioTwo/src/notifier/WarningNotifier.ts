import { Notifier } from "./Notifier";

export class WarningNotifier extends Notifier {
  show(): void {
    console.log("\n===== [WARNING] mostrando notificación =====")
    this.renderer.renderTitle(this.title);
    this.renderer.renderMessage(this.message);
    this.renderer.applyStyle("warning")
    console.log("============================================\n")
  }
}
