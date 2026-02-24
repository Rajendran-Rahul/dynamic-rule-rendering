import { type UseFormReturn, Controller } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { ActionButton, CONDITION_CONFIG } from "@/components";
import { Trash } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { type FormValues } from "@/lib";

const ConditionExceptionRow = ({
  onDelete,
  isFirstRow,
  index,
  form,
  isException = false,
}: {
  onDelete: () => void;
  isFirstRow: boolean;
  index: number;
  form: UseFormReturn<FormValues>;
  isException?: boolean;
}) => {
  const { watch, setValue, register, control, getValues } = form;
  const { restriction_items } = CONDITION_CONFIG;

  const primaryTypeConditions = restriction_items.filter(
    (item) => item.type === "primary",
  );
  const conditionsToRender =
    isFirstRow && !isException ? primaryTypeConditions : restriction_items;

  const rowType = isException ? "exceptions" : "conditions";

  const selectedCategory = watch(`${rowType}.${index}.category`);
  const selectedOperator = watch(`${rowType}.${index}.operator`);
  const allowedOperators = useMemo(
    () =>
      restriction_items.find((item) => item.condition_code === selectedCategory)
        ?.allowed_operators || [],
    [selectedCategory],
  );

  const prevSelectedCateogory = getValues()[rowType].map(
    (cond) => cond.category,
  );

  useEffect(() => {
    setValue(`${rowType}.${index}.operator`, ""); // Reset operator when category changes
    setValue(`${rowType}.${index}.value`, ""); // Reset value when category changes
  }, [selectedCategory]);

  return (
    <div className="inline-flex items-center gap-4 w-full">
      <Controller
        control={control}
        name={`${rowType}.${index}.category`}
        rules={{ required: "Category is required" }}
        render={({ field }) => (
          <Select
            onValueChange={(value) => field.onChange(value)}
            value={field.value ?? ""}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Category" />
            </SelectTrigger>
            <SelectContent>
              {conditionsToRender.map((condition) => (
                <SelectItem
                  key={condition.condition_code}
                  value={condition.condition_code}
                  disabled={
                    prevSelectedCateogory.includes(condition.condition_code) &&
                    condition.condition_code !== selectedCategory
                  }
                  className="cursor-pointer disabled:cursor-not-allowed disabled:pointer-events-none"
                >
                  {condition.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      <Controller
        control={control}
        name={`${rowType}.${index}.operator`}
        rules={{ required: "Operator is required" }}
        render={({ field }) => (
          <Select
            onValueChange={field.onChange}
            value={field.value}
            disabled={!selectedCategory}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Operator" />
            </SelectTrigger>
            <SelectContent>
              {allowedOperators.map((operator) => (
                <SelectItem key={operator.code} value={operator.code}>
                  {operator.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {selectedOperator === "between" ? (
        <div className="flex items-center gap-2 w-full">
          <Input
            placeholder="Min Value"
            {...register(`${rowType}.${index}.value.0`, {
              required: "Min Value is required",
            })}
          />
          <span className="text-gray-500">to</span>
          <Input
            placeholder="Max Value"
            {...register(`${rowType}.${index}.value.1`, {
              required: "Max Value is required",
            })}
          />
        </div>
      ) : (
        <Input
          placeholder="Value"
          {...register(`${rowType}.${index}.value`, {
            required: "Value is required",
          })}
          disabled={!selectedCategory && !selectedOperator}
        />
      )}
      <ActionButton
        iconOnly
        icon={Trash}
        className="hover:text-red-500 opacity-100"
        onClick={onDelete}
      ></ActionButton>
    </div>
  );
};

export { ConditionExceptionRow };
