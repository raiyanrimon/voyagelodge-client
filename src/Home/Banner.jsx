const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 py-10">
      <div className="container mx-auto flex flex-col items-center text-white">
        <h1 className="text-4xl font-extrabold mb-2">Special Offers</h1>
        <p className="text-lg mb-4">
          Discover our exclusive offers and discounts for your perfect stay.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-md bg-blue-600">
            <h2 className="text-xl font-semibold mb-2">Weekend Getaway</h2>
            <p>20% off for weekend bookings</p>
          </div>
          <div className="p-6 rounded-md bg-green-600">
            <h2 className="text-xl font-semibold mb-2">Family Vacation</h2>
            <p>Kids stay free during summer</p>
          </div>
          <div className="p-6 rounded-md bg-yellow-500">
            <h2 className="text-xl font-semibold mb-2">Romantic Escape</h2>
            <p>Complimentary champagne and roses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
