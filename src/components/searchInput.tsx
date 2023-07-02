import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

// Search the games according to the input

// 1. use <form> to submit the search input
// 2. use useRef() hook to access the input field : single field
// 3. pass the search input to the app component to rerender

interface Props {
  onSearch: (searchText: string) => void;
}

const searchInput = ({ onSearch }: Props) => {
  // 2.1 create a ref object
  const ref = useRef<HTMLInputElement>(null);

  return (
    // form element doesn't have 'width:100%' implicitly :
    // use inline styles
    // or add a rule in the global stylesheet : index.css
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // 2.3 if ref is truthy ...
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch size={12} color={"gray"} />} />
        <Input
          // 2.2 associate the ref object to the input element
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};

export default searchInput;
