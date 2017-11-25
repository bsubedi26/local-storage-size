# local-storage-size
Calculates the size in bytes of all the items stored currently in local storage.

## Installation

```
npm install local-storage-size --save
```

## Usage

```javascript
import localStorageSize from 'local-storage-size';
const totalSizeInBytes = localStorageSize.getSize();
console.log(totalSizeInBytes); // Approximately 19 KB currently stored in local storage.
```
