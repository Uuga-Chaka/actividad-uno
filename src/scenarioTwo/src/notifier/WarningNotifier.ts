import { Notifier } from "./Notifier";

export class WarningNotifier extends Notifier {
  show(): void {
    this.renderer.renderTitle(this.title);
    this.renderer.renderMessage(this.message);
    this.renderer.applyStyle("warning")
  }
}
