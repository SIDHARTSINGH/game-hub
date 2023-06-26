import categories from "./ExpenseCategories";

interface Props {
  onSelectCategory: (category: string) => void;
}

// Component Responsible for showing the options for filter
// Notify the consumer :
// Connsumer handles the filtering
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    // Notify the consumer of the selected category :
    // read from the field :
    // from the 'event' object : target : value
    <select
      name=""
      id=""
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All Categories</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
