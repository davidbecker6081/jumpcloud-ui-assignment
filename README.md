# JumpCloud UI Assignment

## Setup
1. Clone down repository
2. `cd` into repository
3. `npm install`
4. `npm run start` - will start `localhost:3000`
5. `npm run test` - will run all tests

## Basic Instructions For Challenge
(after making an account in JumpCloud)
1. List the users in your JumpCloud organization.
2. Create a new user.
3. Update an existing user.
4. Delete a user.
5. Be intuitive and have a clean user experience.

Original Instructions: https://github.com/TheJumpCloud/jumpcloud-ui-assignment

## Available Endpoints from Local Proxy Server

- GET `/api/systemusers`
- GET `/api/systemusers/{id}`
- POST `/api/systemusers`
- PUT `/api/systemusers/{id}`
- DELETE `/api/systemusers/{id}`

Local URL: http://localhost:8005/api/systemusers

## Discussion/Future Considerations
- Add in ActionUseCase and ReducerUseCase as return data types for more structured and standardized return values 
- Add ESLINT
- Loading suspense should be a <Loading> component
- Adding <ErrorBoundary> to catch errors, especially from API requests or component errors
- Add in more specific validation for fields during new user creation
- Could disable the add a new user button if already at user limit and then show a message if hovering over button
- Add some kind of toaster notification (timed popup notification that tells the user they successfully completed a task)
- Reducer could definitely be extracted into more granular pieces (i.e some pretty good examples of a few potential refactors here: https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example)
    - That said, I don't think in this simple case, we really need to do that. But if we were making a large productionapp, probably not a bad thing to do
- I typically don't test the UI Components for the reason being that they typically change quite a bit, and I feel that testing them is not worth the payoff of assurance that they're doing the right thing, since we can see that very easily visually 
    - Usually I will test at the unit level first (business logic, actions/reducers, prop-types, state, etc...) and then if time/resources allow, I might test UI functionality with automated testing (with jest) by exporting the Component separate from the combined Container/Component
- I also chose not to go full coverage on testing, but rather to just show a few examples of different styles of testing/test cases so you could get a quick view of my testing strategies and abilities
- I ended up not using the `GET /api/systemusers/{id}` endpoint because I didn't really have a need for getting a single user with this functionality. The place it might have been used as a different approach would be when updating a user and then re-fetching the user from the list. I felt this to be an unnecessary request, which I replaced with waiting for a success and then updating the user myself. I think if there were fields that got updated on the backend that I was concerned with (i.e. lastUpdated), I would re-fetch so I could get correct values from the backend system, but in this case, no need for a simple app
- I went with plain old CSS rather than using something like SCSS, simply because this is a small app. If this were going to have to scale, I'd absolutely use SCSS for maintainability and re-usability tools that it offers. Right now, there's a lot of repetition in my CSS, which doesn't need to be there. For instance, we could easily create a mixin for all of the popup windows (most of them have the same styling). That's also a point of refactor, to make that into one component rather than 3 different components (i.e Popup for the Error/Confirmation/UserForm components). Another instance would be re-using colors through SCSS variables, which would help organize our stylesheets as well and create a point of reference for various styles.
- There are definitely a few areas of UX where the flow could be a bit better. For instance, if a user clicks on the username to edit, the cursor/focus should already be in the username input field
- HOPE YOU ENJOY!
