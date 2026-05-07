import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => ({
    isDark: true,
  }),
  actions: {
    toggleTheme() {
      if (this.isDark == true) {
        document.documentElement.classList.remove("dark");
        this.isDark = false;
      } else {
        document.documentElement.classList.add("dark");
        this.isDark = true;
      }
    },
  },
});
