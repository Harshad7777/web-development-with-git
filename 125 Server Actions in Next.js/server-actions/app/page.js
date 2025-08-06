import Image from "next/image";

export default function Home() {
  return (

    <div className="w-2/3 mx-auto my-12">
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black bg-amber-50 rounded-2xl " type="text" />
        </div>
        <div>
          <label htmlFor="add">Address</label>
          <input name="name" id="name" className="text-black bg-amber-50 rounded-2xl " type="text" />
        </div>
        <div>
          <button className="border border-white px-3">Submit</button>
        </div>

      </form>
    </div>
  );
}
