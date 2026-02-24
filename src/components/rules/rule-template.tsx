import { useFieldArray, type UseFormReturn } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { type FormValues } from "@/lib";
import { ConditionExceptionRow } from "@/components";

interface RuleTemplateProps {
  form: UseFormReturn<FormValues>;
}

const RuleTemplate = ({ form }: RuleTemplateProps) => {
  const {
    register,
    formState: { errors },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "conditions",
  });
  const {
    fields: exceptionFields,
    append: appendException,
    remove: removeException,
  } = useFieldArray({
    control: form.control,
    name: "exceptions",
  });

  // Add a condition or an exception based on the isException flag
  const addRow = (
    e: React.MouseEvent<HTMLButtonElement>,
    isException: boolean = false,
  ) => {
    e.preventDefault();
    if (isException) {
      appendException({ category: "", operator: "", value: "" });
      return;
    }
    append({ category: "", operator: "", value: "" });
  };

  // Delete a specific condition or exception based on isException flag
  const deleteRow = (index: number, isException: boolean = false) => {
    if (isException) {
      removeException(index);
      return;
    }
    remove(index);
  };

  return (
    <form
      id="rule-template-form"
      className="p-4 border-2 border-slate-400 max-h-96 overflow-y-auto flex flex-col gap-4"
    >
      <div className="inline-flex items-center gap-10">
        <Label htmlFor="ruleName" className="mr-2 w-24">
          Rule Name:
        </Label>
        <Input
          className="max-w-3/6"
          placeholder="Rule Name"
          {...register("ruleName", { required: "Rule Name is required" })}
        />
        {errors.ruleName && (
          <span className="text-red-500 text-sm">
            {errors.ruleName.message}
          </span>
        )}
      </div>
      <hr className="fill-black h-px" />
      {/* Conditions */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="condition" className="mr-2 w-24">
          Conditions
        </Label>
        <div className="flex flex-col items-start gap-4">
          {fields.map((field, index) => (
            <ConditionExceptionRow
              key={field.id}
              onDelete={() => deleteRow(index, false)}
              form={form}
              isFirstRow={index === 0}
              index={index}
            />
          ))}
        </div>
        <Button
          variant={"ghost"}
          className="bg-inherit max-w-fit p-2 mx-auto"
          onClick={(e) => addRow(e, false)}
        >
          + Add Condition
        </Button>
      </div>

      <hr className="fill-black h-px" />
      {/* Exceptions */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="condition" className="mr-2 w-24">
          Exceptions
        </Label>
        <div className="flex flex-col items-start gap-4">
          {exceptionFields.map((field, index) => (
            <ConditionExceptionRow
              key={field.id}
              onDelete={() => deleteRow(index, true)}
              form={form}
              isFirstRow={index === 0}
              index={index}
              isException
            />
          ))}
        </div>
        <Button
          variant={"ghost"}
          className="bg-inherit max-w-fit p-2 mx-auto"
          onClick={(e) => addRow(e, true)}
        >
          + Add Exception
        </Button>
      </div>
    </form>
  );
};

export { RuleTemplate };
