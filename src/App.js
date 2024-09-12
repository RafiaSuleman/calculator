import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-[#E7E3DB] ">
      <div className="flex w-screen gap-4 h-screen flex-col  justify-center items-center">
        <div className="bg-white flex flex-row gap-2 p-3 rounded-lg shadow-md">
          <div className="flex flex-row gap-1 ">
            <div className="bg-[#A967FF] text-white rounded-full px-2 text-center font-bold text-xl">
              +
            </div>
            <div className="bg-[#8036BB] text-white rounded-full px-2 text-center font-bold text-xl">
              =
            </div>
          </div>
          <div className="text-[#55247A] text-3xl font-bold"> Calculator</div>
        </div>
        <div>
          <div className="p-4 rounded-lg shadow-md bg-white">
            <div className="flex flex-row gap-1">
              <div className="rounded-full bg-red-500 p-1.5 h-fit w-fit"></div>
              <div className="rounded-full bg-orange-500 p-1.5 h-fit w-fit"></div>
              <div className="rounded-full bg-green-500 p-1.5 h-fit w-fit"></div>
            </div>
            <div>
              <div className="text-4xl font-bold flex flex-center justify-center">344</div>
              <div className="border-black border-b mt-2 mx-2 "></div>
            </div>
            <div>
              <div className="flex flex-row gap-6 ">
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-2 py-1 hover:text-white">AC</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">/</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-3 py-1 hover:text-white">%</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-3 py-1 hover:text-white">÷</div>  
              </div>
              <div className="flex flex-row gap-6 ">
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">7</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">8</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">9</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-3 py-1 hover:text-white">x</div>  
              </div>
              <div className="flex flex-row gap-6 ">
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">4</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">5</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">6</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">-</div>  
              </div>
              <div className="flex flex-row gap-6 ">
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">3</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">2</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">1</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">+</div>  
              </div>
              <div className="flex flex-row gap-6 ">
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-4 py-1 hover:text-white">0</div>
                <div className="text-zinc-500 mt-1 transtition-all duration-200 cursor-pointer text-2xl hover:bg-purple-500 hover:rounded-lg px-5 py-1 hover:text-white">.</div>
                <div className=" mt-1 transtition-all duration-200 cursor-pointer text-2xl bg-purple-500 rounded-lg px-12 py-1 text-white">=</div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
