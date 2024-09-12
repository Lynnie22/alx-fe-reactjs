import {useState , useEffect} from 'react'

const DummyHome = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch("/data.json")
        .then(response => response.json())
        .then(data=>setRecipes(data))
        .catch(err=>console.error('error fetching data:', err))
    }, []);
    // useEffect(() => {
    //     fetch('/data.json')
    //       .then(response => response.json())
    //       .then(data => setRecipes(data))
    //       .catch(error => console.error('Error fetching data:', error));
    //   }, []);


  return (
    <div className='container mx-auto p-4 bg-orange-50'>
      <h1 className='text-3xl text-bold mb-6'>Welcome to your Recipe Haven</h1>
      <p>Discover, share, and enjoy a world of flavors with our collection of delicious recipes. Whether you are a seasoned chef or just starting your culinary journey, our platform offers something for everyone. Explore new dishes, experiment with ingredients, and make every meal a celebration of taste.</p>

      <p>Browse through our handpicked recipes or share your own creations with our community. Let us cook together and bring the joy of food to every table!</p>

      <div>
        {recipes.map((recipe)=>(
            <div key={recipe.id}>
            <div>
                <img src="{recipes.image}" alt="" />
            </div>
            <div>
                <h3>{recipe.title}</h3>
                <p>{recipe.summary}</p>
                <a href="#">See more</a>
            </div>
        </div>
        ))}
        
      </div>

    </div>
  )
}

export default DummyHome
