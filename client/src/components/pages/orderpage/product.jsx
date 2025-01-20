import React, { useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { ArrowDown, ArrowUp, Package, DollarSign, AlertTriangle, TrendingUp, IndianRupee } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../ui/card';
import { Alert, AlertDescription } from '../../ui/alert';

const ProductControlsSummary = () => {
  // Sample data
  const sampleData = {
    inventory: {
      totalProducts: 156,
      lowStock: 12,
      outOfStock: 3,
      totalValue: 45780,
      categories: {
        'Clothing': 45,
        'Accessories': 32,
        'Shoes': 28,
        'Beauty': 51
      }
    },
    sales: {
      daily: 2450,
      weekly: 15780,
      monthly: 67890,
      trending: {
        direction: 'up',
        percentage: 12.5
      }
    },
    alerts: [
      { id: 1, type: 'warning', message: 'Summer Dress (SKU-123) below reorder point' },
      { id: 2, type: 'critical', message: 'Leather Bag (SKU-456) out of stock' },
      { id: 3, type: 'info', message: 'New shipment arriving tomorrow' }
    ],
    salesTrend: [
      { name: 'Mon', sales: 2400 },
      { name: 'Tue', sales: 3200 },
      { name: 'Wed', sales: 2800 },
      { name: 'Thu', sales: 3600 },
      { name: 'Fri', sales: 4200 },
      { name: 'Sat', sales: 4800 },
      { name: 'Sun', sales: 3800 }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Products</p>
                <h3 className="text-2xl font-bold">{sampleData.inventory.totalProducts}</h3>
              </div>
              <Package className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Sales</p>
                <h3 className="text-2xl font-bold">₹{sampleData.sales.daily}</h3>
              </div>
              <IndianRupee className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Low Stock Items</p>
                <h3 className="text-2xl font-bold">{sampleData.inventory.lowStock}</h3>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sales Trend */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <h3 className="font-semibold">Weekly Sales Trend</h3>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-500">+{sampleData.sales.trending.percentage}%</span>
          </div>
        </CardHeader>
        <CardContent>
          <LineChart width={600} height={200} data={sampleData.salesTrend}>
            <Line type="monotone" dataKey="sales" stroke="#2563eb" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </CardContent>
      </Card>

      {/* Alerts */}
      <div className="space-y-2">
        {sampleData.alerts.map(alert => (
          <Alert key={alert.id} variant={alert.type === 'critical' ? 'destructive' : 'default'}>
            <AlertDescription>{alert.message}</AlertDescription>
          </Alert>
        ))}
      </div>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <h3 className="font-semibold">Category Distribution</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(sampleData.inventory.categories).map(([category, count]) => (
              <div key={category} className="flex items-center justify-between p-2 border rounded">
                <span className="text-sm">{category}</span>
                <span className="font-medium">{count} items</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductControlsSummary;