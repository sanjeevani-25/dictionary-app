# Dictionary App

This is a dictionary app that allows users to search for word definitions. It is built using JavaScript and utilizes the DictionaryAPI to retrieve word definitions and related information.

## Features

- Word Search: Users can enter a word and retrieve its definition.
- Pronunciation: The app provides the pronunciation of the searched word.
- Part of Speech: The app displays the part of speech of the word.
- Definitions: Multiple definitions for a word are shown, along with examples if available.
- Audio Playback: Users can listen to the pronunciation of the word.

## Demo

[Dictionary app demo](https://github.com/sanjeevani-25/dictionary-app/assets/96921605/136350f1-bcf7-4e43-9f64-487dbc156f09)

## Technologies Used

- JavaScript: The app is built using JavaScript to handle the logic and functionality.
- HTML/CSS: The user interface is designed using HTML and CSS for styling and layout.
- DictionaryAPI: The app integrates with the DictionaryAPI to fetch word definitions and related information.

## Installation

To run this dictionary app locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/dictionary-app.git
   ```

2. Navigate to the project directory:

   ```
   cd dictionary-app
   ```

3. Open the `index.html` file in your preferred web browser.

## API Integration

This dictionary app integrates with the DictionaryAPI to fetch word definitions. The `const url` variable in the JavaScript code holds the base URL for the API. Make sure to replace it with the appropriate URL if you are using a different API.

```javascript
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
```
## Acknowledgements

- [DictionaryAPI](https://dictionaryapi.dev/) - The API used to retrieve word definitions and related information.
