export default function Home() {
  return (
    <div className="ma_extension_wrapper w-[300px]">
      <div className="box p-5 rounded-md shadow space-y-3">
        <h1 className="text-lg font-bold text-blue-500">Hello World</h1>
        <p className="texr-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          possimus reiciendis tempora.
        </p>
        <input
          type="search"
          id="default-search"
          className="block w-full py-2 px-4 focus:outline-none text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
        />

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Default
        </button>
      </div>
    </div>
  );
}
