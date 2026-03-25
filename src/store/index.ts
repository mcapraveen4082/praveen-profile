import { createStore, type Store } from 'redux';
import rootReducer, { type RootState } from '../reducers/index';

const store: Store<RootState> = createStore(rootReducer);

export default store;

