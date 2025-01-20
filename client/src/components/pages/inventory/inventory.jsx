import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Search, PlusCircle } from 'lucide-react';
import Header from '../../layout/header';

const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy data
  const inventory = [
    { id: 1, name: "Wireless Earbuds", sku: "WE-001", quantity: 45, price: 79.99, status: "In Stock" },
    { id: 2, name: "Smart Watch", sku: "SW-002", quantity: 12, price: 199.99, status: "Low Stock" },
    { id: 3, name: "Bluetooth Speaker", sku: "BS-003", quantity: 30, price: 129.99, status: "In Stock" },
    { id: 4, name: "Phone Charger", sku: "PC-004", quantity: 8, price: 24.99, status: "Low Stock" },
    { id: 5, name: "Laptop Stand", sku: "LS-005", quantity: 0, price: 49.99, status: "Out of Stock" },
    { id: 6, name: "Wireless Mouse", sku: "WM-006", quantity: 25, price: 39.99, status: "In Stock" },
  ];

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "In Stock":
        return "bg-green-500";
      case "Low Stock":
        return "bg-yellow-500";
      case "Out of Stock":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div>
        <Header/>
        <div className='w-full flex items-center justify-center'>
            <Card className="w-full max-w-4xl rounded-none">
            <CardHeader>
                <div className="flex justify-between items-center">
                <CardTitle>Inventory Management</CardTitle>
                <Button className="flex items-center gap-2">
                    <PlusCircle className="h-4 w-4" />
                    Add Product
                </Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="relative mb-6">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                    placeholder="Search by product name or SKU..."
                    className="pl-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                </div>
                
                <Table>
                <TableCaption>Current inventory status as of today</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>SKU</TableHead>
                    <TableHead className="text-right">Quantity</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredInventory.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell>{item.sku}</TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right">₹{item.price}</TableCell>
                        <TableCell>
                        <Badge className={`${getStatusColor(item.status)} text-white`}>
                            {item.status}
                        </Badge>
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </CardContent>
            </Card>
        </div>
    </div>
  );
};

export default InventoryManagement;