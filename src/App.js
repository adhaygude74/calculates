import React, { useRef, useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  let ak;
       const [sets,funs]=useState("");                        
                      useRef()
          function handle(e)
         {
            funs(sets+(e.target.name));
         }

         function backs()
         {
          funs(sets.slice(0,sets.length-1));
         }
         function clears()
         {
          funs(sets="");
         }

         function cal()
         {
           try{
           funs(eval(sets)+"")
           }
           catch(error)
           {
             funs("Error")
           }
         }
  return (
   <>
   {/* calculator  */}
            <h1> Calculator </h1>
            <hr />
            <div>
            <form>
                <input className="input" type="text" value={sets} /><br/>
              </form>  
               <button name="1" onClick={handle}>1 </button>
               <button name="2" onClick={handle}>2 </button>
               <button name="3" onClick={handle}> 3</button>
               <button name="+" onClick={handle}> +</button><br/>
               <button name="4" onClick={handle}> 4</button>
               <button name="5" onClick={handle}> 5</button>
               <button name="6" onClick={handle}>6 </button>
               <button name="-" onClick={handle}> -</button><br/>
               <button name="7" onClick={handle}>7 </button>
               <button name="8" onClick={handle}> 8</button>
               <button name="9" onClick={handle}> 9</button>
               <button name="/" onClick={handle}> /</button><br/>
               <button name="0" onClick={handle}> 0</button>
               <button id="cl" onClick={clears}>clear</button>
               <button name="=" onClick={cal}> =</button>
               <button name="*" onClick={handle}> *</button>
               <button id="c" onClick={backs}> c</button>

            </div>
   </>
   
  );
}

export default App;
