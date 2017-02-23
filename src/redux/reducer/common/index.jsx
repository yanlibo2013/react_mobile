import * as types from 'constant/mutation-types';

const common = (state = {
    device:""
}, action)=> {
    switch (action.type) {
        case types.GET_DEVICE_TYPE:
            return {
                ...state,
                deviceType:action.device
            };
        default:
            return state;
    }
};

export default common;