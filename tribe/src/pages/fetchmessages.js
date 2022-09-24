import "../App.css";
import { ethers, BigNumber } from "ethers";
import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const Abi = require("../Tribe.json");
const contractAddress = "0x8116F2FA730058bCFc9A0e46f105F9B0A4ed252F"; //on rinkeby
const provider = new ethers.providers.Web3Provider(window.ethereum);
const accounts = provider.send("eth_requestAccounts", []);
const signer = provider.getSigner();
const Contract = new ethers.Contract(contractAddress, Abi, provider);
const withSigner = Contract.connect(signer);
const payment = (0.01).toString(16);
console.log(payment);
const id = 7;

function Fetchmessages() {
  const [image, setImage] = useState();
  const [number, setNumber] = useState();
  const [description, setDescription] = useState("");
  const [tips, setTips] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await Contract.images(id);
        setImage("https://" + data.hash + ".ipfs.w3s.link/image");
        console.log("image address", image)
        let likes = data.likes;
        let number = parseInt(likes, 16);
        setNumber(number);
        let url = "https://"+ data.description + ".ipfs.w3s.link/Description";
        const getDescription = await axios.get(url)
        console.log(getDescription.data)
        setDescription(getDescription.data);
        console.log("DEscri", description)
        console.log("Data ", number);
        let allTips = data.tipAmount;
        let tipamount = parseInt(allTips, 10) / 10 **18;
        setTips(tipamount);
        console.log("tip ammount ", tipamount);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  async function like() {
    withSigner.likeImage(id);
    const tx = withSigner.like(1);
    console.log(tx);
  }
  async function tip(value) {
    //const tipped = await withSigner.tipImageOwner(2, payment)
    const tipped = await withSigner.tipImageOwner(id, {
      value: ethers.utils.parseUnits(value, "ether"),
    });
    //const tx = withSigner.tipImageOwner(2);
    console.log(tipped);
  }

  return (
    <>
      <div className="container">
        <div className="App">
          <div className="content">
            <img className="postImage" src={image} />
            <p className="descipt">{description}</p>
            <button onClick={() => like()}>Click to like</button>
            <p>❤️ {number}</p>
            <p>Tips {tips}</p>
            <button onClick={() => tip("0.1")}>Click to tip 0.1</button>
            <button onClick={() => tip("0.01")}>Click to tip 0.01</button>
            <button onClick={() => tip("0.001")}>Click to tip 0.001</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fetchmessages;
