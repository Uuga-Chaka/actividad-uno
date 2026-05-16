import { androidNotifiable, webNotifiable } from "./mockFramework.js";

abstract class Platform {
  abstract logicToSendNotification(message: string): void;
}

abstract class Notification {
  private platform: Platform;

  constructor(platform: Platform) {
    this.platform = platform;
  }

  abstract styling(): string;

  send(message: string) {
    if (this.platform === null) return;
    this.platform.logicToSendNotification(this.styling() + message);
  }
}

class Warning extends Notification {
  styling(): string {
    return "[WARNING] - ";
  }
}

class Alert extends Notification {
  styling(): string {
    return "[ALERT] - ";
  }
}

class Message extends Notification {
  styling(): string {
    return "[MESSAGE] - ";
  }
}

class Confirmation extends Notification {
  styling(): string {
    return "[CONFIRMATION] - ";
  }
}

class AndroidPlatform extends Platform {
  logicToSendNotification(message: string): void {
    androidNotifiable(`[ANDROID]-${message}`);
  }
}

class WebPlatform extends Platform {
  logicToSendNotification(message: string): void {
    androidNotifiable(`[WEB]-${message}`);
  }
}

export function exampleOne() {
  // Platform
  var android = new AndroidPlatform();
  var web = new WebPlatform();

  // Notification type
  var warning = new Warning(android);
  var alert = new Alert(android);
  var webConfirmation = new Confirmation(web);
  var webMessage = new Message(web);

  warning.send("The temperature of your phone is way too hot");
  alert.send("Hey you heart rate is getting low, are you ok?");
  webConfirmation.send("Are you sure you want to eat all the food?");
  webMessage.send("Hello!! How are you?");
}
