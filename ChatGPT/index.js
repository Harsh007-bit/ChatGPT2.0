const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

const configuration = new Configuration({
    organization: "org-Q553zpUJYpXobi4SgSLWjlHa",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);



const app = express();
app.use(bodyParser.json())
app.use(cors())

const port = 3080
app.post('/',async(req,res)=>{
  const {message,currentModel} = req.body;
   console.log(message,'message')
   console.log(currentModel,'currentModel')
    const response = await openai.createCompletion({
        model: `${currentModel}`,
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.7,
      });
       
      console.log(response.data)
      
      res.json({
        // data:response.data
        message:response.data.choices[0].text
        
      })
})

app.get('/models',async(req,res)=>{
  
  const response = await openai.listEngines();
  console.log(response.data.data)
  res.json({
      models: response.data.data
  })
})
app.listen(port,()=>{
    console.log(`example app listening at http://localhost:${port}`)
})