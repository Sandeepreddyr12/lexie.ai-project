import React from 'react';

export default function checkout() {
  return (
    <div className='w-full'>
        {/*banner*/}
      <div className ="mt-8 p-4 relative flex flex-col sm:flex-row sm:items-center bg-white shadow rounded-md">
        <div className ="flex flex-row items-center border-b sm:border-b-0 w-full sm:w-auto pb-4 sm:pb-0">
          <div className ="text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className ="w-6 sm:w-5 h-6 sm:h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className ="text-sm font-medium ml-3">Checkout</div>
        </div>
        <div className ="text-sm tracking-wide text-gray-500 mt-4 sm:mt-0 sm:ml-4">
          Complete your shipping and payment details below.
        </div>
      </div>

      {/*hero component*/}
      <div className ="container p-12 mx-auto">
        <div className ="flex flex-col w-full px-0 mx-auto md:flex-row">

            {/* address-form*/}

          <div className ="flex flex-col md:w-full">
            <h2 className ="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form className ="justify-center w-full mx-auto" method="post" action>
              <div className ="">
                <div className ="space-x-0 lg:flex lg:space-x-4">
                  <div className ="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      className ="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className ="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className ="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      className ="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                      className ="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className ="mt-4">
                  <div className ="w-full">
                    <label
                      for="Email"
                      className ="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                      className ="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className ="mt-4">
                  <div className ="w-full">
                    <label
                      for="Address"
                      className ="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      className ="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div className ="space-x-0 lg:flex lg:space-x-4">
                  <div className ="w-full lg:w-1/2">
                    <label
                      for="city"
                      className ="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      name="city"
                      type="text"
                      placeholder="City"
                      className ="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className ="w-full lg:w-1/2 ">
                    <label
                      for="postcode"
                      className ="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                      className ="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className ="flex items-center mt-4">
                  <label className ="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      className ="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span className ="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div className ="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    className ="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    className ="flex items-center w-full px-4 py-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                    rows="4"
                    placeholder="special Instuctions for delivery"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>

          {/*order summary*/}

          <div className ="flex flex-col w-full ml-0 lg:ml-12 lg:w-2/5">
            <div className ="pt-12 md:pt-0 2xl:ps-4">
              <h2 className ="text-xl font-bold">Order Summary</h2>
              <div className ="flex p-4 mt-4">
                <h2 className ="text-l font-bold">ITEMS 2</h2>
              </div>
              <div className ="mt-8">
                <div className ="flex flex-col space-y-4">
                  <div className ="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/user/erondu/1600x900"
                        alt="image"
                        className ="w-60"
                      />
                    </div>
                    <div>
                      <h2 className ="text-xl font-bold">Title</h2>
                      <p className ="text-sm">Lorem ipsum dolor sit amet, tet</p>
                      <span className ="text-red-600">Price</span> &#x20B9;20
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className ="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className ="flex space-x-4">
                    <div>
                      <img
                        src="https://source.unsplash.com/collection/190727/1600x900"
                        alt="image"
                        className ="w-60"
                      />
                    </div>
                    <div>
                      <h2 className ="text-xl font-bold">Title</h2>
                      <p className ="text-sm">Lorem ipsum dolor sit amet, tet</p>
                      <span className ="text-red-600">Price</span> &#x20B9;20
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className ="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className  ="text-l font-bold">Pricing Details</div>
              
              <div className ="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Subtotal<span className ="ml-2">&#x20B9;40.00</span>
              </div>
              <div className ="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Shipping Tax<span className ="ml-2">&#x20B9;10</span>
              </div>
              <div className ="flex items-center w-full py-4 text-sm font-semibold border-b border-gray-300 lg:py-5 lg:px-3 text-heading last:border-b-0 last:text-base last:pb-0">
                Total<span className ="ml-2">&#x20B9;50.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*payments*/}
      
      <div className="flex justify-center mb-12">
        <div className='w-cp42 max-w-cpmax' >
        <p className ="mt-8 text-lg font-medium">Payment Methods</p>
        <div className ="mt-5 grid gap-6">
          <div className ="relative">
            <input
              className ="peer hidden"
              id="radio_1"
              type="radio"
              name="radio"
              checked
            />
            <span className ="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              className ="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_1"
            >
              <img
                className ="w-14 object-contain"
                src="/assets/cod-logo.png"
                alt="COD-logo"
              />
              <div className ="ml-5">
                <span className ="mt-2 font-semibold">Cash on Delivery</span>
                <p className ="text-slate-500 text-sm leading-6">
                  Cash, UPI and Card-Swiping
                </p>
              </div>
            </label>
          </div>
          <div className ="relative">
            <input
              className ="peer hidden"
              id="radio_2"
              type="radio"
              name="radio"
              checked
            />
            <span className ="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
            <label
              className ="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
              for="radio_2"
            >
              <img
                className ="w-14 object-contain"
                src="/assets/stripe-logo.png"
                alt="stripe-logo"
              />
              <div className ="ml-5">
                <span className ="mt-2 font-semibold">Stripe</span>
                <p className ="text-slate-500 text-sm leading-6">Online Payments</p>
              </div>
            </label>
          </div>
        </div>
        <div className ="mt-4">
          <button className ="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
            Order Now
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}
