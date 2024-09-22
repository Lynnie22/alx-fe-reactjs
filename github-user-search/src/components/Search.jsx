// import { useState } from 'react';
// import fetchUserData from '../services/githubService';

// const Search = () => {
//     const [user, setUser] = useState("");
//     const [userData, setData] = useState([]); // Changed this to an array to handle multiple users
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const [location, setLocation] = useState("");
//     const [minRepos, setMinRepos] = useState(0);

//     const [currentPage, setCurrentPage] = useState(1); // Track the current page
//     const [totalUsers, setTotalUsers] = useState(0); // Total count of users from the API
//     const perPage = 10; // Number of results per page

//     const handleSearch = (e) => {
//         setUser(e.target.value);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setError(null);

//         try {
//             const data = await fetchUserData(user, location, minRepos, currentPage, perPage);
//             setData(data.items); // Set the list of users returned by the API
//             setTotalUsers(data.totalCount); // Total users from the API
//         } catch (error) {
//             setError("Looks like we can't find the user", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleLocation = (e) => {
//         setLocation(e.target.value);
//     };

//     const handleMinRepo = (e) => {
//         setMinRepos(+e.target.value); // Convert string to number
//     };

//     // Next and Previous Page handlers
// const handleNextPage = () => {
//     if (currentPage < Math.ceil(totalUsers / perPage)) {
//         setCurrentPage(currentPage + 1);
//         handleSubmit(); // Fetch next page
//     }
// };

// const handlePrevPage = () => {
//     if (currentPage > 1) {
//         setCurrentPage(currentPage - 1);
//         handleSubmit(); // Fetch previous page
//     }
// };

//     return (
//         <div className='w-full h-screen flex justify-center items-center'>
//             <div className='glass w-10/12 flex justify-center items-center'>
//                 <div className='glass w-10/12 flex justify-center items-center'>
//                     <form onSubmit={handleSubmit} className='my-4'>
//                         <div>
//                             <input
//                                 type="text"
//                                 value={user}
//                                 placeholder='Enter username'
//                                 onChange={handleSearch}
//                                 className='bg-transparent outline-none border-b-2 border-b-black text placeholder-black my-4 mx-2'
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="text"
//                                 value={location}
//                                 placeholder='Enter user location'
//                                 onChange={handleLocation}
//                                 className='bg-transparent outline-none border-b-2 border-b-black text placeholder-black my-4 mx-2'
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="number"
//                                 placeholder='Minimum repositories'
//                                 value={minRepos}
//                                 onChange={handleMinRepo}
//                                 className='bg-transparent outline-none border-b-2 border-b-black text placeholder-black my-4'
//                             />
//                         </div>

//                         <button type='submit' className='rounded-full color bg-red-200 p-2 text-red-950 font-bold border-red-400'>
//                             Search User
//                         </button>
//                     </form>

//                     {loading && <p>Loading...</p>}
//                     {error && <p>{error}</p>}

//                     {/* Render the list of users */}
//                     {userData.length > 0 && (
//                         <div>
//                             <h2>Search Results:</h2>
//                             <ul>
//                                 {userData.map((user) => (
//                                     <li key={user.id} className='my-4'>
//                                         <h3>{user.login}</h3>
//                                         <img src={user.avatar_url} alt={`${user.login} avatar`} width="100" />
//                                         <p>Location: {user.location || 'N/A'}</p>
//                                         <p>Repositories: {user.public_repos || 'N/A'}</p>
//                                         <p>
//                                             <a href={user.html_url} target='_blank' rel='noopener noreferrer'>
//                                                 View Profile
//                                             </a>
//                                         </p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}

//                     {userData.length === 0 && !loading && !error && <p>No users found.</p>}
//                 </div>
//             </div>
//             {/* Pagination Controls */}
//             <div className="pagination-controls">
//                 <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
//                 <span>Page {currentPage} of {Math.ceil(totalUsers / perPage)}</span>
//                 <button onClick={handleNextPage} disabled={currentPage >= Math.ceil(totalUsers / perPage)}>Next</button>
//              </div>
//         </div>
//     );
// };

// export default Search;


import { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [user, setUser] = useState("");
    const [userData, setData] = useState([]); // List of users
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState(0);

    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [totalUsers, setTotalUsers] = useState(0); // Total users
    const perPage = 10; // Results per page

    // Fetch data function
    const fetchData = async (page = 1) => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchUserData(user, location, minRepos, page, perPage);
            console.log("Fetched data: ", data);
            setData(data.users); // Set users from response
            setTotalUsers(data.totalCount); // Set total user count
        } catch (error) {
            setError("An error occurred while fetching user data.", error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        setUser(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetchData(); // Fetch data when form is submitted
    };

    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    const handleMinRepo = (e) => {
        setMinRepos(+e.target.value); // Convert string to number
    };

    // Next and Previous Page handlers
    const handleNextPage = async () => {
        if (currentPage < Math.ceil(totalUsers / perPage)) {
            setCurrentPage(currentPage + 1);
            await fetchData(currentPage + 1); // Fetch next page
        }
    };

    const handlePrevPage = async () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            await fetchData(currentPage - 1); // Fetch previous page
        }
    };

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-100 p-6'>
            {/* Search Form */}
            <div className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
                <h1 className='text-center text-2xl font-bold mb-4 text-gray-800'>GitHub User Search</h1>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <input
                        type="text"
                        value={user}
                        placeholder='Enter username'
                        onChange={handleSearch}
                        className='w-full p-3 bg-gray-50 border border-gray-300 rounded-md outline-none focus:border-blue-500'
                    />
                    <input
                        type="text"
                        value={location}
                        placeholder='Enter user location'
                        onChange={handleLocation}
                        className='w-full p-3 bg-gray-50 border border-gray-300 rounded-md outline-none focus:border-blue-500'
                    />
                    <input
                        type="number"
                        placeholder='Minimum repositories'
                        value={minRepos}
                        onChange={handleMinRepo}
                        className='w-full p-3 bg-gray-50 border border-gray-300 rounded-md outline-none focus:border-blue-500'
                    />
                    <button 
                        type='submit' 
                        className='w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600'>
                        Search User
                    </button>
                </form>
            </div>

            {/* Loader, Error, and Search Results */}
            <div className='w-full max-w-2xl mt-6'>
                {loading && <p className='text-center text-blue-500'>Loading...</p>}
                {error && <p className='text-center text-red-500'>{error}</p>}

                {userData.length > 0 && (
                    <div className='bg-white p-6 rounded-lg shadow-md'>
                        <h2 className='text-xl font-bold mb-4 text-gray-800'>Search Results</h2>
                        <ul className='space-y-6'>
                            {userData.map((user) => (
                                <li key={user.id} className='flex items-center space-x-4'>
                                    <img src={user.avatar_url} alt={`${user.login} avatar`} width="80" className='rounded-full border border-gray-300' />
                                    <div>
                                        <h3 className='text-lg font-semibold'>{user.login}</h3>
                                        <p className='text-sm text-gray-500'>Location: {user.location || 'N/A'}</p>
                                        <p className='text-sm text-gray-500'>Repositories: {user.public_repos || 'N/A'}</p>
                                        <a href={user.html_url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                                            View Profile
                                        </a>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {userData.length === 0 && !loading && !error && <p className='text-center text-gray-500 mt-4'>No users found.</p>}
            </div>

            {/* Pagination Controls */}
            {userData.length > 0 && (
                <div className='mt-6 flex justify-between items-center w-full max-w-2xl'>
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`p-2 px-4 border rounded-md ${currentPage === 1 ? 'bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                        Previous
                    </button>
                    <span className='text-gray-600'>
                        Page {currentPage} of {Math.ceil(totalUsers / perPage)}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage >= Math.ceil(totalUsers / perPage)}
                        className={`p-2 px-4 border rounded-md ${currentPage >= Math.ceil(totalUsers / perPage) ? 'bg-gray-200' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;
