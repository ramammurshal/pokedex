import Vue from "vue";

function firstUpper(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

Vue.filter("firstUpper", firstUpper);
