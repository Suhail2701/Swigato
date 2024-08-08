import { useRef } from "react";
import client from "../utils/openAi";

const GptSearch =  () => {

    const searchText = useRef(null);

    const handleAiSearch = async ()=>{
        console.log(searchText.current.value);
        //make an api call to GPT API

        const gptResults = await client.chat.completions.create({
            messages: [{ role: 'user', content: searchText.current.value }],
            model: 'gpt-3.5-turbo',
          });

          console.log(gptResults.choices);
    }
    
    return (
        <div>
            <div className="text-center p-2 mt-6"> 
                <form onSubmit={(e) => e.preventDefault()} >
                    <input type="text " ref={searchText} placeholder="Ask me anything about food..." className="p-2 border border-black border-solid w-3/12 " />
                    <button className="p-2 border border-black border-solid bg-yellow-500 ml-4"
                    onClick={handleAiSearch}>Search</button>
                </form>
            </div>
        </div>
    )
}


export default GptSearch;