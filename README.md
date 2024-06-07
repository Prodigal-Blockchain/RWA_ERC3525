# RWA_ERC3525

# ERC-3525 Semi-Fungible Token (SFT) Example

## Overview

ERC-3525 introduces semi-fungible tokens that combine features from ERC-20 and ERC-721. These tokens have unique IDs and a value property, making them suitable for various use cases.

## Motivation

- Traditional fungible tokens (ERC-20) lack individuality, while non-fungible tokens (ERC-721) lack quantitative features.
- ERC-3525 aims to bridge this gap by creating semi-fungible tokens that combine uniqueness and quantifiability.
- It provides a flexible way to represent fractional ownership, financial instruments, and other use cases.

## Features

- **Unique ID**: Each token has a unique ID, similar to ERC-721.
- **Value Property**: Represents the quantitative aspect of the token (like an ERC-20 balance).
- **Slot Attribute**: Ensures fungibility within the same slot.
- **Transfer Models**: Introduces new transfer models for semi-fungibility.

## Use Cases

1. **Fractional Ownership**:

   - Represent partial ownership of real estate, art, or other assets.
   - Allow users to hold a fraction of an asset without needing to own the entire thing.

2. **Financial Instruments**:

   - Create bonds, insurance policies, or vesting plans as semi-fungible tokens.
   - Enable fractional ownership of financial instruments.

3. **Liquidity Pools**:
   - Enhance liquidity management by representing shares in liquidity pools.
   - Users can trade these shares while maintaining fungibility.

## Dynamic NFTs for Fractional Ownership

- We've extended this project to include dynamic NFTs.
- These NFT values change over time, responding to external events or user interactions.
- Our dynamic NFTs represent fractional ownership, allowing users to hold a fraction of an asset without needing to own the entire thing.

# AssetRegistry and Leasing Contract README

## Overview

This project consists of two contracts: AssetRegistry and Leasing. AssetRegistry allows owners to register their assets and fractionalize ownership. Leasing facilitates the leasing of assets registered in AssetRegistry. The fees earned from leasing assets are distributed among fractional owners registered in AssetRegistry.

## AssetRegistry Contract

### Purpose

The AssetRegistry contract enables asset owners to register their assets and fractionalize ownership, allowing users to hold a fraction of an asset without owning it entirely.

### Features

- **Asset Registration**: Owners can register their assets, providing details such as asset ID, description, and total supply.
- **Fractional Ownership**: Fractional ownership of assets is facilitated, allowing users to hold a portion of an asset's value.
- **Fractional Price Management**: Asset owners can set the fractional price for their assets.
- **Asset Minting**: Users can purchase new fractional assets by calling the `mintAsset` function.

### Usage

1. **Registering an Asset**:

   - Asset owners can call the `registerAsset` function to register their assets, providing necessary details such as asset ID, description, and total supply.

2. **Fractionalizing Ownership**:

   - Owners can fractionalize ownership by calling the `fractionalizeAsset` function, specifying the asset ID and the amount of ownership to be fractionalized.

   3. **Setting Fractional Price**:

   - Asset owners can set the lease price for their assets by calling the `setAssetLeasePrice` function.

   4. **Purchasing an Asset**:

   - Users can purchase fractionalized assets by calling the `mintAsset` function.

## Leasing Contract

### Purpose

The Leasing contract facilitates the leasing of assets registered in the AssetRegistry. Users can lease assets for a specified duration, and leasing fees earned are distributed among fractional owners of the leased asset.

### Features

- **Asset Leasing**: Users can lease assets registered in the AssetRegistry by specifying the asset ID, duration, and leasing fee.
- **Fee Distribution**: Leasing fees collected are distributed among fractional owners of the leased asset based on their ownership percentage.

### Usage

1. **Leasing an Asset**:

   - Users can lease an asset by calling the `createLease` function, providing the asset ID, duration, and leasing fee.

2. **Setting Lease Price**:

   - Asset owners can set the lease price for their assets by calling the `setAssetLeasePrice` function.

3. **Fee Distribution**:
   - Upon successful leasing of an asset, the leasing fees collected are distributed among fractional owners of the leased asset using `distributeRent`.

### Fee Distribution

- Upon successful leasing of an asset, the leasing fees collected are distributed among fractional owners of the leased asset.
- The distribution is based on the ownership percentage held by each fractional owner.

## Example Workflow

1. Alice registers her artwork in the AssetRegistry contract, specifying the asset details and total supply.
2. Alice fractionalizes ownership of her artwork, allowing Bob and Charlie to own a portion of it.
3. Bob leases Alice's artwork for a month, paying a leasing fee.
4. The leasing fee collected is distributed among Alice, Bob, and Charlie based on their ownership percentages.

## Disclaimer

- This project is provided for demonstration purposes only. It may not be suitable for deployment in production environments without further auditing and testing.

## Installation

1. Clone the Repository

   ```bash
   git clone https://github.com/Prodigal-Blockchain/RWA_ERC3525.git
   cd RWA_ERC3525
   ```

1. Install NPM Packages

   ```bash
   npm install
   ```

1. Compile the Smart Contracts

   ```bash
   npx hardhat compile
   ```

1. Create a `.env` file in the root directory and use the below format for the `.env` file.

   ```env
   RPC_URL="<Replace with your RPC_URL>"
   ETHERSCAN_API="<Replace with your Etherscan API Key>"
   PRIVATE_KEY="<Replace with your Private Key>"
   ```

1. Deploy the Contracts

   ```bash
   npx hardhat run scripts/deploy.js --network NETWORK
   ```

   Replace `NETWORK` with the network you have configured in your Hardhat configuration file (e.g., `sepolia`).

   This repository contains the contracts for the AssetRegistry and LeasingContract deployed on the Sepolia network.

## Contracts Deployed

- **AssetRegistry**: [0xAbDd3Cb8e6Ca545938919Cec9dfabCe4884832FA](https://sepolia.etherscan.io/address/0xAbDd3Cb8e6Ca545938919Cec9dfabCe4884832FA#code)
- **LeasingContract**: [0x7B1C4cD2e18874C60f3c996E53c630b6006bEc95](https://sepolia.etherscan.io/address/0x7B1C4cD2e18874C60f3c996E53c630b6006bEc95#code)
