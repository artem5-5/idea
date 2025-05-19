import { trpc } from "./../../lib/trpc"

export const AllIdeasPage = () => {
    const {data, error, isLoading, isFetching, isError} = trpc.getIdeas.useQuery()

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
            <h2>{idea.name}</h2>
            <p>{idea.descriptions}</p>
        </div>
        ))}
    </div>
    )
}
