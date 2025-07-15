import type { Item } from "../types/Item";
import randomIdGenerator from "./randomIdGenerator";

export const createNewItem = (): Item => {
  const itemId = randomIdGenerator();
  const item: Item = {
    id: itemId,
    content: "",
  };
  return item;
};
