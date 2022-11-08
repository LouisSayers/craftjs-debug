import React, {CSSProperties, useEffect, useState} from 'react'
import {useEditor} from '@craftjs/core'

export const CraftOutput = () => {
  const { query } = useEditor()
  const [output, setOutput] = useState('')

  const styles: CSSProperties = {
    background: 'grey',
    gridArea: 'craftoutput',
    padding: '10px',
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let nodeTree = JSON.parse(query.serialize())
      setOutput(JSON.stringify(nodeTree, null,  2))
    }, 1000)
    return () => {
      clearInterval(interval)
    };
  }, []);


  return (
    <div style={styles}>
      <pre>{output}</pre>
    </div>
  )
}
