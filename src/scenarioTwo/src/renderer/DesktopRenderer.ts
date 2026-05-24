import type { NotificationRenderer } from "./NotificationRenderer.ts";

export class DesktopRenderer implements NotificationRenderer {
  platform: string = "DESKTOP";
  renderTitle(title: string): void {
    console.log(`[${this.platform}] ${title} `);
  }
  renderMessage(message: string): void {
    console.log(`[${this.platform}] ${message} `);
  }
  applyStyle(style: string): void {
    console.log(
      `[${this.platform}] creating styles: ${this.platform}.${style}.title and ${this.platform}.${style}.message`,
    );
  }
}
