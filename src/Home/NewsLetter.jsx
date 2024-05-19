const NewsLetter = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-bold text-4xl sm:text-5xl text-red-500 mb-6">
          Subscribe and get Hot Deals
        </h2>
        <p className="text-gray-600 mb-8">
          Sign up for our newsletter to receive the latest news and exclusive
          offers directly in your inbox.
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            <form className="sm:flex">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 px-5 py-3 bg-red-500 text-white font-medium rounded-md shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition ease-in-out duration-150"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
