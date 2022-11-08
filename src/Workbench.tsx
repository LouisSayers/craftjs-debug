import React, {CSSProperties} from 'react'
import {Text} from './components/Text'
import {Container} from './components/Container'
import {Element, Frame} from '@craftjs/core'

export const Workbench = () => {
  const styles: CSSProperties = {
    background: 'grey',
    gridArea: 'workbench',
  }

  return (
    <div style={styles}>
      <Frame>
        <Element is={Container} canvas>
          <Text text="Hi world!" />
          <Text text="Let's see what we can do" />
        </Element>
      </Frame>
    </div>
  )
}
