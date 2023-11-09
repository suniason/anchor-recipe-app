use anchor_lang::prelude::*;

declare_id!("6xpX3GHGBP7JcEAMuGhhFLxQy16RMESnNjnJteiSHu8X");

#[program]
pub mod recipe_anchor_app {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}

pub struct CreateRecipe<'info> {
    
    #[account(init, payer = owner, space = 8 + 1 + 50 + 32)]
    pub recipes : Account<'info, Recipe>,
    pub owner : Signer<'info>,
    pub system_program : Program<'info, System>,
}

#[derive(Accounts)]
pub struct GetAllRecipes<'info> {
    pub recipe: Account<'info, Recipe>,
    pub recipe_collection: Data<'info, Vec<Recipe>>,
}

#[account]
pub struct Recipe {
    pub author : Pubkey,
    pub name : String,
    pub ingredients : Vec<String>, 
    pub equipments : Vec<String>, 
    pub procedure : String, 
}
