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