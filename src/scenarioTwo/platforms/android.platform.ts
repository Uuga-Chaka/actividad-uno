import { androidNotifiable } from "../mockFramework.js";
import { Platform } from "./platform.abstract.js";

export class AndroidPlatform extends Platform {
  logicToSendNotification(message: string): void {
    androidNotifiable(`[ANDROID]-${message}`);
  }
}
