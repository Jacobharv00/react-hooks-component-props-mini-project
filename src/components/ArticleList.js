import Article from './Article'

function ArticleList({ posts }) {
  const articleArr = posts.map((post) => {
    return (
      <Article
        date={post.date}
        preview={post.preview}
        title={post.title}
        key={post.id}
      />
    )
  })
  return <main>{ articleArr }</main>
}

export default ArticleList