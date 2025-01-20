export const testFormControls = [
    {
      name: "fullName",
      componentType: "input",
      type: "text",
      placeholder: "Enter your full name"
    },
    {
      name: "email",
      componentType: "input",
      type: "email",
      placeholder: "Enter your email"
    },
    {
      name: "role",
      componentType: "select",
      placeholder: "Select your role",
      options: [
        { id: "developer", label: "Developer" },
        { id: "designer", label: "Designer" },
        { id: "manager", label: "Project Manager" },
        { id: "analyst", label: "Business Analyst" }
      ]
    },
    {
      name: "startDate",
      componentType: "date",
      placeholder: "Select start date"
    },
    {
      name: "description",
      componentType: "textarea",
      placeholder: "Enter project description"
    }
  ];
  
  export const dummyInsights = [
    {
        title: "Here are three key insights from the provided business data:",
        description: "The sales data reveals three distinct customer segments with varying purchasing behaviors and values. The VIP Customers segment, though smaller in number, generates the highest average order value at $250 and exhibits strong retention with a 0.9 rate. Regular Customers form the majority with 820 customers, spending an average of $120 per order, and retaining at a rate of 0.75. New Customers, numbering 450, have an average order value of $85 and a lower retention rate of 0.25, indicating an opportunity to increase loyalty.",
        priority: "Medium"
    },
    {
        title: "## Insight 1: Sales Trends and Opportunities",
        description: "The sales data reveals three distinct customer segments with varying purchasing behaviors and values. The VIP Customers segment, though smaller in number, generates the highest average order value at $250 and exhibits strong retention with a 0.9 rate. Regular Customers form the majority with 820 customers, spending an average of $120 per order, and retaining at a rate of 0.75. New Customers, numbering 450, have an average order value of $85 and a lower retention rate of 0.25, indicating an opportunity to increase loyalty.",
        priority: "Medium"
    },
    {
        title: "## Insight 2: Focus on Retaining Regular Customers",
        description: "The sales data reveals three distinct customer segments with varying purchasing behaviors and values. The VIP Customers segment, though smaller in number, generates the highest average order value at $250 and exhibits strong retention with a 0.9 rate. Regular Customers form the majority with 820 customers, spending an average of $120 per order, and retaining at a rate of 0.75. New Customers, numbering 450, have an average order value of $85 and a lower retention rate of 0.25, indicating an opportunity to increase loyalty.",
        priority: "Medium"
    }
];