import type { NotificationRenderer } from "./NotificationRenderer.ts";

export class WebRenderer implements NotificationRenderer {
  platform: string = 'WEB';
  renderTitle(title: string): void {
    console.log(`[${this.platform}] ${title}`);
  }
  renderMessage(message: string): void {
    console.log(`[${this.platform}] ${message}`);
  }
  applyStyle(style: string): void {
    console.log(`[${this.platform}] creating styles: --notification-${style}`);
  }
}
