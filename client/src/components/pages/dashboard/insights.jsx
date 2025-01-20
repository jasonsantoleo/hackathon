import { useEffect, useState } from "react"
import { Skeleton } from "../../ui/skeleton"
import { Badge, Lightbulb } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { getAiInsights } from "../../../store/service/serviceReducer"
import { dummyInsights } from "../../../config/test"
import { Card, CardContent, CardHeader } from "../../ui/card"
const dummydata={
    "salesData": {
      "monthly_sales": [
        {
          "month": "2024-01",
          "total_revenue": 125000,
          "orders": 1200,
          "average_order_value": 104.17,
          "top_products": [
            { "id": "P123", "name": "Laptop Pro", "units": 200, "revenue": 40000 },
            { "id": "P456", "name": "Wireless Earbuds", "units": 350, "revenue": 21000 },
            { "id": "P789", "name": "Smart Watch", "units": 180, "revenue": 27000 }
          ],
          "sales_by_category": {
            "Electronics": 88000,
            "Accessories": 25000,
            "Software": 12000
          }
        },
        {
          "month": "2023-12",
          "total_revenue": 150000,
          "orders": 1500,
          "average_order_value": 100,
          "top_products": [
            { "id": "P123", "name": "Laptop Pro", "units": 250, "revenue": 50000 },
            { "id": "P456", "name": "Wireless Earbuds", "units": 400, "revenue": 24000 },
            { "id": "P789", "name": "Smart Watch", "units": 200, "revenue": 30000 }
          ],
          "sales_by_category": {
            "Electronics": 100000,
            "Accessories": 35000,
            "Software": 15000
          }
        }
      ],
      "inventoryData": {
        "current_stock": [
          {
            "product_id": "P123",
            "name": "Laptop Pro",
            "quantity": 150,
            "reorder_point": 50,
            "lead_time_days": 14,
            "cost_per_unit": 800,
            "last_restocked": "2024-01-15"
          },
          {
            "product_id": "P456",
            "name": "Wireless Earbuds",
            "quantity": 500,
            "reorder_point": 100,
            "lead_time_days": 7,
            "cost_per_unit": 30,
            "last_restocked": "2024-01-10"
          },
          {
            "product_id": "P789",
            "name": "Smart Watch",
            "quantity": 75,
            "reorder_point": 40,
            "lead_time_days": 10,
            "cost_per_unit": 100,
            "last_restocked": "2024-01-05"
          }
        ],
        "low_stock_alerts": [
          {
            "product_id": "P789",
            "name": "Smart Watch",
            "current_quantity": 75,
            "reorder_point": 40,
            "status": "Warning"
          }
        ]
      },
      "customerData": {
        "segments": [
          {
            "name": "New Customers",
            "count": 450,
            "average_order_value": 85,
            "retention_rate": 0.25
          },
          {
            "name": "Regular Customers",
            "count": 820,
            "average_order_value": 120,
            "retention_rate": 0.75
          },
          {
            "name": "VIP Customers",
            "count": 130,
            "average_order_value": 250,
            "retention_rate": 0.90
          }
        ],
        "recent_activity": {
          "new_signups_last_30_days": 150,
          "repeat_purchases_last_30_days": 320,
          "cart_abandonment_rate": 0.68,
          "average_session_duration": 15.5
        },
        "feedback": {
          "average_rating": 4.2,
          "total_reviews": 850,
          "positive_sentiment": 0.75,
          "top_complaints": [
            "Shipping time",
            "Customer service response",
            "Product availability"
          ]
        }
      }
    }
  }
const InsightCard=()=>{
    const [isLoading,setisLoading]=useState(true)
    const {insights}=useSelector(state=>state.service)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAiInsights(dummydata))
    },[])
    useEffect(()=>{
        console.log(insights);
        setisLoading(false)
    },[insights])
    const cleanTitle = (title) => {
        return title.replace(/^[#\s]+/, '').replace(/^Title:\s*/, '');
    };
    const getPriorityColor = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'high':
                return 'bg-red-100 text-red-800';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800';
            case 'low':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };
    return (
            <div className="p-4 flex flex-colml-4">
                
                {
                    isLoading ? <Skeleton className="h-10 w-full g" /> :
                    <div className="">
                        {dummyInsights.map((insight, index) => (
                            <Card key={index} className="w-full bg-white shadow-sm rounded-none mt-4">
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <Lightbulb className="pt-0 size-20" />
                                    <h3 className="font-semibold text-lg">
                                        {cleanTitle(insight.title)}
                                    </h3>
                                    <Badge
                                        variant="secondary" 
                                        className={getPriorityColor(insight.priority)}
                                    >
                                        {insight.priority}
                                    </Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        {insight.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                }
            </div>
    )
}
export default InsightCard