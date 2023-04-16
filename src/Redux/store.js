import { configureStore } from "@reduxjs/toolkit";
import seatRedux from "./seatRedux";

const store = configureStore({
  reducer: {
    seat: seatRedux,
  },
});
store.subscribe(() => {});

export default store;
