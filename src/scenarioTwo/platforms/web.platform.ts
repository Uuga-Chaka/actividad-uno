import { webNotifiable } from "../mockFramework.js";
import { Platform } from "./platform.abstract.js";

export class WebPlatform extends Platform {
  logicToSendNotification(message: string): void {
    webNotifiable(`[WEB]-${message}`);
  }
}
