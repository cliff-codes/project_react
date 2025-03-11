import BrandCard from "./components/BrandCard";
import { useState } from "react";
import LearnComponent from "./components/TestComponent";
import LearnUseState from "./components/LearnUseState";
import LearnUseEffect from "./components/LearnUseEffect"
import NotificationAlert from "./components/NotificationAlert"
const brands = [
  {
    name: "BMW",
    image: "/bmw.jpg",
  },
  {
    name: "Lambo",
    image: "/lambo.jpg",
  },
  {
    name: "Range Rover",
    image: "/range.jpg",
  },
  {
    name: "rolls royce",
    image: "/rolls-royce.jpg",
  },
];

function App() {
  
  const newBrands = [
    {
      name: "Porche",
      model: "GT3"
    }
  ]

  const transformedBrands = newBrands.map((item) => ({
    ...item,
    year: "2024"
  }))
  console.log(transformedBrands)
  


  const [carBrands, setCarBrands] = useState(
    brands.map(brand => ({
      ...brand,
      upVotes: 0,
      downVotes: 0, 
    }))
  )

  const handleUpVotes = (index) => {    
    setCarBrands(prev => prev.map((brand, x) => index === x ? {...brand, upVotes: brand.upVotes+1} : brand))
  }

  const handleDownVotes = () => {
    setCarBrands(prev => prev.map((brand, x) => index === x ? {...brand, upVotes: brand.upVotes+1} : brand))
  }

  function handleReset(){
    setCarBrands(
      carBrands.map(brand => (
        {
          ...brand,
          upVotes: 0,
          downVotes: 0,
        }
      ))
    )
  }

  //create a button to handleReset of the votes back to zero.
  //

  return (
    <div className="w-full h-screen flex flex-col justify-between px-[80px] py-5 gap-10">
      
      <NotificationAlert bgColor = {"slate-400"}/>
      <header className="bg-slate-100 h-[80px] flex place-items-center px-3 py-4 rounded-md justify-between">
        <h1 className="text-3xl text-center font-bold">Project_React</h1>

        <div>
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors .1 ease-linear">
            login
          </button>
        </div>
      </header>

      <main className="bg-slate-50 flex-1 pt-8 rounded-md">
        <section className="text-lg text-center flex flex-wrap gap-8 justify-center">
          {carBrands.map((brand, index) => (
            <BrandCard index={index} key={brand.name} name={brand.name} image={brand.image} voteUp = {handleUpVotes} voteDown = {handleDownVotes} upVotes={brand.upVotes} downVotes={brand.downVotes} />
          ))}
        </section>       
        {/* <LearnComponent/> */}
        {/*<QuizComponent/>*/}
        {/*  <LearnUseState name={"Kenneth"} age={19}/> */}
        <div>
          <button onClick={handleReset} className="bg-slate-200 text-slate-800 rounded-md">Reset votes</button>
        </div>
        <LearnUseEffect/>
      </main>
      <footer className="py-5 bg-slate-100 rounded-md">
        <p className="text-sm text-center">Copyright &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;
