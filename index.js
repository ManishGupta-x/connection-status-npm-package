const { EventEmitter } = require('events');

const useConnection = () => {
  const eventEmitter = new EventEmitter();
  let isOnline = true;

  const handleOnline = () => {
    if (!isOnline) {
      isOnline = true;
      console.log('Online');
      eventEmitter.emit('online');
    }
  };

  const handleOffline = () => {
    if (isOnline) {
      isOnline = false;
      console.log('Offline');
      eventEmitter.emit('offline');
    }
  };

  // Check if process is defined (running in a Node.js environment)
  if (typeof process !== 'undefined') {
    process.on('online', handleOnline);
    process.on('offline', handleOffline);
  }

  return {
    isOnline,
    on: eventEmitter.on.bind(eventEmitter),
    off: eventEmitter.off.bind(eventEmitter),
  };
};

module.exports = { useConnection };

