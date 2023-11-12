import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const programid: PublicKey = new PublicKey(
    "BnbRLAnvdutKLxFvtcsT5fCdgeMoV1reHfag2TeEreCA"
)

export const connection: Connection = new Connection(
    clusterApiUrl("devnet"),
    "processed"
)