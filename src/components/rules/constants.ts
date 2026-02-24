const CONDITION_CONFIG ={
  "restriction_items": [
    {
      "condition_code": "outstanding_balance",
      "label": "Outstanding Balance",
      "type": "primary",
      "allowed_operators": [
        { "label": "Equals", "code": "equals" },
        { "label": "Greater Than", "code": "greater_than" },
        { "label": "Between", "code": "between" },
        { "label": "Less Than", "code": "less_than" }
      ]
    },
    {
      "condition_code": "patient_age",
      "label": "Patient Age",
      "type": "primary",
      "allowed_operators": [
        { "label": "Equals", "code": "equals" },
        { "label": "Between", "code": "between" },
        { "label": "Greater Than", "code": "greater_than" },
        { "label": "Less Than", "code": "less_than" }
      ]
    },
    {
      "condition_code": "patient_id",
      "label": "Patient ID",
      "type": "primary",
      "allowed_operators": [
        { "label": "Not Matches", "code": "not_matches" },
        { "label": "Matches", "code": "matches" }
      ]
    },
    {
      "condition_code": "practice_id",
      "label": "Practice ID",
      "type": "secondary",
      "allowed_operators": [
        { "label": "In", "code": "in" },
        { "label": "Not In", "code": "not_in" }
      ]
    },
    {
      "condition_code": "provider_id",
      "label": "Provider ID",
      "type": "secondary",
      "allowed_operators": [
        { "label": "In", "code": "in" },
        { "label": "Not In", "code": "not_in" }
      ]
    }
  ]
}

export { CONDITION_CONFIG };