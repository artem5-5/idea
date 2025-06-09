import { Link } from 'react-router-dom'
import { Segment } from './../../components/Segment/index'
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
    <Segment title="All Ideas">
      <div className={css.container}>
        {data?.ideas.map((idea) => (
          <div key={idea.name} className={css.wrapper}>
            <Segment
              size={2}
              title={
                <Link
                  className={css.link}
                  to={getViewIdeaRoute({ ideaNick: idea.nick as string })}
                >
                  {idea.name}
                </Link>
              }
              description={idea.descriptions}
            ></Segment>
          </div>
        ))}
      </div>
    </Segment>
  )
}
