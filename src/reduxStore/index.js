import { createStore, combineReducers, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import logger from "redux-logger"
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import categoryReducer from "./category"

const rootReducer = combineReducers({
    tasks: categoryReducer,
})
const persistConfig = {
    key: 'root',
    storage, //storage olarak local storage kullansin
    // whitelist: ["counter"], //local storagea sadece bunlari ekle w-list b-list ise sadece bunu ekleme
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(logger));

// store.subscribe(() => console.log("STORE:::", store.getState()));

export const persistor = persistStore(store)

export default store;


