import React from 'react'

function Description({photoDescription, copyright}) {

    return <div>
        <p>(C) {copyright}</p>
        <p>{photoDescription}</p>
        </div>
}

export default Description