import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

interface WalletContextType {
  account: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isConnecting: boolean;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [account, setAccount] = useState<string | null>(null);
  const [providers, setProviders] = useState<any[]>([]);
  const [isConnecting, setIsConnecting] = useState(false);
  const [, setConnectionAttempts] = useState(0);

  // Discover EIP-6963 providers
  useEffect(() => {
    const handleAnnounceProvider = (event: any) => {
      console.log("EIP-6963 Provider Announced:", event.detail);
      setProviders((prev) => {
        // Prevent duplicate providers
        if (prev.some(p => p.info.uuid === event.detail.info.uuid)) {
          return prev;
        }
        const newProviders = [...prev, event.detail];
        console.log("Updated Providers List:", newProviders);
        return newProviders;
      });
    };

    console.log("Adding EIP-6963 event listener...");
    window.addEventListener("eip6963:announceProvider", handleAnnounceProvider);
    
    // Request providers on mount
    const requestEvent = new Event("eip6963:requestProvider");
    window.dispatchEvent(requestEvent);

    return () => {
      console.log("Removing EIP-6963 event listener...");
      window.removeEventListener("eip6963:announceProvider", handleAnnounceProvider);
    };
  }, []);

  // Helper function for delayed retry with exponential backoff
  const retry = async (fn: () => Promise<any>, maxAttempts: number, baseDelay: number = 500) => {
    let attempt = 0;
    
    while (attempt < maxAttempts) {
      try {
        return await fn();
      } catch (error: any) {
        attempt++;
        
        // If it's a rate limit error and we haven't reached max attempts
        if (error.code === -32005 && attempt < maxAttempts) {
          const delay = baseDelay * Math.pow(2, attempt);
          console.log(`Rate limit error. Retrying in ${delay}ms (attempt ${attempt}/${maxAttempts})`);
          await new Promise(resolve => setTimeout(resolve, delay));
          continue;
        }
        
        // For other errors or if we've reached max attempts, throw the error
        throw error;
      }
    }
  };

  const connectWallet = useCallback(async () => {
    // Don't allow multiple connection attempts
    if (isConnecting) {
      console.log("Connection already in progress. Please wait.");
      return;
    }
    
    setIsConnecting(true);
    setConnectionAttempts(prev => prev + 1);
    
    try {
      console.log("Starting wallet connection process...");
      console.log("Available EIP-6963 providers:", providers);

      let provider: ethers.BrowserProvider;

      // Try EIP-6963 providers first
      if (providers.length > 0) {
        console.log("Using EIP-6963 provider:", providers[0].info);
        provider = new ethers.BrowserProvider(providers[0].provider);
      } else {
        // Fallback to window.lukso or window.ethereum
        console.log("No EIP-6963 providers found. Checking fallbacks...");
        console.log("window.lukso available:", !!window.lukso);
        console.log("window.ethereum available:", !!window.ethereum);

        if (window.lukso) {
          console.log("Using window.lukso provider");
          provider = new ethers.BrowserProvider(window.lukso);
        } else if (window.ethereum) {
          console.log("Using window.ethereum provider");
          provider = new ethers.BrowserProvider(window.ethereum);
        } else {
          throw new Error("No wallet providers detected. Please install the Universal Profile Browser Extension.");
        }
      }

      // Request accounts with retry mechanism
      console.log("Requesting accounts with retry mechanism...");
      const accounts = await retry(
        async () => provider.send("eth_requestAccounts", []),
        3  // Max 3 attempts
      );
      
      console.log("Accounts received:", accounts);

      if (accounts.length === 0) {
        throw new Error("No accounts found. Please ensure your wallet is unlocked and try again.");
      }

      setAccount(accounts[0]);
      console.log("Connected with", accounts[0]);

      // Check network (optional: ensure LUKSO Testnet, chain ID 4021)
      console.log("Checking network...");
      const network = await provider.getNetwork();
      console.log("Network:", network);
      if (Number(network.chainId) !== 4021) {
        alert("Please switch to the LUKSO Testnet (chain ID 4021) in your wallet.");
      }
    } catch (error: any) {
      console.error("Error connecting to wallet:", error);
      console.error("Error code:", error.code);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);

      if (error.message?.includes("No wallet providers detected")) {
        alert(error.message);
      } else if (error.code === 4001) {
        alert("Connection request rejected. Please approve the connection in your wallet.");
      } else if (error.code === -32002) {
        alert("A connection request is already pending. Please check your wallet extension.");
      } else if (error.code === -32005) {
        alert("Request limit exceeded. Please wait a moment before trying again.");
      } else {
        alert(`Failed to connect to wallet: ${error.message || "Unknown error"}. Please try again.`);
      }
    } finally {
      setIsConnecting(false);
      console.log("Connection process completed.");
    }
  }, [providers, isConnecting]);

  const disconnectWallet = () => {
    setAccount(null);
    console.log("Disconnected wallet.");
  };

  return (
    <WalletContext.Provider value={{ account, connectWallet, disconnectWallet, isConnecting }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
};

// For TypeScript global window object
declare global {
  interface Window {
    ethereum?: any;
    lukso?: any;
  }
}