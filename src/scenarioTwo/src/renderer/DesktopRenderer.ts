import type { NotificationRenderer } from "./NotificationRenderer.ts";

export class DesktopRenderer implements NotificationRenderer {
  platform: string = 'desktop';
  renderTitle(title: string): void {
    console.log(`<Text>${title}</Text>`);
  }
  renderMessage(message: string): void {
    console.log(`<Text>${message}</Text>`);
  }
  applyStyle(style: string): void {
    console.log(`creating styles: desktop.${style}.title and desktop.${style}.message`);
  }
}

