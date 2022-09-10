import React from 'react'
import { Web3Storage, File } from 'web3.storage';
import { useState, useEffect} from 'react'

function Ipfstest() {

  const [imagecid, setImagecid]= useState()

    function getAccessToken () {
        // If you're just testing, you can paste in a token
        // and uncomment the following line:
         return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhkZjE2REMzNzkzMjJiRUQxM2EzQjM4M0ZGRUViMTYwOUU1OUE5NzQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI4MTE2MTEyMDUsIm5hbWUiOiJUcmliZSJ9.bWhNHAfVh-g6OmGcVmRVYkCqMQHsv_i8fHvehTD0IUE'

      
        // In a real app, it's better to read an access token from an
        // environement variable or other configuration that's kept outside of
        // your code base. For this to work, you need to set the
        // WEB3STORAGE_TOKEN environment variable before you run your code.
       // return process.env.WEB3STORAGE_TOKEN
      }
      
      function makeStorageClient () {
        return new Web3Storage({ token: getAccessToken() })
        
      }

      async function makeFileObjects () {
        // You can create File objects from a Blob of binary data
        // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
        // Here we're just storing a JSON object, but you can store images,
        // audio, or whatever you want!
        const obj = { hello: 'world' }
        const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
      
        const files = [
          new File(['contents-of-file-1'], 'plain-utf8.txt'),
          new File([blob], 'hello.json')
        ]
       
        const client = makeStorageClient()
        const cid = await client.put(files)
        console.log('stored files with cid:', cid)
        
      }
      
makeFileObjects();

  return (
    <div>ipfstest</div>
  )
}

export default Ipfstest