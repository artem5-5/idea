export const App = () => {
  const ideas = [
    { nick: 'cool-idea-nick-1', name: 'Idea 1', descriptions: 'Descriptions of idea 1...'},
    { nick: 'cool-idea-nick-1', name: 'Idea 1', descriptions: 'Descriptions of idea 1...'},
    { nick: 'cool-idea-nick-1', name: 'Idea 1', descriptions: 'Descriptions of idea 1...'},
    { nick: 'cool-idea-nick-1', name: 'Idea 1', descriptions: 'Descriptions of idea 1...'}
 ]
 return (
  <div>
    <div>Ideas</div>
    {ideas.map((idea) => (
      <div key={idea.nick}>
        <h2>{idea.name}</h2>
        <p>{idea.descriptions}</p>
      </div>
    ))}
  </div>
 )
}
