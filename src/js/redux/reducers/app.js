import { fromJS } from 'immutable'

const initialState = fromJS({
  state: 'bootstrap'
})

export default function (state = initialState, action) {
  switch (action.type) {
    case 'TRANSITION_TO_INIT':
      return state.merge({
        state: 'init'
      })
    default:
      return state
  }
}
