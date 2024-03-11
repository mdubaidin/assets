**Email Validator**

The `emailValidator` function is used to validate the format of an email address. It takes a value (`v`) as input and returns a boolean value indicating whether the email address is valid or not.

```javascript
const emailValidator = v =>
    /^(?!\.)([\w-]|(\.(?!\.))|(\+(?!\+)))+@([\w-]+\.(?!\.))+[\w-]{2,4}$/.test(
        v
    );
```

**Usage**

```javascript
const isValidEmail = emailValidator('example@email.com');
console.log(isValidEmail); // true

const isValidEmail2 = emailValidator('invalid.email');
console.log(isValidEmail2); // false
```

**Regular Expression Explanation**

-   `^(?!\.)`: Ensures that the email address doesn't start with a dot.
-   `([\w-]|(\.(?!\.))|(\+(?!\+)))+`: Matches one or more word characters (`\w`), hyphens (`-`), dots (`.`) that are not followed by another dot (`(?!\.)`), or plus signs (`+`) that are not followed by another plus sign (`(?!\+)`).
-   `@`: Matches the at symbol.
-   `([\w-]+\.(?!\.))+`: Matches one or more word characters or hyphens followed by a dot that is not followed by another dot.
-   `[\w-]{2,4}`: Matches 2 to 4 word characters or hyphens at the end of the email address.

**Phone Validator**

The `phoneValidator` function is used to validate the format of a phone number. It takes a value (`v`) as input and returns a boolean value indicating whether the phone number is valid or not.

```javascript
const phoneValidator = v => /^\d{3}-\d{3}-\d{4}$/.test(v);
```

**Usage**

```javascript
const isValidPhone = phoneValidator('123-456-7890');
console.log(isValidPhone); // true

const isValidPhone2 = phoneValidator('12-3456-7890');
console.log(isValidPhone2); // false
```

**Regular Expression Explanation**

-   `^\d{3}-\d{3}-\d{4}$`: Matches a string that starts with 3 digits, followed by a hyphen, followed by another 3 digits, another hyphen, and finally 4 digits.

**Username Validator**

The `usernameValidator` function is used to validate the format of a username. It takes a value (`v`) as input and returns a boolean value indicating whether the username is valid or not.

```javascript
const usernameValidator = v => /^[a-z]([a-z0-9]|(\.(?!\.)))*[a-z0-9]$/.test(v);
```

**Usage**

```javascript
const isValidUsername = usernameValidator('my_username');
console.log(isValidUsername); // true

const isValidUsername2 = usernameValidator('invalid.username.');
console.log(isValidUsername2); // false
```

**Regular Expression Explanation**

-   `^[a-z]`: Matches a lowercase letter at the beginning of the username.
-   `([a-z0-9]|(\.(?!\.)))*`: Matches any lowercase letter or digit, or a dot that is not followed by another dot, zero or more times.
-   `[a-z0-9]$`: Matches a lowercase letter or digit at the end of the username.

**Note:** The regular expressions used in these validators have certain assumptions and limitations based on the desired format. You can modify them according to your specific requirements.
