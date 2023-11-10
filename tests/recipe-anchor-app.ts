import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { RecipeAnchorApp } from "../target/types/recipe_anchor_app";
import { assert } from "chai";

describe("recipe-anchor-app", () => {

  anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.getProvider();
  const program = anchor.workspace.RecipeAnchorApp as Program<RecipeAnchorApp>;
  const keyPair = anchor.web3.Keypair.generate();

  it("Should create customer", async () => {
    const name: string = "Chicken Adobo";
    const ingredients: string = `2 lbs chicken thighs, 1 cup soy sauce, 
    1 cup white vinegar, 1 head garlic, minced, 
    1 tsp peppercorns, 3 bay leaves, 1 tbsp cooking oil`
    const equipments: string = 'Large pot, Cooking spoon, Knife, Chopping board';
    const procedure: string = `
      1. Marinate chicken in soy sauce, vinegar, garlic, and peppercorns for 30 minutes.
      2. Brown marinated chicken in oil in a large pot.
      3. Add bay leaves and the marinade, simmer for 30-40 minutes until chicken is tender.
      4. Serve hot over rice. Enjoy your Chicken Adobo!
    `;

    await program.methods
      .createRecipe(provider.publicKey, name, ingredients, equipments, procedure)
      .accounts({
        recipe: keyPair.publicKey,
        owner: provider.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
      })
      .signers([keyPair])
      .rpc();

    const recipe = await program.account.recipe.fetch(keyPair.publicKey);
    assert.ok(recipe.author === provider.publicKey);
    assert.ok(recipe.name === name);
    assert.ok(recipe.ingredients === ingredients);
    assert.ok(recipe.equipments === equipments);
    assert.ok(recipe.procedure === procedure);
  });

}
