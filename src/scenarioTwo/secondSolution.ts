import { androidNotifiable, webNotifiable } from "./mockFramework.js";
import type { NotificationStyle } from "./styles.js";

/**
 * What is my current idea?
 * create the notification and after creating the notification
 * in another class validate what type of notification should I send
 * and where
 *
 * I should create the Notification class and then I should wrap it with
 * a MobileNotification or WebNotification class followed by
 * a StyleWrapper
 */
interface Notifiable {
  create: (value: string) => void;
  send: (value: string) => void;
}

export class Notifications implements Notifiable {
  send(value: string) {
    webNotifiable(value);
  }
}

export class NotificationDecorator implements Notifiable {
  protected notification: Notifiable;

  constructor(notification: Notifiable) {
    this.notification = notification;
  }

  public send(value: string) {
    this.notification.send(value);
  }
}

export class WebNotification extends Notifications {}

export function exampleOne() {}

abstract class Notifier {
  abstract send(message: string): void;
}

class BaseDecorator implements Notifier {
  wrappee: Notifier;

  constructor(notifier: Notifier) {
    this.wrappee = notifier;
  }

  send(message: string): void {
    throw new Error("Method not implemented.");
  }
}

class SMSDecorate extends BaseDecorator {
  send(message: string): void {
    this.wrappee.send(message);
  }
}
