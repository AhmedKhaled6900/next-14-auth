"use client";

import qs from "query-string";
import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { SelectValue } from "@radix-ui/react-select";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
};

const Filter: React.FC<FilterProps> = ({
  data,
  name,
  valueKey,
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);
  
  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query,
    }, { skipNull: true });

    router.push(url);
  }

  return ( 
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        {name}
      </h3>
      <hr className="my-4" />
      <Select disabled={data.length === 0} onValueChange={onClick} >
        <SelectTrigger>
          <SelectValue  placeholder="Select a category" />
        </SelectTrigger>
<SelectContent>
  <SelectItem onClick={() => onClick('')} value="default"> All</SelectItem>
  {data.map((filter) => (
    <SelectItem key={filter.id} value={filter.id}> {filter.name}</SelectItem>
  ))}
</SelectContent>

</Select>
      {/* <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                'rounded-md text-sm text-gray-800 p-2 bg-white border border-gray-300',
                selectedValue === filter.id && 'bg-black text-white'
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Filter;

{/* <Select disabled={loading} onValueChange={field.onChange} value={field.value} defaultValue={field.value}> */}
{/* <FormControl> */}
  // <SelectTrigger>
    // <SelectValue defaultValue={field.value} placeholder="Select a category" />
  // </SelectTrigger>
{/* </FormControl> */}
{/* <SelectContent> */}
  // {categories.map((category) => (
    // <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
  // ))}
// </SelectContent>
// </Select>