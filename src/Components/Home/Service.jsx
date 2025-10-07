import React from 'react';
import { Building, Shield, BookOpen, DollarSign, FileText, Users } from 'lucide-react';

const services = [
    { label: 'Incorporation', Icon: Building },
    { label: 'Trademark', Icon: Shield },
    { label: 'Accounting', Icon: BookOpen },
    { label: 'Income Tax', Icon: DollarSign },
    { label: 'GST Services', Icon: FileText },
    { label: 'Payroll', Icon: Users },
];

const Service = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#172a5a] mb-3 text-center">
                    Explore Our Digital Services
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-8 max-w-3xl mx-auto text-center">
                    Grow your business and remain compliant by partnering with Creation Alliance for a range of high-quality business services—from incorporation to payroll—delivered online.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {services.map((service, index) => {
                        const Icon = service.Icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                {/* Icon with solid color */}
                                <Icon className="h-10 w-10 text-blue-500 mb-2" />

                                {/* Label */}
                                <p className="text-base font-semibold text-[#172a5a] text-center">
                                    {service.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Service;
