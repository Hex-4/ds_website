import wordmark from "./img/wordmark-logo.png";

export default function Home() {
  return (
    <div
      id="page"
      className="fixed top-0 left-16 w-full overflow-scroll bg-primary h-screen -z-40 mr-16"
    >
      <div className="from-blue-500 to-green-500 p-40 w-screen  transiton-all bg-gradient-to-bl z-1">
        <img
          src={wordmark}
          class="w-64 h-auto text-center self-center mx-auto"
        ></img>
        <h1 className="text-white text-7xl text-center font-black">
          Welcome to the <b className="text-secondary">Dimaverse.</b>
        </h1>
        <h1 className="text-white text-3xl text-center font-black m-4">
          The <b className="text-secondary">magical</b> dimension where our work comes to life.
        </h1>
        
      </div>
        <div className="group bg-slate-800 rounded-lg transition-all duration-300 shadow-xl m-10 p-5">
          <p className="norm-text text-5xl">
            The <b className="text-secondary transition-all duration-300 ">latest.</b>
          </p>
        </div>
      <div className="bg-slate-800 rounded-lg">
        <h1 className="norm-text text-4xl">Site live!</h1>
        <p className=""></p>
      </div>
      <div className="grid grid-cols-4 grid-rows-3 gap-4 m-8 w-11/12">
        <div className="group row-span-3 p-8 bg-slate-800 rounded-lg hover:bg-secondary transition-all duration-300 shadow-xl">
          <p className="norm-text md:text-5xl text-3xl">
            We're <b className="text-secondary group-hover:text-blue-600 transition-all duration-300 ">Diamond Studios</b>, a bunch of people trying to make the world cooler.
          </p>
        </div>
        <div className="group row-span-1 col-span-3 p-8 bg-slate-800 rounded-lg hover:bg-secondary transition-all duration-300 shadow-xl">
          <p className="norm-text md:text-5xl text-3xl">
            The <b className="text-secondary group-hover:text-blue-600 transition-all duration-300 ">Dimaverse</b> is where our work goes.
          </p>
        </div>
        <div className="group row-span-1 col-span-2 p-8 bg-slate-800 rounded-lg hover:bg-secondary transition-all duration-300 shadow-xl">
          <p className="norm-text md:text-5xl text-3xl">
            Check out our projects in <b className="text-secondary group-hover:text-blue-600 transition-all duration-300 ">Our Work.</b>
          </p>
        </div>
        <div className="group row-span-1 col-span-2 p-8 bg-slate-800 rounded-lg hover:bg-secondary transition-all duration-300 shadow-xl">
          <p className="norm-text md:text-5xl text-3xl">
            We love <b className="text-secondary group-hover:text-blue-600 transition-all duration-300 ">storytelling, making, art and fun.</b>
          </p>
        </div>
        <div className="group row-span-2 col-span-1 col-start-4 row-start-2 p-8 bg-slate-800 rounded-lg hover:bg-secondary transition-all duration-300 shadow-xl">
          <p className="norm-text md:text-5xl text-3xl">
            <b className="text-secondary group-hover:text-blue-600 transition-all duration-300 ">Explore </b>the Dimaverse and it's denizens in The 'Verse.
          </p>
        </div>
      </div>
    </div>
  );
}
