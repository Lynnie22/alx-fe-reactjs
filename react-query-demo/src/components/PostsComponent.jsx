
import { useQuery } from 'react-query';



// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
};
 
const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, isError, isLoading, isFetching, refetch } = useQuery('fetchPosts', fetchPosts,   {
      staleTime: 1000 * 60 * 5, // 5 minutes before data is considered stale
      cacheTime: 1000 * 60 * 10, // Data will be cached for 10 minutes after becoming stale
      refetchOnWindowFocus: false, // Disable refetching when window is focused
      keepPreviousData: true, // Keep old data while fetching new data
    });

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (isError) return <div>Error loading data</div>;

  return (
    <div>
        <h1>Posts {isFetching && <span>(Updating...)</span>}</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent
