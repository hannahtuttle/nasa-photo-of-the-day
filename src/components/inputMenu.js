import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledFlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 20%;
`;

const MenuInputs = () => (
  <Menu>
      <StyledFlexDiv>
    <Menu.Item>
      <Input className='icon' icon='search' placeholder='Search...' />
    </Menu.Item>

    <Menu.Item position='right'>
      <Input action={{ type: 'submit', content: 'Go' }} placeholder='Navigate to...' />
    </Menu.Item>
    </StyledFlexDiv>
  </Menu>
)

export default MenuInputs