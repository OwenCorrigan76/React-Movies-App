
# ICT Skills 2 Assignment.

Name: Owen Corrigan
GitHub Reopsitory - https://github.com/OwenCorrigan76/assignment-ict2
## Overview.
This app is a Movie App that features movie and Tv shows, details, reviews and actors. The information is taken from REST api endpoints taht are part of the TMDB api. Along with a feature set provided in previous college labs, the new / modified features include:

+ Feature 1 - Similar Movies
+ Feature 2 - Popular Actors
+ Feature 3 - Tv Shows
+ Feature 4 - Top Rated Movies
+ Feature 5 - Favourite Tv Shows
+ Feature 6 - Actors Biography
+ Feature 7 - Updated Storybook
+ Feature 8 - Firebase Login / Authetication
+ Feature 9 - Updated UI



## Setup requirements.
To run the program, firstly pull from the git repository shown above. Once the repo is on a local machine, open the program in an IDE. This program will be run using Node.js. The packages and dependencies can be retrieved by running npm install. A .env file must be introduced with the following information:
REACT_APP_TMDB_KEY=<<api key>>
FAST_REFRESH=false To run the program, type npm start.
The api key can be retireved when the user signs up to the TMDB api. This can be done by following this link:
https://www.themoviedb.org/signup

## App Design.
The app has been slightly modified to utilise some new css styling throughout. The colours of the pages have been modernised using bright and fresh clours. The layout is simple with each page being accesible from the site header nav bar.  

### Routing/Navigation.

Below is a list of the set of routes this app supports:

+ /movies/:id - detailed information on a specific movie.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ etc.
+ etc.

### Views/Pages.

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.

![][d1]

![][d2]

>Shows detailed information on a specific movie

![][detail]


### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[d1]: ./public/discover1.png
[d2]: ./public/discover2.png
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png