import { NotificationRenderer } from "../renderer/NotificationRenderer";

export abstract class Notifier {
  constructor(
    protected title: string,
    protected message: string,
    protected renderer: NotificationRenderer,
  ) {}
  abstract show(): void;
  hide(): void {
    console.log("Hide notification");
  }
  setTitle(newTitle: string) {
    console.log("--- Changing title");
    this.title = newTitle;
  }
  setMessage(newMessage: string) {
    console.log("--- Changing message ---");
    this.message = newMessage;
  }
  setRenderer(newRenderer: NotificationRenderer) {
    console.log(`--- Updating renderer ${this.renderer.platform}`);
    this.renderer = newRenderer;
    console.log(`--- User changed the renderer to: ${newRenderer.platform}`);
  }
}
