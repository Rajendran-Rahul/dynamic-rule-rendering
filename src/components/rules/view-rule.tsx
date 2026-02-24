import { ActionButton } from "@/components/rules/action-button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { RuleTemplate } from "@/components/rules/rule-template";
import type { FormValues } from "@/lib";
import { useForm } from "react-hook-form";
import { useState } from "react";

const ViewRule = () => {
  const [open, setOpen] = useState(false);

  const form = useForm<FormValues>({ mode: "onChange" });
  const {
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = form;

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    // Handle save logic here (API call, etc.)
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ActionButton icon={Eye} onClick={() => setOpen(true)}>
          View
        </ActionButton>
      </DialogTrigger>
      <DialogContent className="lg:max-w-240" aria-describedby={undefined}>
        <DialogTitle className="text-center align-middle">
          Create/Edit Rule
        </DialogTitle>
        <RuleTemplate form={form} />
        <DialogFooter className="flex items-center justify-center gap-4">
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">
              Cancel
            </Button>
          </DialogClose>
          <Button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            form="rule-template-form"
            disabled={!isValid || isSubmitting}
            className="disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { ViewRule };
