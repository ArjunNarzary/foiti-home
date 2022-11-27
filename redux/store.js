import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

//APIS
import { serviceApi } from "./services/servicesApi";

const store = configureStore({
    reducer: {
        [serviceApi.reducerPath]: serviceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(serviceApi.middleware),
});

setupListeners(store.dispatch);

export default store;
