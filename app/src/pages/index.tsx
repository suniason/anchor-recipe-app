import { DefaultLayout, RecipeList, Sidebar } from "@/components"
import About from "@/components/about/about"
import { useRecipeContext } from "@/context/appcontext"
import { Recipe } from "@/utils/types"
import {useEffect, useState} from 'react'


export default function Home() {
  const {page, wallet} = useRecipeContext()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  
  useEffect(()=>{
    console.log("initialize")
  },[wallet])


  return (
    <div className='text-text flex flex-col items-center'>
        <DefaultLayout>
        <div className="grid grid-cols-[25%_75%] w-full md:w-8/12">
          <div className="text-white w-full">
            <Sidebar/>
          </div>
          { page? <About/>
            :(
            <div className="flex flex-col gap-5">
            {recipes.map((val, key)=>(
              <RecipeList key={key} author={val.author} name={val.name} ingredients={val.ingredients} equipments={val.equipments} procedure={val.procedure} />
              ))}
            </div>
            )}
        </div>
    </DefaultLayout>
      </div>
  )
}