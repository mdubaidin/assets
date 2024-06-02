# Developer Documentation: useSnack Hook

The `useSnack` hook is a custom React hook that provides a convenient way to display snackbars with alerts using the Material-UI library (`@mui`).

## Installation

To use the `useSnack` hook, ensure that you have installed the Material-UI library. You can install it via npm or yarn:

```bash
npm install @mui/material
```

or

```bash
yarn add @mui/material
```

## Importing the Hook

To use the `useSnack` hook in your React component, you need to import it as follows:

```javascript
import useSnack from './useSnack';
```

## Usage

The `useSnack` hook returns an object containing two properties:

1. `SnackBar`: A React component that renders a Snackbar from Material-UI.
2. `showMessage`: A function to show the Snackbar with a specified severity and message.

### Example

Here's an example of how you can use the `useSnack` hook in your React component:

```javascript
import React, { useEffect } from 'react';
import useSnack from './useSnack';

function MyComponent() {
    const { SnackBar, showMessage } = useSnack();

    useEffect(() => {
        // Show a success message after 2 seconds
        setTimeout(() => {
            showMessage({ success: 'Operation completed successfully' });
        }, 2000);
    }, []);

    return (
        <div>
            <h1>My Component</h1>
            {/* Render the Snackbar component */}
            {SnackBar}
        </div>
    );
}
```

In the example above, the `useSnack` hook is used to initialize the `SnackBar` component and the `showMessage` function. The `useEffect` hook is used to show a success message after 2 seconds.

To show a message using the `showMessage` function, pass an object with the severity as the key and the message as the value. The severity can be one of the following: `'success'`, `'error'`, `'warning'`, or `'info'`.

## Customization

The `useSnack` hook provides a basic Snackbar component, but you can customize it according to your needs. You can modify the Snackbar component within the `SnackBar` property of the returned object.

For example, you can add additional props to the Snackbar component or style it using Material-UI's styling solution.

```javascript
export default function useSnack() {
    const [snack, showMessage] = useReducer(snackReducer, { show: false });
    // Custom Snackbar component with additional props and styles
    const CustomSnackbar = (
        <Snackbar
            open={snack.show}
            autoHideDuration={3000}
            onClose={() => showMessage(null)}
            // Add additional props here
        >
            <Alert color={snack.severity} severity={snack.severity}>
                {snack.message}
            </Alert>
        </Snackbar>
    );

    return {
        SnackBar: CustomSnackbar,
        showMessage,
    };
}
```

By modifying the `CustomSnackbar` component, you can enhance or change the appearance and behavior of the Snackbar.

## Conclusion

The `useSnack` hook simplifies the process of displaying snackbars with alerts in your React application. By utilizing this hook, you can easily show various types of messages to provide feedback or notify users about important events. Feel free to customize the Snackbar component to align with your application's visual style and requirements.
