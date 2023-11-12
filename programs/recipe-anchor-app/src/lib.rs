use anchor_lang::prelude::*;
use std::mem::size_of;

declare_id!("6xpX3GHGBP7JcEAMuGhhFLxQy16RMESnNjnJteiSHu8X");

#[program]
pub mod recipe_anchor_app {
    use super::*;

    pub fn create_recipe(ctx: Context<CreateRecipe>, 
        name:String, 
        ingredients: String, 
        equipments: String, 
        procedure: String) -> Result<()> {

        let recipe_account = &mut ctx.accounts.recipe;
        recipe_account.author = ctx.accounts.owner.key();
        recipe_account.name = name;
        recipe_account.ingredients = ingredients;
        recipe_account.equipments = equipments;
        recipe_account.procedure = procedure;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateRecipe<'info> {
    #[account(init, payer = owner, space =  size_of::<Recipe>() + 8)]
    pub recipe : Account<'info, Recipe>,
    #[account(mut)]
    pub owner : Signer<'info>,
    pub system_program : Program<'info, System>,
}

#[account]
pub struct Recipe {
    pub author : Pubkey,
    pub name : String,
    pub ingredients : String, 
    pub equipments : String, 
    pub procedure : String, 
}
