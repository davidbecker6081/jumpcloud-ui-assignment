- Add in ActionUseCase and ReducerUseCase as return data types
- Extract methods as reducer utilities
- Test with sinon
- Add ESLINT
- Loading suspense should be a <Loading> component
- Adding <ErrorBoundary> to catch errors, especially from API requests
- Add in more specific validation for fields during new user creation
- Could disable the add a new user button if already at user limit and then show a message if hovering over button

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