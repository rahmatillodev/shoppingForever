const NewsLetterBox = () => {
    const onSubmitHandler = (event)=>{
        event.preventDefault()
    }
  return (
    <div className="text-center">
      <p className="text-2xl font-medium to-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-grey-400 mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, nobis.
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input
          type="email"
          placeholder="Enter your Email"
          className="w-full sm:flex-1 outline-none"
          required
        />
        <button
          type="submit"
          className="bg-black uppercase text-xs px-10 py-4 text-white"
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;