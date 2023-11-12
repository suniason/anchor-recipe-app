import { DefaultLayout, RecipeList, Sidebar } from "@/components"
import About from "@/components/routes/about"
import HomePage from "@/components/routes/home"
import { useRecipeContext } from "@/context/appcontext"
import { getAllRecipe } from "@/utils/fetch"
import { RecipeIdl } from "@/utils/idl"
import { Recipe, RecipeApp } from "@/utils/types"
import {useEffect, useState} from 'react'
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet.js"
import { programid } from "@/utils/constants"
import { Program } from "@coral-xyz/anchor"
import { Connection, clusterApiUrl } from "@solana/web3.js"

export default function Home() {
  const {connection, page, wallet, setWallet, setConnected} = useRecipeContext()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  
  useEffect(()=>{
    console.log("initialize")
  },[wallet])

  useEffect(() => {
    if(connection){
      const program = new Program<RecipeApp>(
        RecipeIdl,
        programid,
        {connection}
        );
        const recipeAccounts = getAllRecipe(program)
        console.log(recipeAccounts)
      }
  }, []);

  useEffect(() => {
    const start = async () => {
      const { solana } = window as any;
      if (solana) {
        const account = await solana.connect();
        setWallet(account.publicKey.toString());
        setConnected(true);
      }
    };
    start();
  }, []);
  
    let body = null
    if(page===0) body = <HomePage recipes={recipes}/>
    else if(page===1) body = <About/>

  return (
    <div className='text-text flex flex-col items-center'>
        <DefaultLayout>

        <div className="grid grid-cols-[25%_75%] w-full md:w-9/12">
          <div className="text-white w-full">
            <Sidebar/>
          </div>
            {body}
        </div>
    </DefaultLayout>
      </div>
  )
}