const Table = ({ expenses }) => {
  return (
    <div className="Table">
      <table>
        <thead>
          <tr>{["Name"]}</tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
