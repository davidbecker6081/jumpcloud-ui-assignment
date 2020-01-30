- Add in ActionUseCase and ReducerUseCase as return data types for more structured and standardized return values 
- Test with sinon for mocking API requests
- Add ESLINT
- Loading suspense should be a <Loading> component
- Adding <ErrorBoundary> to catch errors, especially from API requests
- Add in more specific validation for fields during new user creation
- Could disable the add a new user button if already at user limit and then show a message if hovering over button
- Add some kind of toaster notification (timed popup notification that tells the user they successfully updated the user)
- Reducer could definitely be extracted into more granular pieces (i.e some pretty good examples of a few potential refactors here: https://redux.js.org/recipes/structuring-reducers/refactoring-reducer-example)
    - That said, I don't think in this simple case, we really need to do that. But if we were making a large app, probably not a bad thing to do
- Redux styleguide: https://redux.js.org/style-guide/style-guide
- I typically don't test the UI Components for the reason being that they typically change quite a bit, and I feel that testing them is not worth the payoff of assurance that they're doing the right thing, since we can see that very easily visually 
    - Usually I will test at the unit level first (business logic, actions/reducers, prop-types, state, etc...) and then if time/resources allow, I might test UI functionality with automated testing (with jest) by exporting the Component separate from the combined Container/Component
- I also chose not to go full coverage on testing, but rather to just show a few examples of different styles of testing/test cases so you could get a quick view of my testing strategies and abilities
- I ended up not using the `GET /api/systemusers/{id}` endpoint because I didn't really have a need for getting a single user with this functionality. The place it might have been used as a different approach would be when updating a user and then re-fetching the user from the list. I felt this to be an unnecessary request, which I replaced with waiting for a success and then updating the user myself. I think if there were fields that got updated on the backend that I was concerned with (i.e. lastUpdated), I would re-fetch so I could get correct values from the backend system, but in this case, no need for a simple app


1. List the users in your JumpCloud organization.
2. Create a new user.
3. Update an existing user.
4. Delete a user.
5. Be intuitive and have a clean user experience.


GET /api/systemusers
GET /api/systemusers/{id}
POST /api/systemusers
PUT /api/systemusers/{id}
DELETE /api/systemusers/{id}

http://localhost:8005/api/systemusers