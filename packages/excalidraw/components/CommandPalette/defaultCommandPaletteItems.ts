import { actionToggleTheme, actionToggleDarkModeFilter } from "../../actions";

import type { CommandPaletteItem } from "./types";

export const toggleTheme: CommandPaletteItem = {
  ...actionToggleTheme,
  category: "App",
  label: "Toggle theme",
  perform: ({ actionManager }) => {
    actionManager.executeAction(actionToggleTheme, "commandPalette");
  },
};

export const toggleDarkModeFilter: CommandPaletteItem = {
  ...actionToggleDarkModeFilter,
  category: "App",
  label: "Toggle dark mode color filter",
  perform: ({ actionManager }) => {
    actionManager.executeAction(actionToggleDarkModeFilter, "commandPalette");
  },
};
