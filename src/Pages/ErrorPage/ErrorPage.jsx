const ErrorPage = () => {
  return (
    <div className="text-center md:pt-40">
      <h1 className="mb-4 text-4xl md:text-9xl font-semibold text-red-500">
        404
      </h1>
      <p className="mb-4 text-2xl text-gray-600">
        Oops! Looks like you are lost.
      </p>
      <div className="animate-bounce mt-8">
        <svg
          className="mx-auto h-28 w-28 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </div>
      <p className="mt-4 md:text-lg text-gray-600">
        Lets get you back{" "}
        <a href="/" className="text-blue-500">
          home
        </a>
      </p>
    </div>
  );
};

export default ErrorPage;
