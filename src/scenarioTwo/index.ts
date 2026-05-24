import { AlertNotifier } from "./src/notifier/AlertNotifier";
import { ConfirmationNotifier } from "./src/notifier/ConfirmationNotifier";
import { WarningNotifier } from "./src/notifier/WarningNotifier";
import { DesktopRenderer } from "./src/renderer/DesktopRenderer";
import { MobileRenderer } from "./src/renderer/MobileRenderer";
import { WebRenderer } from "./src/renderer/WebRenderer";
import { MessageNotifier } from "./src/notifier/MessageNotifier";

const webRenderer = new WebRenderer();
const desktopRenderer = new DesktopRenderer();
const mobileRenderer = new MobileRenderer();

const messageWeb = new MessageNotifier(
  "Message",
  "probando mensajeria 123",
  webRenderer,
);
const alertWeb = new AlertNotifier(
  "Alerta",
  "insolito, sorprendente...",
  webRenderer,
);
const warningMobile = new WarningNotifier(
  "OMG",
  "Cuidado amigo",
  mobileRenderer,
);
const confirmationDesktop = new ConfirmationNotifier(
  "u Sure?",
  "rly?",
  desktopRenderer,
);

alertWeb.show();

alertWeb.setRenderer(desktopRenderer);
alertWeb.show();

warningMobile.show();

warningMobile.setTitle("Nos atacan los monstruos");
warningMobile.setMessage("Huyan con todas sus fuerzas");
warningMobile.show();

confirmationDesktop.show();
confirmationDesktop.onConfirm();

messageWeb.show();
messageWeb.setRenderer(mobileRenderer);
messageWeb.setMessage("Diferente mensaje mismo titulo, diferente plataforma");
messageWeb.show();
