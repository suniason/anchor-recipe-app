import { Recipe } from "@/utils/types"
import {useState} from 'react'


export default function Home() {

  const [recipes, setRecipes] = useState<Recipe[]>([])

  return (
    <div className='text-text flex flex-col items-center'>
      <Navbar/>
      <div className="grid grid-cols-[25%_75%] w-full md:w-8/12">
        <div className="text-white w-full">
          <Sidebar/>
        </div>
        <div className="flex flex-col gap-5">
          {recipes.map((val, key)=>(
            <RecipeList key={key} solanaid={val.publisher} name={val.name} ingredients={val.ingredients} equipments={val.equipment} procedure={val.procedure} />
            ))}
          </div>
      </div>
    </div>
  )
}