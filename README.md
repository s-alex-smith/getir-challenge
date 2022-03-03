# Getir Challenge

A simple app built using react that uses axios to access json data hosted on a my-json-server and displays the information in the form of a list. Each item is initially shown as 'To do', but can be toggled, with the use of Redux, to show as completed. New items can be added to the list, as well as individually removed from the list. There are also four sort buttons, allowing the user to order the list alphabetically (a-z and z-a) by the action, and also sorted by status.

## Installation

Fork this repo and use the following command in your terminal:

```
  git clone https://github.com/s-alex-smith/getir-challenge
```

Once open, install the necessary dependencies by using the following:

```
npm install
```

To run the project locally, use the following command:

```
npm start
```

You will now be able to run the project locally on your desktop.

## Future improvements

This project was built within a time constraint, and so some functionality may not be as developed as I would normally like, for instance:

- add unit tests
- add filter function
- accommodate different screen sizes
- as the app grows a loader could be shown while processing a GET or POST request

### Complications

This was my first attempt at utilising Redux, and I admit I struggled balancing the state between Redux and the GET request. This was made more difficult by not being able to able to add, or update, items on the server (as it is just a mock) and I struggled to use Redux to filter the list as a result.
