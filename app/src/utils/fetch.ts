import { RecipeApp} from "./types";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import { AnchorWallet } from "@solana/wallet-adapter-react";
import { RecipeIdl } from "./idl";
import { programid } from "./constants";
import { Connection, SystemProgram, clusterApiUrl } from "@solana/web3.js";

export async function getAllRecipe(wallet: AnchorWallet,) {
  const connection = new Connection(clusterApiUrl("devnet"),  "processed");

  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });

  if (!provider) return;

  const program = new Program(
    RecipeIdl,
    programid,
    provider
  ) as Program<RecipeApp>;
  return await program.account.recipe.all();
}



export default async function createRecipe(
  name:string, ingredients:string, equipments:string, procedure:string,
  wallet: AnchorWallet,
  recipeAccount: web3.Keypair
) {
  const connection = new Connection(clusterApiUrl("devnet"),  "processed");

  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: "processed",
  });

  if (!provider) return;

  const program = new Program(
    RecipeIdl,
    programid,
    provider
  ) as Program<RecipeApp>;

  try {
    const recipe = await program.methods
    .createRecipe(name, ingredients, equipments, procedure)
    .accounts({
        recipe: recipeAccount.publicKey,
        owner: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
    }).signers([recipeAccount])
    .rpc()

    const reciperesult = await program.account.recipe.fetch(
      recipeAccount.publicKey
    );
    console.log("res",reciperesult)
    console.log("Recipe: ", name, ingredients, equipments, procedure);
    return recipe;
  } catch (err) {
    console.log("Transaction error: ", err);
    return;
  }
}
