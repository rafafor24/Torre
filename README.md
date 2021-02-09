# Torre
Torre Technical Test
# Dev Log Rafael Forero
# Why vue.js for the front-end?
I decided to use vue.js for this project in order to challenge myself, this was the very first time I am using it besides a tutorial I watched on Friday. I have experience using React and Angular but for a while now I was willing to try something new and my friends and colleagues recommended vue.js and it is becoming popular, so I said: "Why not?"
# Why Node.js with Express for the backend
Since I was going to learn a new framework from 0, I decided to use a more known technology for me, I am not that crazy. Also is cool to use the same programming language for both backend and frontend, Typescript.

# Saturday 6th of February: Brainstorming
I used this day mostly for brainstorming, I leaned on my friends and family for some ideas and make a mix of all of them. The basic idea was to at least have 1 cool feature for a user looking for a job and for an organization that post a job.

I planned some hour shifts to work based on my available time in this way:
Saturday: 6am-11am just brainstorm
Sunday: 10am-12m Code, 6pm-11pm Code
Monday: 4pm-11pm Code

The initial ideas were:
- A organization wants to compare their opportunity with similar opportunities in the platform, receive a rank and information of how to make the opportunity attractive.
- A user wants to search for an opportunity just using a word or simple phrase
- A user wants to know what the best courses are he can take so that he can be better suited for a specific opportunity (This one was forgotten for some problems with the courses API sadly)

This day the only code related thing I did was to create the git repo in GitHub.

# Sunday 7th of February: Skeletons
10 am - 12 am: I started working on the skeleton for the front end, using the Vue ui I initialize the project using Typescript, vuex and Vue-router. I also added Jest for unit Testing, but I felt short on time and my TDD is just a dream for now. I created some basic views and implemented a search by organization name to test the components. I had some dependencies problems that I managed to fix, and everything was ok.

6pm - 10:30pm: I started working on a details page for the searched opportunity with the state, actions and mutations related. After that I initialized an express typescript basic project on the same repository.
# Monday 8th of February: State of Flow
4pm - 8pm for the backend I coded a basic get for similar opportunities just based on skills. The for the front end I refactor some component so I could reuse then in the project and made the style a little better. Having both ends with functional code I decided to deploy both ends in Heroku so I can track better the changes and receive some feedback from friends. I needed to update some dependencies on both projects, so it builds well in Heroku. I stated testing the courses API, at the start it was ok but encountered some big problems in the limits of calls and in the params limit for the queries. I stopped using the time for that and took a break.

8:30pm - 12pm I added a random Shibu image at the start page and decided the memeish theme of the project. I refactor some styles to make them global so I could reuse then and avoid repeated code. I fixed the behavior of the buttons, so it is consistent for both screens.
# Thursday 9th of February: I do not want to sleep
12pm -4am I worked in the style of the page using emojis, images, better colors, better fonts and responsiveness of the app. I implemented the search by any term using some regular expressions and filters/maps. I added mock ranking images to the opportunity 'profile' page.

4am I left for the end the redaction of this log based on my notebook doodles and notes.

# What would be next? What is missing?
- Continue making the ranking system more robust.
- Implementing some security to the backend so only the front-end app could make those requests.
- Implement the course search API in another component and pay for it I supposed (There is no free API for searching courses).