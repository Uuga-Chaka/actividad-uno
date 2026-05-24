import type { NotificationRenderer } from "./NotificationRenderer.ts";

export class MobileRenderer implements NotificationRenderer {
  platform: string = "MOBILE";
  renderTitle(title: string): void {
    console.log(`[${this.platform}] ${title}`);
  }
  renderMessage(message: string): void {
    console.log(`[${this.platform}] ${message}`);
  }
  applyStyle(style: string): void {
    console.log(
      `[${this.platform}] creating styles: ${style}.title and ${style}.message`,
    );
  }
}
