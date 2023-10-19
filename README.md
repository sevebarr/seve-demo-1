# Spelling Bee Solver
![Screen Shot 2023-08-10 at 11 50 34 AM](https://github.com/sevebarr/seve-demo-1/assets/27875899/9551a855-c259-492f-a1f4-72d189f485a7)

This code aims to build out an algorithm to solve the NYTimes Spelling Bee. The front end mimics the NYTimes Spelling Bee Game and returns a list of valid words.

You can find a deployed version here: 
- https://spelling-bee-solver-web.onrender.com/

## Notes:
- The dictionary used for looking up words is not the same as the NYTimes Spelling Bee Game. It was sourced from an online dictionary which may include additional words or missing words compared to the NYTimes. The NYTimes the built-in Apple dictionary, which is based on New Oxford American, and Merriam-Webster's online dictionary. 
- The 

## To Run
To initialize the backend api, navigate to the `/api` directory and run `flask run` in your terminal. It should now be running on localhost 5000. 
To initialize the frontend, navifate to the `/web` directory and run `npm start` in yoru terminal. It should now be running on localhost 3000


## To-do List
###### Backend

- [x] Add dictionaries
- [x] Filter list to contain center letter
- [ ] Determine if word is panagram
- [ ] Determine if panagram is perfect
- [ ] Create Hints API
- [ ] Create rank scoring API

###### Frontend

- [x] Build UI to show all answers
- [x] Add character inputs - separate boxes with auto tabbing
- [x] Prevent duplicate letters from being submitted
- [ ] Display Hints (Bingo, Two Letter List)
- [ ] Get today's letters from NYTimes Spelling Bee
- [ ] Calculate rank scoring
