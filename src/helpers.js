// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createAt: Date.now(),
    amount: +amount,
    // color
  };
  // check if null, then if so send back an empty array
  const existingBugets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "bugets",
    JSON.stringify([...existingBugets, newItem])
  );
};

// delete item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
