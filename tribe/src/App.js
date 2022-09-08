import './App.css';
 import {ethers} from 'ethers'
 import react  from 'react'
 import {useState, useEffect} from 'react'
 import Navbar from './components/Navbar'

const Abi = require('./Tribe.json')
const contractAddress= "0x8116F2FA730058bCFc9A0e46f105F9B0A4ed252F";  //on rinkeby
const provider = new ethers.providers.Web3Provider(window.ethereum);
const accounts =  provider.send("eth_requestAccounts", []);
const signer = provider.getSigner()
const Contract = new ethers.Contract(contractAddress, Abi, provider);
const withSigner = Contract.connect(signer);

function App() {

  const [image, setImage] = useState();
  const [number, setNumber]= useState();
  const [description, setDescription] = useState()

    useEffect( () => { 
    async function fetchData() {
        try {
          const data =  await Contract.images(2)
            setImage(data.hash);
            let likes = data.likes
            let number = parseInt(likes, 16)
            setNumber(number)
            let description = data.description
            setDescription(description)
            console.log("Data ", number )
        } catch (err) {
            console.log(err);
        }
    }
    fetchData();
}, []);

// async function like(){
//   Contract.method.likeImage(1)
//   const tx = withSigner.like(1);
//   console.log(tx)
// }


  return (
    <div className="container">
    <div className="App">
      <Navbar/>
      <img className="postImage" src={image}/>
      <p>❤️ {number}</p>
      <p className="descipt">{description}</p>
      {/* <button onClick={like()}>Click to like</button> */}
    </div>
    </div>

  );
}

export default App;