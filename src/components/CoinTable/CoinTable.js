import React from 'react'
import { Table } from 'react-bootstrap'
import classes from './CoinTable.module.css'
import { Header } from '../Header/Header'

export const CoinTable = () => {

    // const URL = 'https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD,tBTCEUR,tETHUSD,tETHEUR,tEOSUSD'




    return (
        <>
        <Header />
        <Table striped bordered hover variant="dark" className={classes.CoinTable}>
            <thead>
                <tr>
                <th>#</th>
                <th>Symbol</th>
                <th>Daily change</th>
                <th>Volume</th>
                <th>Last price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                </tr>
                <tr>
                <td>3</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                <td>@twitter</td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}
