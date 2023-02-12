const main = async () => {

  
  const resp  =await  fetch("http://127.0.0.1:3080/", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en",
    "content-type": "application/json",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "cross-site",
    "sec-gpc": "1",
    "Referer": "http://localhost:3000/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": JSON.stringify({"message":"Tell me about reactjs", "currentModel":"davinci"}),
  "method": "POST"
});
const data = await resp.json()
console.log(data);
}

main()