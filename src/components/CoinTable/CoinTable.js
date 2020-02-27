import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import classes from './CoinTable.module.css'
import Header from '../Header/Header'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index'
import Spinner from 'react-bootstrap/Spinner'

const CoinTable = (props) => {
    
    let pair = ['BTCUSD', 'BTCEUR', 'ETHUSD', 'ETHEUR', 'EOSUSD']
    
    useEffect(() => {
        pair.forEach((val) => {
           return props.onGetData((val))
        })
        
    }, [])

    let btcusd = props.data.BTCUSD.length
    let btceur = props.data.BTCUSD.length
    let etheur = props.data.ETHEUR.length
    let ethusd = props.data.ETHUSD.length
    let eosusd = props.data.EOSUSD.length

    let table = null;
    
    if(btcusd > 0 && btceur > 0 && etheur > 0 && ethusd > 0 && eosusd > 0){
        let BTCUSD = [props.data.BTCUSD[0], ...props.data.BTCUSD[1]]
        let BTCEUR = [props.data.BTCEUR[0], ...props.data.BTCEUR[1]]
        let ETHEUR = [props.data.ETHEUR[0], ...props.data.ETHEUR[1]]
        let ETHUSD = [props.data.ETHUSD[0], ...props.data.ETHUSD[1]]
        let EOSUSD = [props.data.EOSUSD[0], ...props.data.EOSUSD[1]]

        let dataInfo2 = [BTCUSD, BTCEUR, ETHEUR, ETHUSD, EOSUSD]
         table = dataInfo2.map((val, ind) => {
            return (    
                    <tbody key={ind}>
                        <tr>
                            <td style={{textAlign: 'center'}}>{ind + 1}</td>
                            <td>{val[0]}</td>
                            <td>{`${val[1]} %`}</td>
                            <td>{val[2]}</td>
                            <td>{(val[3]).toFixed(1)}</td>
                        </tr>
                    </tbody>
            )
        })
    }else{
        table = <tbody style={{textAlign: 'center'}}><tr><td><Spinner animation="border"/></td></tr></tbody>
    }

    

    return (
        <>
        <Header />
        <Table striped bordered hover variant="dark" className={classes.CoinTable}>
            <thead>
                <tr>
                <th style={{textAlign: 'center'}}>#</th>
                <th>Symbol</th>
                <th>Daily change</th>
                <th>Volume</th>
                <th>Last price</th>
                </tr>
            </thead>
            {table}
        </Table>
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onGetData: (val) => dispatch(actions.getData(val))
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinTable)