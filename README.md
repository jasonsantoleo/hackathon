# SustainAI Dashboard

## Introduction
SustainAI Dashboard is an intelligent business analytics platform that leverages AI to provide real-time insights and sustainability metrics. The platform analyzes sales, inventory, and customer data to generate actionable insights while considering environmental impact and sustainable business practices.
## WORK FLOW 
<img width="815" alt="Screenshot 2025-01-20 at 11 14 37 PM" src="https://github.com/user-attachments/assets/bd1f4c39-6eae-4737-b125-232f2771b2d3" />
## Workflow Diagram
<img width="421" alt="Screenshot 2025-01-20 at 11 19 27 PM" src="https://github.com/user-attachments/assets/d9087c79-6e7e-4e86-b6b6-117464c49a73" />

    
# Tech Stack
## Frontend
React 18
Redux for state management
Tailwind CSS for styling
shadcn/ui for UI components
Vite for build tooling

# Backend

Node.js
Express.js
Machine Learning Services
RESTful API architecture

# Development Tools

Git for version control
ESLint for code quality
PostCSS for CSS processing
JSConfig for JavaScript configuration

## Novelty

AI-Driven Insights: Automated generation of business insights with a focus on sustainability metrics
Real-time Analytics: Live monitoring and analysis of business performance
Sustainable Business Metrics: Integration of environmental impact considerations into traditional business analytics
Intelligent Recommendations: ML-powered suggestions for improving business sustainability


graph TB
    subgraph User Interface
        A[Dashboard] --> B[Key Metrics]
        A --> C[Insights Panel]
        A --> D[Immediate Attention]
    end
    
    subgraph Backend Services
        E[Express Server] --> F[ML Service]
        F --> G[Data Processing]
        G --> H[Insight Generation]
    end
    
    subgraph Data Flow
        I[User Input] --> J[API Layer]
        J --> K[Business Logic]
        K --> L[ML Processing]
        L --> M[Response]
    end

## Other Features
Project Structure
jasonsantoleo-techstars-63-sustain-ai-thon/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── store/      # Redux store
│   │   └── lib/        # Utilities
└── server/             # Backend Node.js application
    ├── routes/         # API routes
    └── services/       # ML services

## Key Components

Dashboard Page: Main interface for viewing metrics and insights
ML Dashboard: Specialized view for machine learning insights
Immediate Attention Panel: Critical alerts and notifications
Insights Component: AI-generated business recommendations

## Getting Started

1)Clone the repository
2)Install dependencies:
  # Frontend
  cd client
  npm install
  
  # Backend
  cd ../server
  npm install
3)start dev server 
  # Frontend
  cd client
  npm run dev
  
  # Backend
  cd ../server
  npm start



