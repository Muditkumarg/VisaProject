import React from "react";
import './About.css'
import { BiChevronRight } from "react-icons/bi"
import FooterPage from "../../Footer/footer";

export default function AboutPage() {


    return (<>
<div>
        <div class="aboutPannel container">
            <h1 className="aboutTitle">About us</h1>

            <div class="nevigationStyle">
                <div class="nevigationTitle col">
                    Services

                </div>
                <div><BiChevronRight /></div>
                <div class="nevigationTitle col">
                    About
                </div>
                <div><BiChevronRight /></div>
                <div class="nevigationTitle col">
                    Contacts
                </div>
            </div>
        </div>

        <div className="aboutPannelContent container-fluid">
            <div className="aboutPannelHead">
                
                    <div class="headingStyle selected ">
                        Our team</div>
                    <div class=" headingStyle">
                        Where are we located</div>
             
            </div>

            <div className="row">
                <div className="paraContent col-md-9">
                    <p >Your words matter, and our paraphrasing tool is designed to ensure you use the right ones.
                        With two free modes and five Premium modes to choose from, you can use QuillBot’s
                        online Paraphraser to rephrase any text in a variety of ways.
                        Our product will improve your fluency while also ensuring you have the a
                        ppropriate vocabulary, tone, and style for any occasion. Simply enter your text into the input box,
                        and our AI will work with you to create the best paraphrase.</p>
                        <p>The word musafir (pronounced moo-saa-fir) means “traveller” in Arabic. At Musafir.
                            com, we stand by the three core values across all levels – best available options, transparent p
                            ricing, and premium experience.
                        </p>
                        <p>Musafir.com was founded by Sheikh Mohammed bin Abdullah Al Thani, Sachin Gadoya and Albert Dias in August 
                            2007 and was inaugurated by Sheikh Abdullah bin Mohammed Al Thani on April 23, 2009. We launched our services 
                            in India in 2010 and signed an exciting partnership with cricketing legend Sachin Tendulkar in 2013, which saw him represent Musafi
                            r as a global brand ambassador until April 30, 2016.</p>
                            <h3 className="headingContent" >Our team</h3>
                </div>
            </div>

        </div>
        </div>
        <FooterPage/>

    </>)
}