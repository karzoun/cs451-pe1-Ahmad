# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.







# Input

Users provide data on two forms. In **AddCity**, they enter a city and its country; in **AddCountry**, they enter a country and its currency. Each screen uses two `TextInput`s whose `onChangeText` handlers update local component state. Pressing **Add City** or **Add Country** runs simple validation (non-empty fields) and builds a new object with a generated `id`.

# Process

`App.js` holds the single source of truth using React `useState`: `cities[]` and `countries[]`. The adder functions (`addCity`, `addCountry`) append objects and are passed down as props. The app uses React Navigation: two small stack navigators (**CitiesNav**, **CountriesNav**) are embedded in a bottom tab navigator with four tabs (list + add for each domain). After a successful add, the form clears and navigates to the corresponding list screen. Object shapes: city `{id, city, country, locations:[]}`; country `{id, country, currency}`.

# Output

**Cities** and **Countries** read their arrays from props and render rows inside a `ScrollView`. Each row shows the primary label (city or country) with secondary text (country or currency). When a list is empty, `CenterMessage` displays an informative placeholder. Tapping a city row routes to a detail placeholder. Styling uses `colors.primary` for dividers and backgrounds.
