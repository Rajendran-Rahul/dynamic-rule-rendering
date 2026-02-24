import { ActionButton } from "@/components/rules/action-button";
import { Trash } from "lucide-react";

const DeleteRule = () => {
  return (
    <ActionButton
      icon={Trash}
      variant="danger"
      onClick={() => console.log("Delete")}
    >
      Delete
    </ActionButton>
  );
};

export { DeleteRule };