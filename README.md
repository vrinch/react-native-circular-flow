# React Native Circular Flow

A customizable, animated circular flow and progress indicator for React Native, built with TypeScript, `react-native-reanimated`, and `react-native-svg`.

## Demo

![Circular Flow Demo](/assets/demo.gif)

## Installation

```bash
npm install react-native-circular-progress
```

### Dependencies
This component requires:
- `react-native-reanimated`
- `react-native-svg`

Install them with:
```bash
npm install react-native-reanimated react-native-svg
```

## Usage

Import and use the `CircularProgress` component in your React Native app:

```jsx
import CircularProgress from 'react-native-circular-progress';

const App = () => {
  return (
    <CircularProgress
      size={120}
      strokeWidth={12}
      progress={75}
      duration={1500}
      value="75%"
      strokeColor="#DA1830"
      strokeBackgroundColor="#E0E0E0"
      textStyle={{ fontWeight: 'bold' }}
      fontSize={24}
      textColor="#333333"
      showProgress={true}
    />
  );
};
```

## Props

| Prop                   | Type      | Default          | Description                                      |
|------------------------|-----------|------------------|--------------------------------------------------|
| `size`                 | `number`  | `100`            | Diameter of the circle                           |
| `strokeWidth`          | `number`  | `10`             | Width of the progress stroke                     |
| `progress`             | `number`  | `0`              | Progress value (0 to 100)                        |
| `duration`             | `number`  | `1000`           | Animation duration in milliseconds               |
| `value`                | `string`  | `undefined`      | Custom text to display (overrides progress %)    |
| `strokeColor`          | `string`  | `'#DA1830'`      | Color of the progress stroke                     |
| `strokeBackgroundColor`| `string`  | `'#E0E0E0'`      | Color of the background stroke                   |
| `textStyle`            | `TextStyle` | `{}`           | Custom styles for the text                       |
| `fontSize`             | `number`  | `size * 0.22`    | Font size of the text                            |
| `fontFamily`           | `string`  | `'System'`       | Font family for the text                         |
| `textColor`            | `string`  | `'#333333'`      | Color of the text                                |
| `allowFontScaling`     | `boolean` | `false`          | Whether text scales with device settings         |
| `showProgress`         | `boolean` | `true`           | Show progress percentage if no custom `value`    |

## License

MIT