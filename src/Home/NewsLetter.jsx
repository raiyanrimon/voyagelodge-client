const NewsLetter = () => {
  return (
    <div className="space-y-5">
      <div className="text-center">
        <h2 className="font-bold text-4xl text-red-500">
          Subscribe and get Hot Deals
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="form-control">
          <label className="input-group">
            <input
              type="email"
              placeholder="Your Email "
              className="input input-bordered"
            />
            <span className="btn btn-secondary">Subscribe</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
