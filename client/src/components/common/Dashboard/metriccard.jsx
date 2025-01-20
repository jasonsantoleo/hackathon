import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../../ui/card';

const MetricCard = ({ title, value, comparison, trend, urgentCount }) => {
  const percentage = comparison 
    ? ((value - comparison) / comparison * 100).toFixed(1) 
    : null;

  const isPositive = trend === "up" || (percentage && percentage > 0);

  return (
    <Card className="p-4">
      <div className="flex flex-col space-y-2">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        
        <div className="flex items-baseline justify-between">
          <p className="text-2xl font-semibold">
            {typeof value === "number" ? value.toLocaleString() : value}
          </p>
          
          <div className='flex flex-col'>
          {trend && (
                <span className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? (
                    <TrendingUp className="h-4 w-4" />
                ) : (
                    <TrendingDown className="h-4 w-4" />
                )}
                </span>
          )}
            {comparison && (
                <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {percentage}% vs previous
            </p>
            )}
            </div>
        </div>


        {urgentCount !== undefined && (
          <p className="text-sm text-orange-500">
            {urgentCount} urgent
          </p>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;