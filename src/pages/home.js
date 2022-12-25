import wordmark from "./img/wordmark-logo.png"

export default function Home() {
    return (
        <div id="page" className="fixed top-0 left-16 float-right overflow-scroll bg-primary h-screen z-0">
            <div className="from-blue-500 to-green-500 p-40 w-screen transiton-all bg-gradient-to-bl">
                <img src={wordmark} class="w-64 h-auto text-center self-center mx-auto"></img>
                <h1 className="text-white text-7xl text-center font-black">Welcome to the <b className="text-secondary">Dimaverse.</b></h1>
                
            </div>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full m-8">
                <div className="group row-span-3 p-8 bg-slate-800 rounded-lg hover:from-secondary hover:to-orange-500 hover:bg-gradient-to-tr transition-all duration-1000"><p className="norm-text sm:text-5xl text-3xl">We're <b className="text-secondary group-hover:text-blue-600 transition-all ">Diamond Studios</b>, a bunch of people trying to make the world cooler.</p></div>
            </div>
            
            
            
        </div>
    )
}
