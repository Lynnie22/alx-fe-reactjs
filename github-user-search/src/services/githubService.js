import axios from "axios";

const fetchUserData = async(user) => {
    try {
        const url = `https://api.github.com/users/${user}`;
        const response = await axios.get(url);
        return response.data
    }
    catch(error) {
        console.error("error fetching user data", error);
    }
}

export default fetchUserData