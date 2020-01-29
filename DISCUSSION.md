- Add in ActionUseCase and ReducerUseCase as return data types
- Extract methods as reducer utilities (check Micah's example)
- Constants file
- Use 'MovieController' like in other assignment to make server requests
- Test with sinon
- Add ESLINT
- Loading suspense should be a <Loading> component
- Adding <ErrorBoundary> to catch errors, especially from API requests
- Add in validation for fields during new user creation

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