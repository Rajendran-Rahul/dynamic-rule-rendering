type Condition = {
  category: string;
  operator: string;
  value: string | number | number[] | string[];
};

type FormValues = {
  ruleName: string;
  conditions: Condition[];
  exceptions: Condition[];
};

export type { Condition, FormValues };
