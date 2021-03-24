import { all } from "redux-saga/effects";
import * as alpaca from "../services/alpaca/sagas";
export function* sagas() {
    yield all([...alpaca.sagas()]);
}
// const sagaManager = {
//     startSagas(sagaMiddleware: { run: (arg0: any) => void }) {
//         sagaMiddleware.run(sagas);
//     }
// }
// export default sagaManager;
