import { Alert } from "./notifications/alter.notification.js";
import { Confirmation } from "./notifications/confirmation.notification.js";
import { Message } from "./notifications/message.notification.js";
import { Warning } from "./notifications/warning.notification.js";
import { AndroidPlatform } from "./platforms/android.platform.js";
import { WebPlatform } from "./platforms/web.platform.js";

/**
 * Patron de diseño usado: BRIDGE and COMPOSITION
 */

export function scenarioTwo() {
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

  warning.setPlatform(web);
  warning.send("Sent to web!");
}
