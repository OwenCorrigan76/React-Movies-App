
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

![][i1]
### Routing/Navigation.

Below is a list of the set of routes this app supports:

+ "/" - home page with list of movies.
+ /movies/:id - detailed information on a specific movie.
+ /movies/upcoming - lists movies soon to be shown in cinemas.
+ /movies/favourites - list of favourite movies.
+ /movies/top_rated - list of top rated movies.
+ /movies/:id/similar - list of top similar movies.
+ /movies/top_rated - list of top rated movies.
+ /reviews/:id - review of specific selected movie.
+ /reviews/:form - add a review of specific selected movie.
+ /tvShows/tv - list of tv shows.
+ /tvShows/tv:/id - detailed information on a specific tv show.
+ /tvShows/favourites - list of favourite tv shows.

<br/>

### Views/Pages.

### 1 Tv Show Pages View
![][i2]
<br/>

### 2 Tv Show Details Page
![][i3]
<br/>

### 3 Tv Show Review Page
![][i4]
<br/>

### 4 Favourite Tv Show Page
![][i5]
<br/>

### 5 Top Rated Movies Page
![][i6]
<br/>

### 6 Popuar Actors Page 
![][i7]
<br/>

### 7 Actors Detail Page
![][i8]
<br/>

### 8 Similar Movies Page
![][i9]

<br/>

[ For each view in your app, show a screenshot and caption - only new/modified ones in the case of the Movies Fan app. If necessary, use multiple screenshots to cover a view's full capability.

e.g.
>Lists movies from the Discover endpoint. Filtering on title and genre attributes is supported.


>Shows detailed information on a specific movie

![][i5]

<br/>
### Component catalogue.

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][i4]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][i3]

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

[i1]: ./public/i1.png
[i2]: ./public/i2.png
[i3]: ./public/i3.png
[i4]: ./public/i4.png
[i5]: ./public/i5.png
[i6]: ./public/i6.png
[i7]: ./public/i7.png
[i8]: ./public/i8.png
[i9]: ./public/i9.png

