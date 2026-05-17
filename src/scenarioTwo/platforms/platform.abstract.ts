export abstract class Platform {
  abstract logicToSendNotification(message: string): void;
}
