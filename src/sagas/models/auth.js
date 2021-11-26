import { call, put, takeEvery } from '@redux-saga/core/effects';
import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, GET_PROFILE, GET_PROFILE_FAIL, GET_PROFILE_SUCCESS } from '../../actions/auth';
import { getProfileApi, loginApi } from '../../api/auth';

function* login ( { payload } ) {
  try {
    let { data } = yield call(loginApi, payload);
    localStorage.setItem('token',data.data.token);
    yield put({ type: LOGIN_SUCCESS , payload: data});
  } catch (error) {
    yield put({ type: LOGIN_FAIL, payload: error.response?.response?.data?.error });
  }
}

function* getProfile () {
  try {
    let { data } = yield call(getProfileApi);
    yield put({ type: GET_PROFILE_SUCCESS , payload: data});
  } catch (error) {
    yield put({ type: GET_PROFILE_FAIL, payload: error.response?.response?.data?.error });
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN_REQUEST, login);
  yield takeEvery(GET_PROFILE, getProfile);
}
