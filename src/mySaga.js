import { call, put, takeEvery, takeLatest, select } from 'redux-saga/effects'


const asyncTest = (param1, param2) => console.log(param1, param2) || new Promise((s,r) =>  setTimeout(() => s('async result here. kk') , 3000 )) 

function* fetchUser(action, paramso2) {
   try {
      console.log('SAGA CATCHED ME', action);
      console.log('paramso2', paramso2);
      
      // const t = Promise.all(await )

      // await asyncTest(action, 'this is test p1');
      const state = yield select((state) => state.loginX);
      console.log(state);

      const user = yield call(asyncTest, action, 'this is test p1');



      console.log(user);

      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

export function* mySaga() {
    // yield takeLatest();
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export function* myHomePageSaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}


