export const Textarea = ({
  name,
  lable,
  state,
  setState,
}: {
  name: string
  lable: string
  state: Record<string, any>
  setState: React.Dispatch<React.SetStateAction<any>>
}) => {
  return (
    <div>
      <label htmlFor={name}>{lable}</label>
      <br />
      <textarea
        onChange={(e) => {
          setState({ ...state, [name]: e.target.value })
        }}
        value={state[name]}
        name={name}
        id={name}
      ></textarea>
    </div>
  )
}
