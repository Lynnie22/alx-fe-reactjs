import axios from "axios";

const fetchUserData = async(user, location, minRepos, page=1, perPage=3) => {
    try {
        // Building the query string
        let query = `q=${user}`;
        
        // location if provided
        if (location) {
            query += `+location:${location}`;
        }

        // minRepos if provided
        if (minRepos) {
            query += `+repos:>${minRepos}`;
        }

        // Constructing the full API URL
        const url = `"https://api.github.com/search/users?q"`;
        
        // Making the API request
        const response = await axios.get(url);
        
        // Return the data
        return {users: response.data.items, totalCount: response.data.total_count};
    }
    catch(error) {
        console.error("error fetching user data", error);
    }
}

export default fetchUserData;