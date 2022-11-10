import { writable } from "svelte/store";
import { browser } from "$app/environment";
import type { Writable } from "svelte/store";

export const useStorage = (key: string, defaultColumn: Column[]) => {
  const defaultValue = defaultColumn;
  const data = browser
    ? JSON.parse(localStorage.getItem(key) || "") ?? defaultValue
    : defaultValue;

  const store: Writable<Column[]> = writable<Column[]>(data, () => {
    console.log("got a subscriber");
    const unsubscribe = store.subscribe((value) => {
      if (browser) {
        try {
          localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.log("Error in local storage", error);
        }
      }
    });
    console.log("no more subscribers");
    return unsubscribe;
  });
  return store;
};
