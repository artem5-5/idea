import { useState } from 'react'
import { Segment } from './../../components/Segment/index'

export const NewIdeaPage = () => {
  const [state, setState] = useState({
    nick: '',
    name: '',
    description: '',
    text: '',
  })
  return (
    <Segment title="New Idea">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.info('Submitted', state)
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setState({ ...state, name: e.target.value })
            }}
            value={state.name}
            name="text"
            id="text"
          ></input>
        </div>
        <div>
          <label htmlFor="nick">Nick</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setState({ ...state, nick: e.target.value })
            }}
            value={state.nick}
            name="text"
            id="text"
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <br />
          <input
            type="text"
            onChange={(e) => {
              setState({ ...state, description: e.target.value })
            }}
            value={state.description}
            name="text"
            id="text"
          ></input>
        </div>
        <div>
          <label htmlFor="text">Text</label>
          <br />
          <textarea
            onChange={(e) => {
              setState({ ...state, text: e.target.value })
            }}
            value={state.text}
            name="text"
            id="text"
          />
        </div>
        <button type="submit">Create</button>
        <button
          type="reset"
          onClick={() => {
            setState({
              ...state,
              name: '',
              nick: '',
              description: '',
              text: '',
            })
          }}
        >
          Clear
        </button>
      </form>
    </Segment>
  )
}
