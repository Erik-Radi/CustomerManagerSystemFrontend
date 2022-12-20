import { useEffect, useState } from 'react';
import { CustomerListItem } from '../../types/Customer/CustomerListItem';
import api from '../../utilities/axios/api';

function CustomersList() {
  const [customersList, setCustomerList] = useState<Array<CustomerListItem>>([]);

  useEffect(() => {
    api.get('/customers', {
    })
      .then((res) => {
        setCustomerList([...res.data]);
        console.log(res.data);
      });
  }, []);
  return (
    <>
      <h1 className="font-semibold text-2xl my-6">Customer List</h1>
      {/* Search bar */}
      <div className="w-full max-h-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          {
            customersList.map((customer) => (
              <div key={customer.id}>
                <p>{customer.name}</p>
                <p>{customer.email}</p>
                <p>{customer.phone}</p>
                <p>{customer.info}</p>
              </div>
            ))
          }
          {/* table */}
        </div>
      </div>
    </>
  );
}

export default CustomersList;
