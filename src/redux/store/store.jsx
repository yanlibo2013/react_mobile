/**
 * Created by yzsoft on 16/5/4.
 */
import { applyMiddleware, compose, createStore } from 'redux'
import  reducer from 'REDUX/reducer';
import enhancers from './enhancers'
import middlewares from './middlewares'


export  let store =createStore(
  reducer,
    window.__INITIAL_STATE__ || {}, // 前后端同构（服务端渲染）数据同步
    compose(
        applyMiddleware(...middlewares),
        ...enhancers
    )
);
