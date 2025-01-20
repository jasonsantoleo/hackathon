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
export const LoginFormControls=[
  {
      name:'email',
      label:"email",
      placeholder:"enter your email",
      componentType:'input',
      type:"text"
  },
  {
      name:"password",
      label:"Password",
      placeholder:"**********",
      componentType:'input',
      type:'text'
  }
]

export const registerFormControls=[
  {
      name:'username',
      label:"User Name",
      placeholder:"Enter your  user name",
      componentType:'input',
      type:"text",  
  },
  {
      name:'email',
      label:"Emain",
      placeholder:"Enter your  Email",
      componentType:'input',
      type:"email",   
  },
  {
      name:'password',
      label:"Password",
      placeholder:"Enter your  password",
      componentType:'input',
      type:"text",  
  }
]
export const InventoryformControls = [
  {
    id: "name",
    name: "name",
    label: "Product Name",
    type: "text",
    placeholder: "Enter product name",
    required: true,
    validation: {
      required: "Product name is required",
      minLength: {
        value: 3,
        message: "Product name must be at least 3 characters"
      }
    }
  },
  {
    id: "sku",
    name:"sku",
    label: "SKU",
    type: "text",
    placeholder: "Enter SKU",
    required: true,
    validation: {
      required: "SKU is required",
      pattern: {
        value: /^[A-Z]{2}-\d{3}$/,
        message: "SKU must be in format XX-000"
      }
    }
  },
  {
    id: "quantity",
    name:"quantity",
    label: "Quantity",
    type: "number",
    placeholder: "Enter quantity",
    required: true,
    validation: {
      required: "Quantity is required",
      min: {
        value: 0,
        message: "Quantity cannot be negative"
      }
    }
  },
  {
    id: "price",
    name:"price",
    label: "Price",
    type: "number",
    placeholder: "Enter price",
    required: true,
    validation: {
      required: "Price is required",
      min: {
        value: 0,
        message: "Price cannot be negative"
      }
    }
  },
  {
    id: "status",
    name:"status",
    label: "Status",
    type: "select",
    placeholder: "Select status",
    required: true,
    options: [
      { value: "In Stock", label: "In Stock" },
      { value: "Low Stock", label: "Low Stock" },
      { value: "Out of Stock", label: "Out of Stock" }
    ],
    validation: {
      required: "Status is required"
    }
  }
];
