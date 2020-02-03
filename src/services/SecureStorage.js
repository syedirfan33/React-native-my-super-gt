/**
 * @format
 * @flow
 */
import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage';

class SecureStorageWrapper {
  getItem = (key: string) => {
    return RNSecureStorage.get(key)
      .then(value => {
        return value;
      })
      .catch(error => {
        console.log('Error to get item with key ' + key + ' - ' + error);
        return null;
      });
  };

  setItem = (key: string, value: string) => {
    return RNSecureStorage.set(key, value, {
      accessible: ACCESSIBLE.WHEN_UNLOCKED,
    })
      .then(result => {
        return true;
      })
      .catch(error => {
        console.log('Error to set item with key ' + key + ' - ' + error);
        return false;
      });
  };

  removeItem = (key: string) => {
    return RNSecureStorage.remove(key).catch(error => {
      console.log('Error to remove item with key ' + key + ' - ' + error);
      return;
    });
  };

  exists = (key: string) => {
    return RNSecureStorage.exists(key).catch(error => {
      console.log('Error to check exists item with key ' + key + ' - ' + error);
      return false;
    });
  };
}

const SecureStorage = new SecureStorageWrapper();
export default SecureStorage;
