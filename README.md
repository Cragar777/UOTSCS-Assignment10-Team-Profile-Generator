# UOTSCS-Assignment10-Team-Profile-Generator

**Description:**

The Team-Profile-Generator app allows the user to generate a webpage with their teams basic info so that it's easy to access. It runs in Node.js on the command line, utilizes Jest testing and provides an formatted HTML output. The output contains the Manager of the team along with the Engineer's and Intern's of the team and their basic information.

**User Story:**
```
AS A manager
I WANT to generate a webpage that displays my teams basic info
SO THAT I have quick access to their emails and GIthub profiles
```
**Acceptance Criteria:**
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the aplpication
THEN I am prompted to enter the team manager's name, employee ID, email address, and office number
WHEN I enter the team manager's name, employeeID, email address, and office number
THEN I am presented with a menu with the option to add an enginneror an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer's name, ID, email, and GItHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern's name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
**Application Photo:**

![Team-Profile-Generator Screenshot](https://user-images.githubusercontent.com/85413293/142669893-6b0d6ca0-2eb4-46ff-9117-2a9471aa6c3f.png)


**Link to Walkthrough Video:**

https://watch.screencastify.com/v/b8FKwYXhQ4iLQA0luYz3
