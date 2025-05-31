import { useParams } from 'react-router-dom'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as { ideaNick: string }
  return (
    <div>
      <div>{ideaNick}</div>
      <div>Idea Description:</div>
      <li>{'blablablablabla'}</li>
      <li>{'blablablablabla'}</li>
      <li>{'blablablablabla'}</li>
      <li>{'blablablablabla'}</li>
    </div>
  )
}
