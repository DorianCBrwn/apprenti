import { useStorage } from "./persistentStore";
import { v4 as uuidv4 } from "uuid";

/**
 * @typedef Card
 * @type {Array<T>}
 *
 */

/**
 *@typedef Column
 *@type {object}
 *@property {number} id
 *@property {string} title
 *@property {Card[]} cards
 */

/** @param {Column[]} defaultColumns */

const defaultColumns = [
  {
    id: 0,
    title: "Pending",
    cards: [],
  },
  {
    id: 1,
    title: "In Progress",
    cards: [],
  },
  {
    id: 2,
    title: "Complete",
    cards: [],
  },
];

function getNewColumn() {
  return {
    id: uuidv4(),
    title: "Title",
    cards: [],
  };
}

export const store = useStorage("store", defaultColumns);

export function addColumn() {
  store.update((prev) => [getNewColumn(), ...prev]);
}

/**
 *
 * @param {number} id
 */
export function deleteColumn(id) {
  console.log("column deleted");
  store.update((cols) => cols.filter((column) => column.id !== id));
}

/**
 *
 * @param {number} id
 */
export function update(id) {
  store.update((cols) => {
    return cols.map((col) => {
      if (col.id === id) {
        return {
          ...col,
        };
      } else return { ...col };
    });
  });
}
