import { useParams } from 'react-router-dom'
import { Segment } from './../../components/Segment/index'
import { trpc } from './../../lib/trpc'
import css from './index.module.scss'
import type { ViewIdeaRouteParams } from '@/lib/routes'

export const ViewIdeaPage = () => {
  const { ideaNick } = useParams() as ViewIdeaRouteParams

  const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery(
    {
      ideaNick,
    }
  )

  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  if (!data?.idea) {
    return <p>Idea not found</p>
  }

  return (
    <div className={css.wrapper}>
      <Segment size={2} title={ideaNick} description={data.idea.descriptions}>
        <div
          className={css.text}
          dangerouslySetInnerHTML={{ __html: data.idea.text }}
        />
      </Segment>
    </div>
  )
}
