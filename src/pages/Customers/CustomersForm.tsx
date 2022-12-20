import {
  ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler, useState,
} from 'react';
import { Customer } from '../../types/Customer/Customer';
import api from '../../utilities/axios/api';

function CustomersForm() {
  const [customerValues, setCustomerValues] = useState<Customer>({
    name: '',
    email: '',
    phone: '',
    info: '',
  });

  const customerFormInputChangeHandler: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    setCustomerValues({ ...customerValues, [e.target.name]: e.target.value });
  };

  const customerFormSubmitHandler: FormEventHandler<HTMLFormElement> = (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    api.post('/customers', { ...customerValues })
      .then((res) => {
        console.log(res.data);
      }).catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <>
      <h1 className="font-semibold text-2xl my-6">Create a new customer</h1>
      <div className="w-full max-h-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto" />
        <form onSubmit={customerFormSubmitHandler}>
          <label htmlFor="name">
            Name:
            {' '}
            <input
              type="text"
              id="name"
              name="name"
              value={customerValues.name}
              onChange={customerFormInputChangeHandler}
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            {' '}
            <input
              type="email"
              id="email"
              name="email"
              value={customerValues.email}
              onChange={customerFormInputChangeHandler}
              required
            />
          </label>
          <label htmlFor="phone">
            Phone:
            {' '}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={customerValues.phone}
              onChange={customerFormInputChangeHandler}
              required
            />
          </label>
          <label htmlFor="info">
            Info:
            {' '}
            <input
              type="text"
              id="info"
              name="info"
              value={customerValues.info}
              onChange={customerFormInputChangeHandler}
            />
          </label>
          <button type="submit">Create User</button>
        </form>
      </div>
    </>
  );
}

export default CustomersForm;
