import OpenAI from 'openai';
import {AI_API_KEY} from "./constants";
import {AI_API_KEY2} from "./constants";

const client = new OpenAI({
  apiKey:AI_API_KEY2,
  dangerouslyAllowBrowser:true,
});


export default client;