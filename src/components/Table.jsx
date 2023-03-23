const Table = ({ expenses }) => {
  return (
    <div className="Table">
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            <tr key={expense.id}>{expense.name}</tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
