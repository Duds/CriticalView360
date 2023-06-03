## Currently working on
"As a user, I want to be able to reset my password, so that I can regain access to my account if needed":

- ~~Add a "Forgot Password" link/button on the login page.~~
- ~~Create a new page or modal for the password reset process.~~
- ~~Implement a form for users to enter their email address for password reset.~~
- Validate the email address entered by the user.
- Generate a unique reset token for the user and associate it with their account.
- Send an email to the user's email address with a link containing the reset token.
- Create a route or endpoint to handle the password reset link.
- Verify the reset token and ensure it is still valid.
- Present a form for the user to enter and confirm their new password.
- Validate the new password for complexity and length requirements.
- Hash and securely store the new password in the database.
- Update the user's account with the new password.
- Display a success message to the user indicating that their password has been reset.
- Redirect the user to the login page or provide a link to log in again.

## Documentation of Progress:

2. Material-UI Styling:
   - Implemented basic Material-UI styling for the project.
   - Applied Material-UI components and styles to Landing, Header, Footer, Register, Login, and NotFound components.
   - Integrated Material-UI typography, buttons, forms, and layout components.

3. Dashboard Improvements:
   - Need to add logged-in user features to the Dashboard.
   - Update the Dashboard component to display a personalized welcome message to the user.
   - Retrieve user data from MongoDB and dynamically display the user's name in the welcome message.

4. Backlog Refinement:
   - Plan to spend time refining the backlog and reprioritizing tasks.
   - Prioritize focusing on the implementation of bow ties and related functionalities.
   - Evaluate and reorder tasks based on the current project requirements and user needs.

5. Implementation of Berry Dashboard:
   - Plan to integrate the Berry Dashboard UI kit into the project.
   - Follow the documentation provided by CodedThemes to implement the Berry Dashboard on top of the existing Material-UI implementation.
   - Enhance the project's styling and visual appeal by leveraging the pre-built components and styles offered by Berry Dashboard.

## Next Steps:

1. Implement Logged-In User Features:
   - Implement user-specific functionalities, such as displaying user-specific data or providing access to user-specific settings.

2. Refine Backlog and Reprioritize Tasks:
   - Review the current backlog and make necessary adjustments.
   - Prioritize the implementation of bow ties and related functionalities.
   - Ensure the tasks align with the project requirements and user needs.

3. Implement Berry Dashboard:
   - Follow the documentation provided by CodedThemes to integrate the Berry Dashboard UI kit into the project.
   - Replace the current rudimentary Material-UI styling with the enhanced and polished styles provided by Berry Dashboard.
   - Customize and fine-tune the components and styles to match the project's requirements and desired visual aesthetics.

By focusing on these priorities, refining the backlog, and integrating the Berry Dashboard, you will be able to enhance the user experience, improve the visual appeal of the project, and progress towards implementing the core features, such as bow ties.

## Additional TODOs:

- Implement improved dashboard templating:
  - Refactor existing dashboard component into smaller reusable components:
    - Create separate components for header, sidebar, and main content
    - Break down main content into smaller components based on functionality
  - Implement responsive design for different screen sizes
  - Apply appropriate styling and CSS classes for consistent layout

- Fetch the user's name:
  - Create an API endpoint to retrieve user data from the backend
  - Implement a function to make a GET request to the user endpoint
  - Store the user's name in the component's state or context

- Fetch the user's list of cards:
  - Create an API endpoint to retrieve the list of cards associated with the user
  - Implement a function to make a GET request to the cards endpoint
  - Store the list of cards in the component's state or context

- Write a completed /about page:
  - Create a new route for the /about page in the server
  - Design and structure the about page content
  - Add relevant information about the project, its purpose, and goals
  - Include team members' profiles and their contributions
  - Format and style the page using appropriate CSS classes and styles

- Write a completed /faq page:
  - Create a new route for the /faq page in the server
  - Design and structure the FAQ page content
  - Compile a list of frequently asked questions and their answers
  - Organize the questions and answers into sections or categories
  - Apply appropriate formatting and styling to enhance readability

- Write a completed /contact page:
  - Create a new route for the /contact page in the server
  - Design and structure the contact page content
  - Include a contact form or contact information for users to reach out
  - Implement form validation and handling of user submissions
  - Apply appropriate styling and formatting for a user-friendly interface

- Refactor "Fetch the user's name and list of cards..." into two TODOs:
  - Fetch the user's name:
    - Create an API endpoint to retrieve user data from the backend
    - Implement a function to make a GET request to the user endpoint
    - Store the user's name in the component's state or context
  - Fetch the user's list of cards:
    - Create an API endpoint to retrieve the list of cards associated with the user
    - Implement a function to make a GET request to the cards endpoint
    - Store the list of cards in the component's state or context

