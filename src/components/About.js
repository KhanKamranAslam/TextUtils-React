import React from 'react'

export default function About() {
  return (
        <div className="container">
            <h1 className="my-3">About Us</h1>
           <div className="accordion" id="accordionExample">
             <div className="accordion-item">
              <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             <strong> About TextUtils Web App</strong>
            </button>
              </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                 <div className="accordion-body">
                  Welcome to TextUtils, a versatile online text manipulation tool developed by Kamran Khan. This user-friendly web application empowers you to effortlessly modify and analyze your text with a range of useful features. 
                  
                  TextUtils is designed with simplicity in mind, making it an indispensable tool for writers, editors, and anyone working with text.
               </div>
               </div>
            </div>
        <div className="accordion-item">
         <h2 className="accordion-header">
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"      data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Key Features</strong>
          </button>
             </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                Convert Case:
                Easily transform your text with the click of a button. Toggle between uppercase and lowercase to suit your needs.
                <br/><br/>
                Copy All Text:
                Streamline your workflow by copying the entire text with a single click. Effortlessly paste it wherever you need.
                <br/><br/>
                Clear All Text:
                Start fresh with the ability to clear all text fields in an instant. Perfect for when you want to wipe the slate clean.
                <br/><br/>
                Text Summary:
                Get a quick overview of your text. This feature provides a summary, giving you insights into the length and composition of your content.
                <br/><br/>
                Reading Time Estimation:
                Ever wondered how long it takes to read your text? TextUtils calculates the estimated reading time, helping you manage your time effectively.
                <br/><br/>
                Text Preview:
                Preview your text before making any changes. Ensure everything looks just right before committing to modifications.
              </div>
              </div>
              </div>
             <div className="accordion-item">
              <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong>Our Aims</strong>
                 </button>
                 </h2>
                     <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      Developed with passion by Kamran Khan, this web app aims to enhance your text manipulation experience. Whether you're a professional writer or a casual user, TextUtils is here to make your text editing tasks more efficient and enjoyable.
                      <br/><br/>Start optimizing your text today with TextUtils! 
                      </div>
                     </div>
                    </div>
                   </div>
                   {/* <div className="container my-3">
                     <button type="button" className="btn btn-primary">Enable dark mode</button>
                   </div> */}

            </div>
  )
}