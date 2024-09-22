import axios from "axios";

const fetchUserData = async(user, location, minRepos, page=1, perPage=10) => {
    try {
        // Start building the query string
        let query = `q=${user}`;
        
        // Add location if it's provided
        if (location) {
            query += `+location:${location}`;
        }

        // Add minRepos if it's provided
        if (minRepos) {
            query += `+repos:>${minRepos}`;
        }

        // Construct the full API URL
        const url = `https://api.github.com/search/users?${query}&page=${page}&per_page=${perPage}`;
        
        // Make the API request
        const response = await axios.get(url);
        
        // Return the data
        return {users: response.data.items, totalCount: response.data.total_count};
    }
    catch(error) {
        console.error("error fetching user data", error);
    }
}

export default fetchUserData;