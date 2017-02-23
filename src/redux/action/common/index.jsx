import * as types from 'constant/mutation-types';
/*
 import ajax from 'src/common/ajax'*/


export const getDevicetype=()=>{
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
    var flag = true;
    for (var i = 0; i < Agents.length; i++) {
        if (userAgentInfo.indexOf(Agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    var dev = flag ? "PC" : "MOBILE";
    return {
        type: types.GET_DEVICE_TYPE,
        device: dev
    }
};