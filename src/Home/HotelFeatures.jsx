const HotelFeatures = () => {
  const features = [
    {
      icon: "🌐",
      title: "Free Wi-Fi",
      description: "High-speed internet access in all rooms and public areas.",
    },
    {
      icon: "🏊‍♂️",
      title: "Swimming Pool",
      description: "Indoor and outdoor pools for your relaxation.",
    },
    {
      icon: "🏋️",
      title: "Gym",
      description: "State-of-the-art fitness center open 24/7.",
    },
    {
      icon: "🍽️",
      title: "Restaurant",
      description: "Fine dining with a variety of cuisines to choose from.",
    },
    {
      icon: "🚗",
      title: "Free Parking",
      description: "Ample parking space available for all guests.",
    },
    {
      icon: "🛌",
      title: "Comfortable Rooms",
      description: "Luxurious rooms with all modern amenities.",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">We Provide</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex items-center"
          >
            <div className="text-4xl mr-4">{feature.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelFeatures;
