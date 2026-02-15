import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Eye, Trash } from "lucide-react";
import { ActionButton } from "@/components/action-button";

const RulesList = () => {
  return (
    <Card className="max-w-240 rounded-md mx-auto">
      <CardHeader title="Restriction Rules">
        <h1 className="text-center align-middle font-bold text-2xl">
          Restriction Rules
        </h1>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-between items-center">
          <p>Restriction Rule 1</p>
          <div className="flex items-center gap-2">
            <ActionButton icon={Eye} onClick={() => console.log("View")}>
              View
            </ActionButton>
            <ActionButton
              icon={Trash}
              variant="danger"
              onClick={() => console.log("Delete")}
            >
              Delete
            </ActionButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { RulesList };
