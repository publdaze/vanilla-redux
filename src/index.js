import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  return count;
}; // data를 nodify하는 함수

const countStore = createStore(countModifier);

console.log(countStore.getState());
