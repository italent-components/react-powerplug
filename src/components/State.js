import * as React from 'react'
import Value from './Value'
import renderProps from '../utils/renderProps'

const State = ({ initial = {}, onChange, ...props }) => (
  <Value initial={initial} onChange={onChange}>
    {({ value, set }) =>
      renderProps(props, {
        state: value,
        setState: (updater, cb) =>
          set(
            prev => ({
              ...prev,
              ...(typeof updater === 'function' ? updater(prev) : updater),
            }),
            cb
          ),
      })
    }
  </Value>
)

export default State
