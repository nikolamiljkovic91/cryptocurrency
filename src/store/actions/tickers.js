import * as actionTypes from './actionTypes'


export const connectionStart = () => {
    return {
        type: actionTypes.CONNECTION_START
    }
}

export const connectionFail = (error) => {
    return {
        type: actionTypes.CONNECTION_FAIL,
        error: error
    }
}

export const connectionSuccessBTCUSD = (response) => {
    return {
        type: actionTypes.CONNECTION_SUCCESS_BTCUSD,
        response: response
    }
}

export const connectionSuccessBTCEUR = (response) => {
    return {
        type: actionTypes.CONNECTION_SUCCESS_BTCEUR,
        response: response
    }
}

export const connectionSuccessETHUSD = (response) => {
    return {
        type: actionTypes.CONNECTION_SUCCESS_ETHUSD,
        response: response
    }
}

export const connectionSuccessETHEUR = (response) => {
    return {
        type: actionTypes.CONNECTION_SUCCESS_ETHEUR,
        response: response
    }
}

export const connectionSuccessEOSUSD = (response) => {
    return {
        type: actionTypes.CONNECTION_SUCCESS_EOSUSD,
        response: response
    }
}


export const getData = (val) => {
    const ws = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
    let msg = JSON.stringify({ 
        event: "subscribe", 
        channel: "ticker", 
        pair: val
      })
    return dispatch => {
        dispatch(connectionStart())
        ws.onmessage = (res) => {
            if((JSON.parse(res.data).event) !== 'subscribed' && (JSON.parse(res.data).event) !== 'info'){
                let result = JSON.parse(res.data)[1]
                if(result !== 'hb'){
                    let resData = [val,[result[5], result[7], result[6]]]
                    switch(val){
                        case 'BTCUSD':
                            dispatch(connectionSuccessBTCUSD(resData))
                            break;
                        case 'BTCEUR':
                            dispatch(connectionSuccessBTCEUR(resData))
                            break;
                        case 'ETHUSD':
                            dispatch(connectionSuccessETHUSD(resData))
                            break;
                        case 'ETHEUR':
                            dispatch(connectionSuccessETHEUR(resData))
                            break;
                        case 'EOSUSD':
                            dispatch(connectionSuccessEOSUSD(resData))
                            break;
                            default: {
                                return null
                            }
                        }
                    }
                }
        }
        ws.onopen = () => {
            ws.send(msg)
        }
        ws.onerror = (err) => {
            dispatch(connectionFail(err))
        }
        ws.onclose = () => {
            getData()
        }
    }
}