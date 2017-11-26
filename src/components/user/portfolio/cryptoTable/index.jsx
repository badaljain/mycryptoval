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
        <BootstrapTable data={props.portfolio} striped hover>
            <TableHeaderColumn dataField="symbol" isKey dataAlign="center" dataSort>Crypto</TableHeaderColumn>
            <TableHeaderColumn dataField="qty" dataAlign="center" dataSort>Quantity</TableHeaderColumn>
            <TableHeaderColumn dataField="price" dataAlign="center" dataSort>Price</TableHeaderColumn>
        </BootstrapTable>
    )
}

export default CryptoTable