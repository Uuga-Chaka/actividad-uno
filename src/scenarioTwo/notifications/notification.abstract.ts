import type { Platform } from "../platforms/platform.abstract.js";

export abstract class Notifier {
  constructor(protected platform: Platform) {}
  abstract styling(): string;

  send(message: string) {
    this.platform.logicToSendNotification(this.styling() + message);
  }

  setPlatform(platform: Platform) {
    this.platform = platform;
  }
}
