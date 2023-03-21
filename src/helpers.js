// Time delay function (mainly for testing)
export const waaaait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800));

// Colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")?.length ?? 0;
  // using hsl for CSS so multiplication can be used
  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
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
