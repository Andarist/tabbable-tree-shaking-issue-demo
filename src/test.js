import { isFocusable } from "tabbable";

export const thisUsesIsFocusable = (node) => {
  console.log("thisUsesIsFocusable");
  return isFocusable(node);
};

export const thisIsNotRelatedToTabbable = () => {
  console.log("thisIsNotRelatedToTabbable");
};
