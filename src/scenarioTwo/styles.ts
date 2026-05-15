export interface NotificationStyle {
  style: string;
}

export class AlertStyle implements NotificationStyle {
  style: string = "Alert";
}

export class WarningStyle implements NotificationStyle {
  style: string = "Warning";
}

export class Confirmation implements NotificationStyle {
  style: string = "Confirmation";
}
