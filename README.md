# Ultimate GC

Genius Chat has come a long way since its inception in July 2020. However, it is becoming increasingly difficult to continue with the current codebase as every time a new feature is released, it conflicts with previous releases.

This is why we are currently working on creating a completely revamped chat website "Ultimate Chat" that follows proper coding conventions and updated libraries from the very start.

This project will use:
- React.js
- Node.js
- Websockets
- React-quill
- Material UI
- Vanilla javascript

Development of a React version of UGC is more difficult than non-React UGC. Previously and even now, UGC uses an Apache server alongside a SQL database. This is completely non-compatible with React, in development. Testing and deployment has been customized to fit our needs with custom npm build scripts -@mh-anwar
- Test with node live server (chat, login and anything PHP will not work)
 - `npm run start:testing`
- Deploy using `npm run build:production`
- Use build folder to access production code
