## INFO 
For infinite scrolling, react-infinite-scroll was used. 
For UI, some Mantine components were used.
Redux toolkit was used for state management and RTK Query was used for data fetching.

There were some issues with the provided API. The pagination for v2 is broken, it always returns all results even if the query ?start=N is provided. I tried using v1 and pagination did work with it, but it always returned the first 1000 results. I had to make a workaround to get infinite scrolling working. I fetch all results, store it in allLeaderboardResults and set the initial state for the leaderboardItems. Everytime the infinite scroll component needs more data, it slices the allLeaderboardResults in the current pagination index and concats it in the leaderboardItems.
