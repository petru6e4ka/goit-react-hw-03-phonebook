const ls = key => {
  return {
    get: () => {
      const value = localStorage.getItem(key);
      try {
        return value ? JSON.parse(value) : value;
      } catch (e) {
        return value;
      }
    },
    set: value => {
      const _value = value ? JSON.stringify(value) : value;
      localStorage.setItem(key, _value);
    },
    remove: () => {
      localStorage.removeItem(key);
    },
  };
};

export const contacts = ls('contacts');
