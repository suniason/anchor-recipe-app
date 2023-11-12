import { IProgram} from "./types";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";

export async function getAllRecipe(program: IProgram ) {
  return await program.account.recipe.all();
}

export async function createRecipe(
  program: IProgram,
  author: string,
  name: string,
  ingredients: string,
  equipments: string,
  procedure:string ) {
  
}
