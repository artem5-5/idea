import { Link } from 'react-router-dom'
import { getViewIdeaRoute } from './../../lib/routes'
import { trpc } from './../../lib/trpc'

export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    trpc.getIdeas.useQuery()

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <div>All Ideas</div>
      {data?.ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>
            <Link to={getViewIdeaRoute({ ideaNick: idea.nick })}>
              {idea.name}
            </Link>
          </h2>
          <p>{idea.descriptions}</p>
        </div>
      ))}
    </div>
  )
}
