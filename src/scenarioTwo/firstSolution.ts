import { androidNotifiable, webNotifiable } from "./mockFramework.js";
import type { NotificationStyle } from "./styles.js";

interface Notifiable {
  target: string;
  send: (value: string) => void;
}

export class WebNotification implements Notifiable {
  target: string = "web";
  style: NotificationStyle;

  constructor({ style }: { style: NotificationStyle }) {
    this.style = style;
  }

  send(value: string) {
    webNotifiable({
      message: value,
      target: this.target,
      style: this.style.style,
    });
  }
}

export class MobileNotification implements Notifiable {
  target: string = "Mobile";
  style: NotificationStyle;

  constructor({ style }: { style: NotificationStyle }) {
    this.style = style;
  }

  send(value: string) {
    androidNotifiable({
      message: value,
      target: this.target,
      style: this.style.style,
    });
  }
}

export function exampleOne() {
//   var alertStyle = new AlertStyle();
//   var web = new WebNotification({ style: alertStyle });
//   web.send("This is a web message");

//   var warningStyle = new WarningStyle();
//   var mobile = new MobileNotification({ style: warningStyle });
//   mobile.send("This is a mobile notification");
}
