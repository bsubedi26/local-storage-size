class LocalStorageSize {
  /**
   * Public method that returns the size in bytes 
   * currently stored in local storage
   * @return {string} 
  */
  getSize () {
    let size = 0
    let storage = window.localStorage

    if (!window.localStorage) {
      return new Error('window.localStorage is not available in the current environment.')
    }
    
    for (let i = 0; i <= storage.length - 1; i++) {
      const key = storage.key(i)
      size += this._lengthInUtf8Bytes(storage.getItem(key))
    }
    return this._format(size)
  }
  /**
   * Private method to convert localStorage item to byte size
   * @param {string} str 
  */
  _lengthInUtf8Bytes (str) {
    // Matches only the 10 bytes that are non-initial characters in a multi-byte sequence.
    let m = encodeURIComponent(str).match(/%[89ABab]/g)
    return str.length + (m ? m.length : 0)
  }
  /**
   * Private method to format the size to kiloByte/megaByte
   * @param {string} size
  */
  _format (size) {
    return `Approximately ${size / 1000} KB (${size / 1000000} MB) currently stored in local storage.`
  }
}

export default new LocalStorageSize();
