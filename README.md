# cs451-pe1-Ahmad

## Input
The user opens the app by scanning the QR code or running the web version. No further user input is required.

## Process
The program loads the main component HelloWord.js, which imports React Native components. The component renders a view containing a text label with my name. Expo processes the code and serves it via the development server.

## Output
The output is the display of a centered text message: "Hello, I am Ahmad Al-Karzoun!" on the screen, showing that the app works correctly and displays static content as expected.


## PE02
## Input

The app has one input field where users can type in the course they liked (e.g., “CS624”). This doesn’t affect the display yet, but it shows how users can interact with the app. The rest of the information is built into the app and doesn’t change based on user input.

## Process

When the app runs, it uses React Native components like View, Text, TextInput, and ScrollView to build and display the screen. Styling is done using StyleSheet.create() with inline styles. The course data is grouped into sections like Core Requirements, Depth of Study, Electives, and Capstone, and each section is clearly labeled with a yellow background.

## Output

The final result is a clean, scrollable screen showing course information in different categories. The section titles stand out in yellow, and each course is listed underneath. The app works on both web and mobile using Expo, giving users a quick view of program details.