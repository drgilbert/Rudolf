import React, { FC, useState, useRef, Ref } from 'react'
import { Check } from '@material-ui/icons'
import { CustomDispatch, updateFormula } from '../RudolfReducer'
import { NodeMenu } from './NodeMenu'
import { FormulaNode } from '../typings/TreeState'
import { rowHeight } from '../styles/NodeView_styles'
import StyledAutosizeInput from './StyledAutosizeInput'

interface Props {
  row: number
  value: string
  resolved: boolean
  node: FormulaNode
  index: number
  dispatch: CustomDispatch
}

const FormulaView: FC<Props> = ({ index, dispatch, node }) => {
  const formula = node.formulas[index]
  const { value, resolved } = formula
  const [contextMenu, setContextMenu] = useState(false) // Convert to reducer action/field w/ ref, node, optional index.
  const ref: Ref<HTMLDivElement> = useRef(null)
  return (
    <div
      style={{
        height: rowHeight,
        gridRow: index + 1,
      }}
      ref={ref}
      onContextMenu={(e) => {
        e.preventDefault()
        setContextMenu(true)
      }}
    >
      <StyledAutosizeInput
        onChange={(event) => {
          dispatch(updateFormula(node.id, index, event.currentTarget.value))
        }}
        value={value}
        placeholder="formula"
      />
      <NodeMenu
        open={contextMenu}
        onClose={() => setContextMenu(false)}
        dispatch={dispatch}
        anchorEl={ref.current as HTMLDivElement}
        index={index}
        node={node}
      />
      {resolved ? <Check /> : ''}
    </div>
  )
}

export default FormulaView
