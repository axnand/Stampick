import React from 'react';
import { notFound } from 'next/navigation'; 
import StampDetails from '@/components/StampDetails'; 
import { dummyStamps } from '@/utils/StampData'; 

export default function StampPage({ params }) {
    const { id } = params;  
    const stamp = dummyStamps.find((stamp) => stamp.id === parseInt(id)); 

    if (!stamp) {
        return notFound(); 
    }

    return (
        <div className="min-h-screen">
            <StampDetails product={stamp} />  
        </div>
    );
}