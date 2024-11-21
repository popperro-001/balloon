import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";

interface Props {
  label: string;
  id: string;
  price: number;
  onCheckboxChange: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
  selectedProducts: { id: string; quantity: number }[];
}

export const ProductInput = ({
  label,
  id,
  price,
  onCheckboxChange,
  onQuantityChange,
  selectedProducts,
}: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Checkbox
          id={id}
          onCheckedChange={() => onCheckboxChange(id)}
          checked={!!selectedProducts.find((p) => p.id === id)}
        />
        <label htmlFor={id} className="text-sm font-semibold text-gray-700 leading-8">
          {label}
        </label>
      </div>

      {selectedProducts.find((p) => p.id === id) && (
        <div className="flex items-center gap-4 px-4">
          <Button
            variant="ghost"
            size="icon"
            className="size-6 bg-gray-200"
            onClick={() =>
              onQuantityChange(
                id,
                Math.max(
                  1,
                  selectedProducts.find((p) => p.id === id)?.quantity! - 1
                )
              )
            }
          >
            <MinusIcon />
          </Button>

          <span>{selectedProducts.find((p) => p.id === id)?.quantity}</span>

          <Button
            variant="ghost"
            size="icon"
            className="size-6 bg-gray-200"
            onClick={() =>
              onQuantityChange(
                id,
                selectedProducts.find((p) => p.id === id)?.quantity! + 1
              )
            }
          >
            <PlusIcon className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
