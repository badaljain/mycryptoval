import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

const priceFormatter = (cell, row) => {
    return '<i class="glyphicon glyphicon-usd"></i> ' + Number(cell).toLocaleString()
}

const supplyFormatter = (cell, row) => {
    return `${Number(cell).toLocaleString()} <b> ${row.symbol} </b>`
}

const percentFormatter = (cell, row) => {
    return `${cell}%`
}

const CryptoTable = (props) => {
    return (
        <BootstrapTable data={props.cryptoList} striped hover>
            <TableHeaderColumn dataField="rank" isKey dataAlign="center" dataSort>Rank</TableHeaderColumn>
            <TableHeaderColumn dataField="name" dataAlign="center" dataSort>Name</TableHeaderColumn>
            <TableHeaderColumn dataField="price_usd" dataSort dataFormat={priceFormatter}>Price</TableHeaderColumn>
            <TableHeaderColumn dataField="market_cap_usd" dataSort dataFormat={priceFormatter}>Market Cap</TableHeaderColumn>
            <TableHeaderColumn dataField="available_supply" dataSort dataFormat={supplyFormatter}>Circulation</TableHeaderColumn>
            <TableHeaderColumn dataField="percent_change_24h" dataSort dataFormat={percentFormatter}>% Change(24 hr)</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default CryptoTable