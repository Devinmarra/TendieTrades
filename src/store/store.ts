import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { State } from "./reducers";
import { sagas } from "./sagas";

const devMode = process.env.NODE_ENV === "development";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

let store: ReturnType<typeof createStore>;
export const getStoreInstance = (initialState?: State) => store ?? (store = createStore(initialState));

export const createStore = (initialState?: State) => {
    const reducer = require("./reducers").default;
    const newStore = configureStore({
        reducer,
        devTools: devMode,
        middleware,
        preloadedState: initialState,
    });
    sagaMiddleware.run(sagas);
    return newStore;
};

//
// let store: ReturnType<typeof createStore>;
// export const getStoreInstance = (initialState?: State) => store ?? (store = createStore(initialState));
// export const createStore = (initialState?: State) => {
//   let sagaMiddleware = createSagaMiddleware();
//   const middleware = [];
//   const enhancers: any[] = [];
//   middleware.push(sagaMiddleware);
//   const reducer = require("./reducers").default;
//   const newStore = configureStore({
//     middleware: [
//       ...getDefaultMiddleware({
//         immutableCheck: false,

//       })
//     ],
//     preloadedState: initialState,
//     reducer,
//     enhancers,
//   });
//   sagaManager.startSagas(sagaMiddleware);
//   return { store: newStore };

// };
