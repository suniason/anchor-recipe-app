import { IProgram } from "./types";

export async function getAllCustomers(program: IProgram) {
  return await program.account.recipe.all();
}