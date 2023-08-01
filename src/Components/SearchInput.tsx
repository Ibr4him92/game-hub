import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchValue: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) return onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search Games..."
          variant={"filled"}
          ref={ref}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
