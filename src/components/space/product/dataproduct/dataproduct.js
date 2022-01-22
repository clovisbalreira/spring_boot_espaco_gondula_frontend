import React from 'react'

const DataProduct = () =>{
    const data = [
        {
            code: 1,
            provider: 'Ambev',
            product: 'Polar',
            porcentage: 70.0,
            shelfProduct: 5,
            gondolaProduct: 5,
        },
        {
            code: 2,
            provider: 'Fença',
            product: 'Kaiser',
            porcentage: 30.0,
            shelfProduct: 5,
            gondolaProduct: 5,
        }
    ]
    return(
        <tbody>
            {
                data.map(record => {
                const keys = Object.keys(record)
                    return(
                        <tr key={record.code}>
                            {
                                keys.map(key => <td key={key}>{record[key]}</td>)
                            }
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default DataProduct