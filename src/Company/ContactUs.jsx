const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Contact Us
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Our Address
          </h2>
          <p className="text-gray-700">123 Voyage Street</p>
          <p className="text-gray-700">Travel City</p>
          <p className="text-gray-700">Bangladesh</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Phone Numbers
          </h2>
          <p className="text-gray-700">Main: +123-456-7890</p>
          <p className="text-gray-700">Support: +880-654-3210</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Email Addresses
          </h2>
          <p className="text-gray-700">General: info@voyagelodge.com</p>
          <p className="text-gray-700">Support: support@voyagelodge.com</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Send us a message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 border rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
