import type { NotificationRenderer } from "./NotificationRenderer.ts";

export class MobileRenderer implements NotificationRenderer {
  platform: string = 'mobile';
  renderTitle(title: string): void {
    console.log(`<Text>${title}</Text>`);
  }
  renderMessage(message: string): void {
    console.log(`<Text>${message}</Text>`);
  }
  applyStyle(style: string): void {
    console.log(`creating styles: ${style}.title and ${style}.message`);
  }
}
