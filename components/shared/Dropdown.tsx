import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ICategory } from "@/lib/database/models/category.model";
import { useState } from "react";

type DropdownProps = {
  value: string;
  onChangeHandler: (value: string) => void;
};

const Dropdown = ({ value, onChangeHandler }: DropdownProps) => {
  const [category, setCategory] = useState<ICategory[]>([]);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="w-full bg-primary-foreground">
        <SelectValue placeholder="Category" />
      </SelectTrigger>
      <SelectContent>
        {category.length > 0 &&
          category.map((cat) => (
            <SelectItem key={cat._id} value={cat._id}>
              {cat.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default Dropdown;
