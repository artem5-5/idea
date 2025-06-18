import { useState } from 'react'
import { Input } from './../../components/Input'
import { Segment } from './../../components/Segment'
import { Textarea } from './../../components/Textarea'

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
        <Input name="name" lable="Name" state={state} setState={setState} />
        <Input name="nick" lable="Nick" state={state} setState={setState} />
        <Input
          name="description"
          lable="Description"
          state={state}
          setState={setState}
        />
        <Textarea name="text" lable="Text" state={state} setState={setState} />
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
