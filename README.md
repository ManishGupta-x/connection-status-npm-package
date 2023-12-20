
# connection-status NPM package

A lightweight module to check and monitor online/offline status in both browser and Node.js environments.
Can be used in web development while building pages for offline and online internet connection 
For react : you make sure to use state variables for this

## Installation

```bash
npm install connection-status
```



## Usage

```javascript
const { useConnection } = require('connection-status');

const connection = useConnection();

// Listen for online/offline events
connection.on('online', () => {
  console.log('Custom event: Online');
});

connection.on('offline', () => {
  console.log('Custom event: Offline');
});

// Access the current online status
console.log('Current status:', connection.isOnline);

```


## Support

For support, contact on Discord username : nightmare_fuel.
or Email : manishgupta220402@gmail.com

