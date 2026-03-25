const contains = function (obj, searchedFor) {
  return Object.values(obj).some((element) => {
    if (
      element === searchedFor ||
      (Number.isNaN(element) && Number.isNaN(searchedFor))
    ) {
      return true;
    }

    if (isObject(element)) {
      return contains(element, searchedFor);
    }

    return false;
  });
};

function isObject(val) {
  return val !== null && typeof val === "object";
}

console.log("HI");
console.log(contains({ app: "FOO" }, "FOO"));

// Do not edit below this line
module.exports = contains;
