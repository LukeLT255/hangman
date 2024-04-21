

export function updateLocalStorage(key, newValue) {
    const oldValue = localStorage.getItem(key);
    localStorage.setItem(key, newValue);
  
    const storageEvent = new StorageEvent('storage', {
      key: key,
      oldValue: oldValue,
      newValue: newValue,
      url: window.location.href,
      storageArea: localStorage
    });
  
    window.dispatchEvent(storageEvent);
}