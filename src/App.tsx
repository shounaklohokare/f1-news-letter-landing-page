import { FC, useState } from "react"
import toast, { Toaster } from "react-hot-toast"

import f1 from '/public/F1.jpg'

const App:FC = () => {

  const [inputText, setInputText] = useState("")


  const handleClick = () => {

        if(!inputText.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")){
            toast.error("Invalid Email Id.", {
              style: {
                border: '1px solid #e10600',
                padding: '16px',
                color: '#1F1F27',
              }
            })
            return
        }

        toast.success('Subscribed Successfully!', {
            style: {
              border: '1px solid #e10600',
              padding: '16px',
              color: '#1F1F27',
            }
        });

    };
      
  


  return  <div className="main-div">
              <Toaster position="top-right"/>
              <div className="card-div"> 
                  <div className="flex-container">
                      <img src={f1} alt=""
                          className="image" />
                      <div className="newsletter-content">
                          <h2 className="newsletter-heading">{"Get Formula 1 news in your inbox"}</h2>
                          <p className="newsletter-text">{'Never miss a corner! Subscribe to get the latest F1 news & updates.'}</p>
                          <div className="newsletter-input-container">
                                <input type="text" placeholder="Enter your email address" value={inputText} onChange={(e) => { setInputText(e.target.value)}} className="input-box"/>
                                <button className="btn" onClick={() => { handleClick()}}>
                                    SUBSCRIBE
                                </button>
                          </div>
                      </div>
                  </div>
              </div>
            
          </div>

}

export default App
