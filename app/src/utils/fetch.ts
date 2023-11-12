import { IProgram} from "./types";
import { Keypair, PublicKey, SystemProgram } from "@solana/web3.js";

export async function getAllRecipe(program: IProgram ) {
  return await program.account.recipe.all();
}

export async function create_recipe(
  program: IProgram,
  author: string,
  name: string,
  ingredients: string,
  equipments: string,
  procedure:string ) {
  const keyPair = Keypair.generate()
  return await program.methods
        .createRecipe(name, ingredients, equipments, procedure)
        .accounts({
            recipe: keyPair.publicKey,
            owner: new PublicKey(author),
            systemProgram: SystemProgram.programId,
        })
        .rpc()
}