# 10hourlab-cryptomania

<!-- PROJECT LOGO -->
<br />
<p align="center">
 
  <h3 align="center">10Hour Labs Cryptomania App</h3>

  <p align="center">
    An awesome Portfolio Manager for Amy to keep track of coin purchases
    <br />
    
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
     <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This is a Portfolio Manager for Amy with the following features

- Amy can add coins, unit purchased, the total price
- The same coin can be added multiple times as she dollar cost average when buying these tokens to minimize her loss.
- Amy’s primary currency is CAD but she can see the price in USD and Renminbi(CNY).
- Amy can set a target percentage for each coin in her portfolio for when to sell. If a percentage is not set, the app defaults to 25%
- Amy can quickly know if there’s a percentage increase/decrease in any of her assets
- Amy can refresh the page to see real time updates.

### Built With

This project was built with Expo-Cli and Redux for state management there are other major required frameworks that can be found in the package.json file of the project

<!-- GETTING STARTED -->

## Getting Started

These are instructions for setting up the project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

- yarn
  ```sh
  yarn install
  ```

### Installation

1.  Clone the repo

```sh
git clone https://github.com/faaiz-hadaina/10hourlab-cryptomania.git
```

2. Install yarn packages
   ```sh
   yarn install
   ```
3. Run the project on your development machine
   ```JS
   yarn start
   ```

<!-- USAGE EXAMPLES -->

## Usage

Once the app loads, it will allow you to select two different csv files, currency and portfolio, the app is configured not to recorgnize other type of files. You can click the Delete all Uploaded Files menu on the User Avatar icon to delete and reset the app.
An android build has been provided below for quick testing.

https://expo.dev/artifacts/64f980cc-a18a-4b31-a479-feb9c9dfa526

Thanks
