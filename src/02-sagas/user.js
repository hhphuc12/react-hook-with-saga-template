import { put, call, takeLatest } from 'redux-saga/effects';
import { ACTIONS } from '../01-actions/user';
import { showLoading, hideLoading } from '../01-actions/utils';
import { callApi } from '../08-helpers/callApi';

export function* getListUser() {
    yield takeLatest(ACTIONS.GET_LIST_USER, function* () {
        yield put(showLoading());
        try {
            const listUser = yield call(callApi, {}, { endpoint: 'users', method: 'GET' });
            yield put(hideLoading());
            yield put({ type: ACTIONS.SAVE_USER_INFO, listUser });
        }
        catch (error) {
            yield put(hideLoading());
            console.log('getListUser: ', error);
        }
    });
}