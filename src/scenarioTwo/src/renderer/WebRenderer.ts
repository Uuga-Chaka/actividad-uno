import type { NotificationRenderer } from "./NotificationRenderer.ts";

export class WebRenderer implements NotificationRenderer {
  platform: string = 'web';
  renderTitle(title: string): void {
    console.log(`<h1>${title}</h1>`);
  }
  renderMessage(message: string): void {
    console.log(`<p>${message}</p>`);
  }
  applyStyle(style: string): void {
    console.log(`creating styles: --notification-${style}`);
  }
}
