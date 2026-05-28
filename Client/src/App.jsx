import axios from "axios";

const App = () => {
  const handleSubmit = e => {
    e.preventDefault();

    const image = e.target.image.files[0];

    const formData = new FormData();
    formData.append("image", image);

    axios.post("http://127.0.0.1:5000/upload", formData)
      .then(res => console.log(res));
    console.log(image);
  }
  return (
    <div className="p-10 min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-5">
        <input type="file" accept="image/*" name="image" className="p-10 bg-gray-400 rounded-xl border border-blue-300" />
        <button type="submit" className="text-xl px-3 py-2 bg-gray-400 rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default App;