import { Link } from 'react-router-dom'
import { getViewIdeaRoute } from './../../lib/routes'
import { trpc } from './../../lib/trpc'
import css from './index.module.scss'

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
      <div className={css.title}>All Ideas</div>
      {data?.ideas.map((idea) => (
        <div key={idea.name} className={css.container}>
          <div className={css.wrapper}>
            <Link
              className={css.link}
              to={getViewIdeaRoute({ ideaNick: idea.nick as string })}
            >
              <div className={css.name}>{idea.name}</div>
            </Link>
          </div>
          <div className={css.description}>{idea.descriptions}</div>
        </div>
      ))}
    </div>
  )
}
