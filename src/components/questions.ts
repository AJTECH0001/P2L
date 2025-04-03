export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

export const questions: Question[] = [
  {
    question: "What is a Blockchain?",
    options: [
      "A type of cryptocurrency",
      "decentralized ledger",
      "centralized database",
    ],
    correctAnswer: "decentralized ledger",
  },
  {
    question: "What does NFT stand for?",
    options: [
      "Non-Fungible Token",
      "New Financial Technology",
      "Network File Transfer",
    ],
    correctAnswer: "Non-Fungible Token",
  },
  {
    question: "What is the primary purpose of a smart contract?",
    options: [
      "To mine cryptocurrency",
      "To automate agreements",
      "To store data",
    ],
    correctAnswer: "To automate agreements",
  },
  {
    question: "What is the primary focus of the Lukso Blockchain ecosystem?",
    options: [
      "Financial transactions and cryptocurrency trading",
      "Creative industries such as fashion, lifestyle, and design",
      "Supply chain management and logistics",
    ],
    correctAnswer: "Creative industries such as fashion, lifestyle, and design",
  },
  {
    question: "What is the purpose of Universal Profiles in Lukso?",
    options: [
      "To manage cryptocurrency wallets",
      "To provide a unified digital identity and simplify Web3 onboarding",
      "To facilitate NFT trading",
    ],
    correctAnswer:
      "To provide a unified digital identity and simplify Web3 onboarding",
  },
  {
    question: "Who are the founders of Lukso?",
    options: [
      "Vitalik Buterin and Marjorie Hernandez",
      "Fabian Vogelsteller and Marjorie Hernandez",
      "Nick Szabo and Fabian Vogelsteller",
    ],
    correctAnswer: "Fabian Vogelsteller and Marjorie Hernandez",
  },
  {
    question: "What is the native cryptocurrency of the Lukso network?",
    options: ["LYX", "ETH", "BTC"],
    correctAnswer: "LYX",
  },
  {
    question: "How does Lukso enhance user experience?",
    options: [
      "By offering faster transaction speeds",
      "By providing a unified digital identity through Universal Profiles",
      "By reducing transaction fees",
    ],
    correctAnswer:
      "By providing a unified digital identity through Universal Profiles",
  },
  {
    question: "What is the role of LSP Standards in Lukso?",
    options: [
      "To enhance security protocols",
      "To define standards for digital assets and smart contracts",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer: "To define standards for digital assets and smart contracts",
  },
  {
    question: "What is Fabian Vogelsteller's background in blockchain?",
    options: [
      "He is a newcomer to the blockchain space",
      "He was a lead developer at the Ethereum Foundation",
      "He founded Bitcoin",
    ],
    correctAnswer: "He was a lead developer at the Ethereum Foundation",
  },
  {
    question: "What is Marjorie Hernandez's role in Lukso?",
    options: [
      "She is a developer",
      "She is a co-founder and visionary in design and technology",
      "She is an investor",
    ],
    correctAnswer: "She is a co-founder and visionary in design and technology",
  },
  {
    question: "How does Lukso ensure security and privacy?",
    options: [
      "By using centralized data storage",
      "Through blockchain's inherent transparency and cryptographic verification",
      "By relying on third-party security services",
    ],
    correctAnswer:
      "Through blockchain's inherent transparency and cryptographic verification",
  },
  {
    question: "What is the role of the community in the Lukso ecosystem?",
    options: [
      "To manage the network's infrastructure",
      "To contribute to the development and governance of the ecosystem",
      "To solely use the network's applications",
    ],
    correctAnswer:
      "To contribute to the development and governance of the ecosystem",
  },
  {
    question: "What is the significance of EVM compatibility in Lukso?",
    options: [
      "It allows for faster transaction processing",
      "It enhances security by using a different consensus algorithm",
      "It facilitates ease of use for developers familiar with Ethereum",
    ],
    correctAnswer:
      "It facilitates ease of use for developers familiar with Ethereum",
  },
  {
    question: "How does Lukso enhance asset management?",
    options: [
      "By centralizing asset control",
      "By providing standardized smart profiles for digital assets",
      "By automating asset transactions through smart contracts",
    ],
    correctAnswer:
      "By providing standardized smart profiles for digital assets",
  },
  {
    question: "How does Lukso facilitate interoperability?",
    options: [
      "By using a proprietary network protocol",
      "Through Universal Profiles that are interoperable across the ecosystem",
      "By integrating with centralized systems",
    ],
    correctAnswer:
      "Through Universal Profiles that are interoperable across the ecosystem",
  },
  {
    question: "What is the goal of Lukso's decentralized identity management?",
    options: [
      "To centralize user data",
      "To provide secure and private digital identities",
      "To enhance transaction speeds",
    ],
    correctAnswer: "To provide secure and private digital identities",
  },
  {
    question:
      "What is the role of the Foundation for the New Creative Economies (FNCΞ)?",
    options: [
      "To manage the network's infrastructure",
      "To support the Lukso ecosystem by providing tools and frameworks",
      "To solely invest in blockchain startups",
    ],
    correctAnswer:
      "To support the Lukso ecosystem by providing tools and frameworks",
  },
  {
    question: "How do LSP7 and LSP8 differ in Lukso?",
    options: [
      "LSP7 is for NFTs, while LSP8 is for tokens",
      "Both are for tokens, but LSP8 is more extensible",
      "LSP7 is for metadata, while LSP8 is for digital assets",
    ],
    correctAnswer: "LSP7 is for NFTs, while LSP8 is for digital assets",
  },
  {
    question:
      "What is the key difference between Lukso Universal Profiles and traditional wallets?",
    options: [
      "Universal Profiles provide a unified digital identity, while traditional wallets focus on asset storage",
      "Universal Profiles are more secure, while traditional wallets are faster",
      "Universal Profiles are centralized, while traditional wallets are decentralized",
    ],
    correctAnswer:
      "Universal Profiles provide a unified digital identity, while traditional wallets focus on asset storage",
  },
  {
    question: "What is the role of ERC725 in Lukso's Universal Profiles?",
    options: [
      "It is used for token creation",
      "It serves as a base for blockchain-based account systems",
      "It enhances security protocols",
    ],
    correctAnswer: "It serves as a base for blockchain-based account systems",
  },
  {
    question: "What is Ethereum?",
    options: [
      "A decentralized cryptocurrency",
      "A blockchain platform for building decentralized applications",
      "A centralized database system",
    ],
    correctAnswer:
      "A blockchain platform for building decentralized applications",
  },
  {
    question: "How does Ethereum's Proof-of-Stake (PoS) work?",
    options: [
      "It requires energy-intensive mining",
      "It uses validators who stake ETH to secure the network",
      "It relies on a centralized authority",
    ],
    correctAnswer: "It uses validators who stake ETH to secure the network",
  },
  {
    question: "What is Bitcoin?",
    options: [
      "A decentralized cryptocurrency",
      "A blockchain platform for building applications",
      "A centralized financial system",
    ],
    correctAnswer: "A decentralized cryptocurrency",
  },
  {
    question: "What is the Ethereum Virtual Machine (EVM)?",
    options: [
      "A decentralized network for cryptocurrency trading",
      "A virtual computer that executes smart contracts",
      "A consensus algorithm for validating transactions",
    ],
    correctAnswer: "A virtual computer that executes smart contracts",
  },
  {
    question: "How does Bitcoin's blockchain work?",
    options: [
      "It uses a centralized ledger",
      "It is a decentralized, distributed ledger",
      "It relies on a proof-of-stake consensus",
    ],
    correctAnswer: "It is a decentralized, distributed ledger",
  },
  {
    question: "What is the purpose of smart contracts in Ethereum?",
    options: [
      "To facilitate cryptocurrency trading",
      "To automate the execution of agreements",
      "To manage decentralized applications",
    ],
    correctAnswer: "To automate the execution of agreements",
  },
  {
    question:
      "What is the difference between Ethereum's PoS and Bitcoin's PoW?",
    options: [
      "PoS uses mining, while PoW uses staking",
      "PoS is more energy-efficient than PoW",
      "PoW is more secure than PoS",
    ],
    correctAnswer: "PoS is more energy-efficient than PoW",
  },
  {
    question: "What are decentralized applications (dApps)?",
    options: [
      "Centralized applications built on blockchain",
      "Decentralized applications built on blockchain platforms",
      "Traditional web applications",
    ],
    correctAnswer: "Decentralized applications built on blockchain platforms",
  },
  {
    question: "What is the role of nodes in a blockchain network?",
    options: [
      "To mine new coins",
      "To validate transactions and maintain the blockchain",
      "To manage user accounts",
    ],
    correctAnswer: "To validate transactions and maintain the blockchain",
  },
  {
    question: "What is the purpose of gas fees in Ethereum?",
    options: [
      "To incentivize validators",
      "To pay for transaction execution and smart contract deployment",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer:
      "To pay for transaction execution and smart contract deployment",
  },
  {
    question:
      "What is the difference between a blockchain and a traditional database?",
    options: [
      "A blockchain is centralized, while a database is decentralized",
      "A blockchain is immutable, while a database can be altered",
      "A blockchain is used for cryptocurrency, while a database is used for general data storage",
    ],
    correctAnswer: "A blockchain is immutable, while a database can be altered",
  },
  {
    question: "What is the role of mining in Bitcoin?",
    options: [
      "To validate transactions and create new blocks",
      "To stake coins for network security",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer: "To validate transactions and create new blocks",
  },
  {
    question: "What are non-fungible tokens (NFTs)?",
    options: [
      "Unique digital assets stored on blockchain",
      "Interchangeable cryptocurrencies",
      "Traditional financial instruments",
    ],
    correctAnswer: "Unique digital assets stored on blockchain",
  },
  {
    question: "How does Bitcoin's blockchain ensure transparency?",
    options: [
      "Through centralized data storage",
      "Through decentralized, publicly accessible records",
      "By using a proof-of-stake consensus",
    ],
    correctAnswer: "Through decentralized, publicly accessible records",
  },
  {
    question:
      "What is the purpose of decentralized exchanges (DEXs) on Ethereum?",
    options: [
      "To facilitate centralized trading",
      "To enable peer-to-peer trading without intermediaries",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer: "To enable peer-to-peer trading without intermediaries",
  },
  {
    question: "What is the role of validators in Ethereum's PoS?",
    options: [
      "To mine new coins",
      "To propose and validate blocks",
      "To manage user accounts",
    ],
    correctAnswer: "To propose and validate blocks",
  },
  {
    question: "How does Bitcoin's blockchain ensure immutability?",
    options: [
      "Through centralized control",
      "Through decentralized consensus and cryptographic hashing",
      "By using a proof-of-stake mechanism",
    ],
    correctAnswer: "Through decentralized consensus and cryptographic hashing",
  },
  {
    question: "What is the purpose of stablecoins on Ethereum?",
    options: [
      "To facilitate high-risk trading",
      "To provide a stable store of value pegged to traditional currencies",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer:
      "To provide a stable store of value pegged to traditional currencies",
  },
  {
    question:
      "What is the purpose of decentralized autonomous organizations (DAOs)?",
    options: [
      "To facilitate centralized decision-making",
      "To enable decentralized governance and decision-making",
      "To manage traditional organizations",
    ],
    correctAnswer: "To enable decentralized governance and decision-making",
  },
  {
    question: "What is the role of cryptography in blockchain security?",
    options: [
      "To enable centralized control over transactions",
      "To secure transactions and control the creation of new units",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer:
      "To secure transactions and control the creation of new units",
  },
  {
    question: "What is Ethereum?",
    options: [
      "A decentralized cryptocurrency",
      "A blockchain platform for building decentralized applications",
      "A centralized database system",
    ],
    correctAnswer:
      "A blockchain platform for building decentralized applications",
  },
  {
    question: "How does Ethereum's Proof-of-Stake (PoS) work?",
    options: [
      "It requires energy-intensive mining",
      "It uses validators who stake ETH to secure the network",
      "It relies on a centralized authority",
    ],
    correctAnswer: "It uses validators who stake ETH to secure the network",
  },
  {
    question: "What is Bitcoin?",
    options: [
      "A decentralized cryptocurrency",
      "A blockchain platform for building applications",
      "A centralized financial system",
    ],
    correctAnswer: "A decentralized cryptocurrency",
  },
  {
    question: "What is the Ethereum Virtual Machine (EVM)?",
    options: [
      "A decentralized network for cryptocurrency trading",
      "A virtual computer that executes smart contracts",
      "A consensus algorithm for validating transactions",
    ],
    correctAnswer: "A virtual computer that executes smart contracts",
  },
  {
    question: "How does Bitcoin's blockchain work?",
    options: [
      "It uses a centralized ledger",
      "It is a decentralized, distributed ledger",
      "It relies on a proof-of-stake consensus",
    ],
    correctAnswer: "It is a decentralized, distributed ledger",
  },
  {
    question: "What is the purpose of smart contracts in Ethereum?",
    options: [
      "To facilitate cryptocurrency trading",
      "To automate the execution of agreements",
      "To manage decentralized applications",
    ],
    correctAnswer: "To automate the execution of agreements",
  },
  {
    question:
      "What is the difference between Ethereum's PoS and Bitcoin's PoW?",
    options: [
      "PoS uses mining, while PoW uses staking",
      "PoS is more energy-efficient than PoW",
      "PoW is more secure than PoS",
    ],
    correctAnswer: "PoS is more energy-efficient than PoW",
  },
  {
    question: "What are decentralized applications (dApps)?",
    options: [
      "Centralized applications built on blockchain",
      "Decentralized applications built on blockchain platforms",
      "Traditional web applications",
    ],
    correctAnswer: "Decentralized applications built on blockchain platforms",
  },
  {
    question: "What is the role of nodes in a blockchain network?",
    options: [
      "To mine new coins",
      "To validate transactions and maintain the blockchain",
      "To manage user accounts",
    ],
    correctAnswer: "To validate transactions and maintain the blockchain",
  },
  {
    question: "What is the purpose of gas fees in Ethereum?",
    options: [
      "To incentivize validators",
      "To pay for transaction execution and smart contract deployment",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer:
      "To pay for transaction execution and smart contract deployment",
  },
  {
    question:
      "What is the difference between a blockchain and a traditional database?",
    options: [
      "A blockchain is centralized, while a database is decentralized",
      "A blockchain is immutable, while a database can be altered",
      "A blockchain is used for cryptocurrency, while a database is used for general data storage",
    ],
    correctAnswer: "A blockchain is immutable, while a database can be altered",
  },
  {
    question: "What is the role of mining in Bitcoin?",
    options: [
      "To validate transactions and create new blocks",
      "To stake coins for network security",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer: "To validate transactions and create new blocks",
  },
  {
    question: "What are non-fungible tokens (NFTs)?",
    options: [
      "Unique digital assets stored on blockchain",
      "Interchangeable cryptocurrencies",
      "Traditional financial instruments",
    ],
    correctAnswer: "Unique digital assets stored on blockchain",
  },
  {
    question: "How does Bitcoin's blockchain ensure transparency?",
    options: [
      "Through centralized data storage",
      "Through decentralized, publicly accessible records",
      "By using a proof-of-stake consensus",
    ],
    correctAnswer: "Through decentralized, publicly accessible records",
  },
  {
    question:
      "What is the purpose of decentralized exchanges (DEXs) on Ethereum?",
    options: [
      "To facilitate centralized trading",
      "To enable peer-to-peer trading without intermediaries",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer: "To enable peer-to-peer trading without intermediaries",
  },
  {
    question: "What is the role of validators in Ethereum's PoS?",
    options: [
      "To mine new coins",
      "To propose and validate blocks",
      "To manage user accounts",
    ],
    correctAnswer: "To propose and validate blocks",
  },
  {
    question: "How does Bitcoin's blockchain ensure immutability?",
    options: [
      "Through centralized control",
      "Through decentralized consensus and cryptographic hashing",
      "By using a proof-of-stake mechanism",
    ],
    correctAnswer: "Through decentralized consensus and cryptographic hashing",
  },
  {
    question: "What is the purpose of stablecoins on Ethereum?",
    options: [
      "To facilitate high-risk trading",
      "To provide a stable store of value pegged to traditional currencies",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer:
      "To provide a stable store of value pegged to traditional currencies",
  },
  {
    question:
      "What is the purpose of decentralized autonomous organizations (DAOs)?",
    options: [
      "To facilitate centralized decision-making",
      "To enable decentralized governance and decision-making",
      "To manage traditional organizations",
    ],
    correctAnswer: "To enable decentralized governance and decision-making",
  },
  {
    question: "What is the role of cryptography in blockchain security?",
    options: [
      "To enable centralized control over transactions",
      "To secure transactions and control the creation of new units",
      "To manage cryptocurrency exchanges",
    ],
    correctAnswer:
      "To secure transactions and control the creation of new units",
  },
];
