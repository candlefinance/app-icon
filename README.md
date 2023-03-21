Update your apps icon on iOS using Apples alternate icons [API](https://developer.apple.com/documentation/uikit/uiapplication/2806818-setalternateiconname).

## Installation

```sh
yarn add @candlefinance/app-icon
```

## Features

- ✅ Supports the new React Native architecture
- ✅ Simple async API
- ✅ TypeScript support

## Pre-requisites

To add icons to your iOS app you need to:

1. Add the icons to your Xcode project, simply create a new folder and add your icons in at 2x (120 x 120) and 3x (180 x 180) sizes. See the [example app](./example/ios/AppIcons) for reference.

2. Update your `Info.plist` to include the names of your icons. See the [example](./example/ios/AppIconExample/Info.plist) for reference or add the following to your `Info.plist`:

```xml
<key>CFBundleIcons</key>
<dict>
    <key>CFBundlePrimaryIcon</key>
    <dict>
        <key>CFBundleIconFiles</key>
        <array>
            <string>Icon-1</string> <!-- Default icon -->
        </array>
        <key>UIPrerenderedIcon</key>
        <false/>
    </dict>
    <key>CFBundleAlternateIcons</key>
    <dict>
        <key>AppIcon-2</key> <!-- Alternate icon name that you can set when calling the API below -->
        <dict>
            <key>CFBundleIconFiles</key>
            <array>
                <string>Icon-2</string> <!-- Alternate icon name must match the icon file name from first step -->
            </array>
            <key>UIPrerenderedIcon</key>
            <false/>
        </dict>
    </dict>
</dict>
```

For more info check out the this [tutorial](https://www.hackingwithswift.com/example-code/uikit/how-to-change-your-app-icon-dynamically-with-setalternateiconname) by Paul Hudson.

## Usage

Check out the (example)[./example/src/index.tsx] app for a full working example.

```js
import { getIconName, setIconName } from '@candlefinance/app-icon';

const [icon, setIcon] = React.useState('default');

// Get icon name
getIconName()
  .then((name) => {
    setIcon(name);
  })
  .catch(console.error);

// Set icon name or no argument to reset to default
setIconName('AppIcon-2')
  .then((name) => {
    setIcon(name);
  })
  .catch(console.error);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
