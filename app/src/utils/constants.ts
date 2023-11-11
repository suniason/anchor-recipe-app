import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const program: PublicKey = new PublicKey(
    "6xpX3GHGBP7JcEAMuGhhFLxQy16RMESnNjnJteiSHu8X"
);


export const connection: Connection = new Connection(
    clusterApiUrl("devnet"),
    "processed"
);