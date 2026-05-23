import { Notifier } from "./Notifier";

export class ConfirmationNotifier extends Notifier {
  show(): void {
    this.renderer.renderTitle(this.title);
    this.renderer.renderMessage(this.message);
    this.renderer.applyStyle("confirmation")
  }
  onConfirm(): void {
    console.log('User confirmed!')
  }
}
