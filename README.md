
### Newsfeed application

[Live Link](https://aabluejay.herokuapp.com/)

## Features
- [Features Overview](#Features-Overview)
- [Purchase history](#Purchase-history)
- [Dynamically updated crypto currency search bar](#Dynamically-updated-crypto-currency-search-bar)
- [Dynamically generated stockcharts candlestick graph](#Dynamically-generated-stockcharts-candlestick-graph)
   - Coingecko stocks API integration
- [Crypto currency buying power simulator](#Crypto-currency-buying-power-simulator)
- [Sparkline integration](#Sparkline-integration)
- [User crypto currency list (watchlist)](#List)
- [CSRF protection on login and sign up forms](#CSRF-protection-on-login-and-sign-up-forms)
   - User authentication and authorization
- [Todo](#Todo)


## Technologies/Languauges
- Express.JS
- Mongoose
- Atlas
- React/Redux
-  [datanNewApi](https://datanews.io/docs)
- TypeScript

## Notable packages
- Materialui
- SASS(node-sass)
- React Icons
- bcrypt
- js-cookie
- JWT
- CORS

## Installation
1. Clone the repository

   ```bash
   $ git clone https://github.com/qsmity/hotoffthepress.git
   ```
2. Install dependencies
   ```bash
   $ cd client && npm install
   $ cd server && npm install
   & cd server && tsc -w
   ```

3. Create Mongodb databse and user

   - database name: `hotoffthepress`
   - collection name: `users`


4. create a .env and add configuration modeled below:

   ```
    DATABASE_URI=<<mongoose atlas uri used here>>
    PORT=8080
    JWT_SECRET=<<use hex code here - safer>>
    JWT_EXPIRES_IN=604800 // equal to 1 week
    API_KEY=<<super_secret_key>>    
   ```

   >NOTE: There is also a .env.example file in the root directory of the model
   

## Features Overview

`HotOFFThePress` is a news feed web application that displays current headlines from 7 different categories: `Business, Generel, Sports, Science, Health, Entertainment, and Tech`. This was a major design decision for me to choose to split up the functionality in 7 different topics as opposed to aggregating them all at once. This approach is more pleasant for the user to view stories of related topics, and it proposes a challenge to make the site structured, dynamic, and partiitioned. 

The [datanNewApi](https://datanews.io/docs) was used to collect this data. It was simple to work with, and provided all previously proposed categories along with image and article url's for the user to explore further. 

The biggest challenge was incorporating Typescript on the Front End (React) as well as the Back End, as I am still new to the language. I quickly found that Typescript, although time consuming in the beginning, was a more efficient approach and I had few errors to debug because of it. 


## Todo
- [ ] Add search functionality
- [ ] Add filtering
- [ ] Add ability to save Bookmarked stories