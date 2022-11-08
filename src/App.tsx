import {Editor} from '@craftjs/core'
import React, {CSSProperties} from 'react'

import {Container} from './components/Container'
import {Text} from './components/Text'
import {Toolbox} from './Toolbox'
import {Workbench} from './Workbench'
import {CraftOutput} from './CraftOutput'

export default function App() {
  const pageStyles: CSSProperties = {
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '1fr 5fr',
    gridTemplateAreas: `
      'toolbox workbench'
      'toolbox craftoutput'
    `,
    height: '100vh',
  }

  return (
    <div className="App">
      <Editor resolver={{Text, Container}}>
        <div style={pageStyles}>
          <Toolbox/>
          <Workbench />
          <CraftOutput />
        </div>
      </Editor>
    </div>
  )
}
