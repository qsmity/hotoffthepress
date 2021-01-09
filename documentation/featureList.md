# FEATURES & User Stories
NewsFeed web application focusing on displaying the most current news

MVP Features, User Stories, and Data Schema are outlined below, along with some stretch goals/features

## Features - MVP
- [ ] navigation
- [ ] Landing page that includes information about the site and link to signup/login.
- [ ] Authentication - sign up with username/email/password, login/logout, demo user login. If user tries to navigate to protected portions of site, will be redirected to landing page.
- [ ] newsfeed page that user is directed to upon login that gives general hotline news by default.
- [ ] Bookmarks page for user to save favorite stories
- [ ] Search functionality to view top 25 articles that include the search term
- [ ] ability to view results based on topic/category of headlines
- [ ] ability to share new article to facebook and twitter feeds

## stretch goals
- [ ] accounts page
    - update password
- [ ] search feature allows mult search terms
- [ ] darkmode
- [ ] custom 404 page
- [ ] parallax scrolling for more results 

## User Stories
1. As an unauthorized user, I want to view a landing page that provides me with information about the site, and and navigation to login or singup.
    - Acceptance Criteria:
        - [ ] User can visit the `/` path and will be served a landing page that provides information about the site, a nav bar that includes login link, and header that include signup link
2. As an unauthorized user, I want to be able to sign up for the website via a signup form in order to access protected content.
    - Acceptance Criteria:
        - [ ] User can visit the `/signup` path and will be served a form asking for a username, email, and password.
        - [ ] After user enters valid information for all fields, a new user row is added to the User table, and user is directed to a `/news/:category` page.
        - [ ] If a user enters invalid sign-up information, validation erros will be presented to use
        - [ ] If a user enters an email or username that is already in use for another user, they receive a message indicating such, with a link to `/login`
        - [ ] Session should last 1 day
        - [ ] Use auth with JWT 
3. As an unauthorized user, I want to be able to login to the website, via a form, in order to access my private information.
    - Acceptance Criteria
        - [ ] User can visit the `/login` path and will be served a form requesting email and password, along with link to sign-up page and back to landing page.
        - [ ] After user enters valid login information, the user is redirected `/new/:category` page.
        - [ ] After user successfully logs in, JWT is saved to cookie with exp of one week (60,000 secs)
        - [ ] If a user enters incorrect log-in information, they receive validation error messages.
4. As an authorized user, I want to be able to log out of the application in order to protect my private information.
    - Acceptance Criteria
        - [ ] From any protected page on the site, the user can click a "Log out" link, which will manually delete their JWT cookie (logging them out), and redirecting them to the landing page `/` .
5. As an authorized user, I want a clear and consistent way to navigate across the site.
    - Acceptance Criteria
        - [ ] landing page `/`:
            - login link (nav bar)
            - signup link (header)
        - [ ] news page `/news/:category`
            - nav bar (with search bar)
            - drawer/sidebar (with other categories)
                - general, business, tech, entertainment, sports, science, health
        - [ ] search results page
            - nav bar (with search bar)
            - drawer/sidebar (with other categories)
        - [ ] signup page
            - login page link
            - landing page link
        - [ ] login page
            - signup page link
            - landing page link
        
6. As an authorized user, I want to be able to search current news by title, topic/category, or description.
    - Acceptance Criteria
        - [ ] User can use search bar in the nav bar with search term quering the title, topic, or description and the user is redirected the results page `/news/search` displaying them. 

7. As an authorized user, I want to be able to navigate to the site where the story was published to find more information and read the full story.
    - Acceptance Criteria
        - [ ] User is redirected to the news story url when clicked

8. As an authorized user, I want to be able to view top 25 news results to start for a particular category then load more when interested. 
    - Acceptance Criteria
        - [ ] load more button to get 25 more results
        - [ ] refresh button to get most current result

9. As an authorized user, I want to be able to bookmark and share my favorite stories
    - Acceptance Criteria
        - [ ] click on bookmark button which save the news story to the database under the user's bookmarks
        - [ ] click on share which will allow user to share to facebook and twitter feeds



## Data Schema
Using MongoDB and Mongoose hosted by atlas

1. Users
    - username
    - email
    - password (bcrypt hash)
    - bookmarks (favorite news stories)


## Frontend Routes
- `/` Landing Page
- `/signup` Signup Page
- `/login` Login Page
- `/news/:category` particular news topic
- `/new/search` search results
- `/user/profile` account setting - stretch goal
- `/user/bookmarks` saved news stories

## Backend Routes
- `/api/user/token` login 
- `/api/user/signup` signup 
- `/api/user/logout` logout
- `/api/user/bookmarks` retrieve, update, remove bookmarks

## State Shape (Redux)
```JS
{
    session: {
        // Session Data Here
    },
    bookmarked: {
        // users bookmarks stories for easy access
    },
    validationErrors: {
        // errors for login and signup forms
    },

}
```