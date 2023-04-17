import messages_fr_mr from "./translations/fr_MR.json";
//import messages_fr from "./translations/fr.json";

const DEFAULT_CONFIG = {
  "translations": [{ key: 'fr_mr', messages: messages_fr_mr }],
}

export const LanguageFrCmrCSModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}