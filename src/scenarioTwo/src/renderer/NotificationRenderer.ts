export interface NotificationRenderer {
  platform: string;
  renderTitle(title: string): void;
  renderMessage(message: string): void;
  applyStyle(style: string): void;
}
