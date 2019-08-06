import { combineReducers, createStore } from 'redux';
import { homeReducer } from './home/reducers';
import { IHomeState } from './home/types';

export interface IRootState {
    home: IHomeState
}

const store = createStore<IRootState, any, any, any>(
    combineReducers({
        home: homeReducer
    }));

export default store;
