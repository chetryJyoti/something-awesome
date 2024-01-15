import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import CustomersTable from '@/app/ui/customers/table';
import { fetchCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const customers = await fetchCustomers()
  // console.log(customers);
  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <CustomersTable customers={customers} />  */}
      </div>
    </div>
  );
}
