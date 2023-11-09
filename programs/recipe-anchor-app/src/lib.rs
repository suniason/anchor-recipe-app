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
