import "../App.css";
import { ethers, BigNumber } from "ethers";
import react from "react";
import { useState, useEffect } from "react";
import { Web3Storage } from 'web3.storage'

const Abi = require("../Tribe.json");
const contractAddress = "0x8116F2FA730058bCFc9A0e46f105F9B0A4ed252F"; //on rinkeby
const provider = new ethers.providers.Web3Provider(window.ethereum);
//const accounts = provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const Contract = new ethers.Contract(contractAddress, Abi, provider);
const withSigner = Contract.connect(signer);
const payment = (0.01).toString(16);
console.log(payment);

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhkZjE2REMzNzkzMjJiRUQxM2EzQjM4M0ZGRUViMTYwOUU1OUE5NzQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI4MTE2MTEyMDUsIm5hbWUiOiJUcmliZSJ9.bWhNHAfVh-g6OmGcVmRVYkCqMQHsv_i8fHvehTD0IUE"


function Createmessage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [description, setDescription]= useState()
    const [imagecid, setImagecid]= useState();
    const [desccid, setDesccid]= useState();

//upload to ipfs and get the cid
async function ipfsUpload(){
    const client =new Web3Storage({ token: token })
    //const obj = { hello: 'world' }
    const image = new Blob([(selectedImage)])
    const desc = new Blob([(description)])
    const imageFile = [
      //new File(['contents-of-file-1'], 'plain-utf8.txt'),
      new File([image], 'image')
    ]
    const cid = await client.put(imageFile)
    setImagecid(cid)
    console.log('image stored at cid ', cid)
    const descFile = [
      //new File(['contents-of-file-1'], 'plain-utf8.txt'),
      new File([desc], 'Description')
    ]

    const descriptioncid = await client.put(descFile)
    setDesccid(descriptioncid)
    console.log('stored files with cid:', desccid)

    send()
}

// send cid hash to contract
async function send(){
    //const gas = await provider.getGasPrice()
    //console.log(parseInt(gas))
    //const price = parseInt(gas)
    withSigner.uploadImage(imagecid, desccid);
}
    



    return (
        <>
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(null)}>Remove</button>
        </div>
      )}
      <br />
     
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
          <form>
      <label>Description:
        <input
          type="text" 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
    </form>
    </div>
    <button onClick={() => ipfsUpload()}>
  Click to send
</button>
        </>

    )
} 

export default Createmessage;