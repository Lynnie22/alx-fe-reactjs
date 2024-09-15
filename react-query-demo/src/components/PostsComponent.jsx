
import { useQuery } from 'react-query';



// Define a fetch function that can be used to fetch data from an API
const fetchPosts = async () => {
    const res = await fetch('https://api.example.com/data');
    return res.json();
};
 
const PostsComponent = () => {
    // Use the useQuery hook to handle data fetching and caching
    const { data, error, isLoading } = useQuery('fetchPosts', fetchPosts);

    // Handle loading state
    if (isLoading) return <div>Loading...</div>;
    // Handle error state
    if (error) return <div>Error loading data</div>;

  return (
    <div>
            {data.map(item => (
                <div key={item.id}>{item.name}</div>
            ))}
    </div>
  )
}

export default PostsComponent
