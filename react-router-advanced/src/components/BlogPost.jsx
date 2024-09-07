
import { useParams } from 'react-router-dom'

const BlogPost = () => {
    let {postId} = useParams();
  return (
    <div>
        <div><h3>Blog Post {postId}</h3></div>
    </div>
  )
}

export default BlogPost;
