import { setupWorker } from "msw";
import { handlers } from "./handlers";
import { evaluateHandlers } from "./evaluateHandlers";
import { chaptersHandlers } from "./chaptersHandlers";
import { sentencesHandlers } from "./sentencesHandlers";
import { accountsHandlers } from "./accountsHandler";
import { passwordsHandlers } from "./passwordsHandler";

export const worker = setupWorker(
  ...handlers,
  ...chaptersHandlers,
  ...sentencesHandlers,
  ...evaluateHandlers,
  ...accountsHandlers,
  ...passwordsHandlers
);
