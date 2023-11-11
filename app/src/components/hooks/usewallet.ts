
import { useEffect, useState } from "react";
import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { RecipeIdl } from "@/utils/idl";
import { IProgram, RecipeApp } from "@/utils/types";


const conn: Connection = new Connection(
    clusterApiUrl("devnet"),
    "processed"
);

const PROGRAM: PublicKey = new PublicKey(
    "6xpX3GHGBP7JcEAMuGhhFLxQy16RMESnNjnJteiSHu8X"
);

const useSolana = () => {
    const [connection, setConnection] = useState<any>(conn);
    const [programId, setProgramId] = useState<any>(PROGRAM);
    const [program, setProgram] = useState<any>(null);
    const [provider, setProvider] = useState<any>(null);
    const [wallet, setWallet] = useState<any>(null);
    const [solanaWindow, setSolanaWindow] = useState<any>(null);

    const getProviderInstance = (solana: any): AnchorProvider => {
        return new AnchorProvider(conn, solana, {
            commitment: "processed",
        });
    }

    const getProgramInstance = (provider: AnchorProvider): IProgram => {
        return new Program<RecipeApp>(RecipeIdl, PROGRAM, provider);
    }


    //transferred to button
    const connectWallet = async () => {
        const response = await solanaWindow.connect();
        setWallet(response.publicKey.toString())
    }

    useEffect(() => {
        const { solana } = window as any
        setSolanaWindow(solana)
        setProvider(getProviderInstance(solana));
        setProgram(getProgramInstance(solana));
    }, []);

    return { connection, setConnection, programId, setProgramId, program, setProgram, provider, setProvider, wallet, setWallet, connectWallet };
};

export default useSolana; 