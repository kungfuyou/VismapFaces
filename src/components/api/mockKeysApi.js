import delay from './delay';

const keys = [];

class KeysApi {
  static getAllKeys() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], keys));
      }, delay);
    });
  }
}

export default KeysApi;
