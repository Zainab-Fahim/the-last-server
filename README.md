> Know for certain 💯 if you are the last to serve dinner  🍽️No more unrefrigerated 😩 overnight dinner remains🤞 

## Inspiration
Just a few days back I was woken up by my angry father, which rightfully had to be directed to my brother because he was the culprit. He was the one to last serve dinner, and by the unsaid law, was the one responsible to keep the remaining in the refrigerator. Turns out he thought that I hadn't served dinner yet, and assumed I was the last one.  

## What it does
Registers the family information in the database, and on trigger sends tasks status and information.
I used Twilio to create a Whatsapp chat service
I used Velo to create the front-end, back-end database and to integrate Twilio into the project

## How we built it
Used twilio studio to control the flow of the tasks
Used twilio functions, to host serverless functions
Used wix-data as the back-end database
Used wix-http-functions to expose the site URL for both get and put functions

## Challenges we ran into
Using wix-http functions to get access to the wix database was a tricky hurdle to overcome
Getting `axios.put()` function to work
## Accomplishments that we're proud of
Using twilio studio, wix http function, serverless function

## What we learned
Twilio Studio- Ever since twilio's announcement to discontinue autopilot was made, I wanted to give studio a try so that I can get a better hold of the same functionality and migrate to studio. this was a great opportunity to put the skills into use.
Twilio Functions- Serverless functions are on the rise, and using Twilio functions was a great experience
wix-http-functions - From what axios is, to discovering the existance of the concept of exposing a site's API I've learned everything inbetween.
Twilio - Wix Integration

## What's next for the-last-server
For now the-last-server only supports a single functionality at a time. Perhaps with time, I plan the-last-server to act as a reference point for many tasks at a time.

- [Webhook URL](https://webhooks.twilio.com/v1/Accounts/ACeb848ce8368e906c1052a89f99047241/Flows/FW17ceddf3463be53fae75538bd3d3d089)
- `set-task-complete` [function URL](https://the-last-server-1861.twil.io/set_task_complete)
