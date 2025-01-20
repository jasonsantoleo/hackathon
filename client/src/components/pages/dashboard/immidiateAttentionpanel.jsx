import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../ui/card';
import { CheckCircle } from 'lucide-react';

const ImmediateAttentionPanel = ({ alerts = [] }) => {
  const hasAlerts = alerts.length > 0;

  return (
    <Card className={`border-l-4 ${hasAlerts ? 'bg-amber-50 border-amber-500' : 'bg-green-50 border-green-500'}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 ml-10">
            {!hasAlerts && <CheckCircle className="text-green-600" size={20} />}
            Priority Updates
        </CardTitle>
      </CardHeader>
      <CardContent>
        {hasAlerts ? (
          <ul className="space-y-3">
            {alerts.map((alert, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 mt-2 rounded-full bg-amber-500" />
                <div>
                  <p className="font-medium text-gray-900">{alert.title}</p>
                  {alert.description && (
                    <p className="text-sm text-gray-600">{alert.description}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center py-6">
            <p className="text-green-700 font-medium">All systems running smoothly</p>
            <p className="text-sm text-gray-600 mt-1">No immediate attention required</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ImmediateAttentionPanel;