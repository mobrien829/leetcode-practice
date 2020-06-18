var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};

// faster than 41^% while using 81% less memory
// come back to this
