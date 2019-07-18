import React from 'react'
import Nav from './nav.js'
import { Header } from 'semantic-ui-react'

function HeaderText() {
    return <div>
        <Header as='h1' block>
        NASA photo of the day!
        </Header>
        <Nav />
        </div>
    
    
    // <header className ="header">
    //     <h1>NASA photo of the day!</h1>
    //     <Nav />
    //     </header>
}

export default HeaderText