import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { ViewRule } from "@/components/rules/view-rule";
import { DeleteRule } from "@/components/rules/delete-rules";

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
            <ViewRule />
            <DeleteRule />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export { RulesList };
