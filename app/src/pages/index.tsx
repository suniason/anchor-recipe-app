import { DefaultLayout, Sidebar } from "@/components"
import About from "@/components/routes/about"
import HomePage from "@/components/routes/home"
import { useRecipeContext } from "@/context/appcontext"
import { getAllRecipe } from "@/utils/fetch"
import {useEffect, useState} from 'react'
import { useAnchorWallet } from "@solana/wallet-adapter-react"
import { Spin } from "antd"

export default function Home() {
  const {isCreating, page} = useRecipeContext()
  const[recipes, setRecipes] = useState<any>()
  const[isLoading, setIsLoading] = useState<boolean>(false)
  const wallet = useAnchorWallet();

  useEffect(() => {
    if(wallet){
      setIsLoading(true)
          getAllRecipe(wallet).then((data:any) => {
            setRecipes(data)
          }).finally(() => {
            setIsLoading(false);
          });
        }
  }, [wallet])

  useEffect(() => {
    if(!isCreating && wallet){
      setIsLoading(true)
      getAllRecipe(wallet).then((data:any) => {
        setRecipes(data);
      }).finally(() => {
        setIsLoading(false);
      })
    }
  }, [isCreating, wallet]);

  useEffect(()=>{},[recipes])

  
    let body = null
    if(page===0) body = isLoading ? <Spin/> : <HomePage recipes={recipes}/>
    else if(page===1) body = <About/>

  return (
    <div className='text-text flex flex-col items-center'>
        <DefaultLayout/>
        <div className="grid grid-cols-[25%_75%] w-full md:w-9/12">
          <div className="text-white w-full">
            <Sidebar/>
          </div>
            {wallet?
             body
            :<div className="text-white text-3xl font-bold">Connect to your wallet (Devnet)</div>
          }
        </div>
      </div>
  )
}