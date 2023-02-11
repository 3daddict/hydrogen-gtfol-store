export const NewsletterSignup = () => {
  return (
    <div className="">
      <h3 className="text-3xl font-light leading-6 text-white">
        Join the Spark
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-300">
        Sign up for our Newsletter for Inspiration and Insights.
      </p>
      <form className="mt-6 sm:flex sm:max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          name="email-address"
          id="email-address"
          autoComplete="email"
          required
          className="w-full min-w-0 appearance-none rounded-l border-0 bg-gray-300 px-3 py-1.5 text-base leading-7 text-gray-600 shadow-sm sm:ring-1 ring-inset ring-white/10 placeholder:text-gray-500 ring focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
          placeholder="Enter your email"
        />
        <div className="mt-4 sm:mt-0 sm:flex-shrink-0">
          <button
            type="submit"
            className="flex items-center justify-center w-full p-3 py-2 text-sm font-semibold text-white bg-gray-500 rounded-r shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            JOIN
          </button>
        </div>
      </form>
    </div>
  );
};
