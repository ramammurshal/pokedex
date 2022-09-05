import Vue from "vue";

const firstUpper = (text) => {
  return text.chartAt(0).toUpperCase() + text.slice(1);
};

Vue.filter("firstupper", firstUpper);
