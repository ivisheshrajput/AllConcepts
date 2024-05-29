"use client";
import { comment } from "postcss";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    comment: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });
  const handleFormData = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className="w-8/12 flex border rounded-md mt-[100px] mx-auto">
      <div className="p-6">
        <form className="space-y-8" onSubmit={handleFormSubmit}>
          <div className="flex flex-col">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              type="text"
              placeholder="First Name"
              onChange={handleFormData}
              className="rounded-md text-black px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              type="text"
              placeholder="LastName"
              onChange={handleFormData}
              className="rounded-md text-black px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleFormData}
              className="rounded-md text-black px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country">Country</label>
            <select
              className="text-black rounded-md px-3"
              value={formData.country}
              id="country"
              name="country"
              onChange={handleFormData}
            >
              <option disabled>Select Your Country</option>
              <option>India</option>
              <option>America</option>
              <option>France</option>
              <option>Rio</option>
              <option>Australia</option>
              <option>Korea</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">Street Address</label>
            <input
              id="address"
              name="address"
              type="text"
              value={formData.address}
              placeholder="Address"
              onChange={handleFormData}
              className="rounded-md text-black px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city">City</label>
            <input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              placeholder="City"
              onChange={handleFormData}
              className="rounded-md text-black px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              type="text"
              value={formData.state}
              placeholder="State"
              onChange={handleFormData}
              className="rounded-md text-black px-3"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="pincode">Pincode</label>
            <input
              id="pincode"
              name="pincode"
              type="number"
              value={formData.pincode}
              placeholder="Pincode"
              onChange={handleFormData}
              className="rounded-md text-black px-3"
            />
          </div>
          <div>
            <fieldset className="flex space-x-4">
              <legend>By Email</legend>
              <div className="flex items-center space-x-1">
                <input
                  name="comment"
                  type="checkbox"
                  id="comment"
                  checked={formData.comment}
                  onChange={handleFormData}
                />
                <label htmlFor="comment">Comment</label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="candidates"
                  name="candidates"
                  checked={formData.candidates}
                  onChange={handleFormData}
                />
                <label htmlFor="candidates">Candidates</label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="checkbox"
                  id="offers"
                  name="offers"
                  checked={formData.offers}
                  onChange={handleFormData}
                />
                <label htmlFor="offers">Offers</label>
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset>
              <legend>Push Notification</legend>
              <div className="flex items-center space-x-1">
                <input
                  type="radio"
                  id="everything"
                  value="everything"
                  onChange={handleFormData}
                  name="pushNotification"
                />
                <label htmlFor="everything">Everything</label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="radio"
                  id="sameAsEmail"
                  value="same as email"
                  name="pushNotification"
                  onChange={handleFormData}
                />
                <label htmlFor="sameAsEmail">Same As Email</label>
              </div>
              <div className="flex items-center space-x-1">
                <input
                  type="radio"
                  id="noPushNotification"
                  value="no notification"
                  name="pushNotification"
                  onChange={handleFormData}
                />
                <label htmlFor="noPushNotification">No Push Notification</label>
              </div>
            </fieldset>
          </div>
          <button className="bg-yellow-500 px-6 py-1 rounded-md " type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
