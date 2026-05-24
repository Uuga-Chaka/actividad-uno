import { AlertNotifier } from "./src/notifier/AlertNotifier";
import { ConfirmationNotifier } from "./src/notifier/ConfirmationNotifier";
import { WarningNotifier } from "./src/notifier/WarningNotifier";
import { DesktopRenderer } from "./src/renderer/DesktopRenderer";
import { MobileRenderer } from "./src/renderer/MobileRenderer";
import { WebRenderer } from "./src/renderer/WebRenderer";

const webRenderer = new WebRenderer();
const desktopRenderer = new DesktopRenderer();
const mobileRenderer = new MobileRenderer();

const alertWeb = new AlertNotifier('Alerta', 'insolito, sorprendente...', webRenderer);
const warningMobile = new WarningNotifier('OMG', "Cuidado amigo", mobileRenderer)
const confirmationDesktop = new ConfirmationNotifier("u Sure?", "rly?", desktopRenderer)

console.log('--------- alert web --------');
alertWeb.show();

alertWeb.setRenderer(desktopRenderer);
alertWeb.show();

console.log('--------- Warning mobile --------');
warningMobile.show();

warningMobile.setTitle('Nos atacan los monstruos');
warningMobile.setMessage('Huyan con todas sus fuerzas');
warningMobile.show();

console.log('--------- Confirmation Desktop --------');
confirmationDesktop.show();
confirmationDesktop.onConfirm();

