import React, {useEffect} from "react";
import { Button, Container } from "../shared.js";
import styled from "styled-components";
import Step1 from "./step1.js"
import Hero from "./hero.js"
import ComingSoon from "../img/coming_soon.png"
import ArrowDown from "../img/gif-bounce-arrow.gif"
import { ReactComponent as MatchBox } from "../img/match-box.svg"
import Input from "../components/Input.js"

import { useForm } from "react-hook-form";
import match from '../img/match.png';
// import landingBackground from ".../img/landingBackground.png"



function Home() {
    document.body.style.backgroundImage = "landingBackground.png";

    let people = [0, 1]

    let [contactData, setContactData] = React.useState([{name: undefined, phone: undefined, email: undefined}, {name: undefined, phone: undefined, email: undefined}]);
    let [contactErrors, setContactErrors] = React.useState([{name: undefined, phone: undefined, email: undefined}, {name: undefined, phone: undefined, email: undefined}]);

    let [isAddingNewInterest, setIsAddingNewInterest] = React.useState(false);
    let [newInterestName, setNewInterestName] = React.useState("");

    let setTab = (number) => console.log(number)

    let setField = (idx, field, value) => {
        setContactData(contactData.map((item, index)=> index != idx ? item : {...item, [field]: value} ))
        if (contactErrors[idx][field]){
            validateContactInfo(idx, field)
        }
    }

    let validationTests = {
        name: /[a-z]+/,
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    }
    
    let validateContactInfo = (index, field) => {
        console.log("blur happened on ", index, field)
        if (!validationTests[field].test(contactData[index][field])){
            setContactErrors(contactErrors.map((item, idx)=> idx != index ? item : {...item,  [field]: "Error!"}))
        }
    }

    let addInterest = () => {
        setAllInterests([...allInterests, {name: newInterestName, selected: true}])
        setNewInterestName(undefined);
        setIsAddingNewInterest(false);
    }

    useEffect(() => {
        // Update the document title using the browser API
        console.log("Contact data set to ", contactData)
      }, contactData);


    useEffect(() => {
        // Update the document title using the browser API
        console.log("Contact errors have been set to ", contactErrors)
      }, contactErrors);


    let defaultInterests = ["sports", "music", "food", "major", "hometown", "love language"];
    let [allInterests, setAllInterests] = React.useState(defaultInterests.map((interest) => ({ name: interest, selected: false })))


    let selectedInterests = allInterests.filter((interest)=>interest.selected).map((item)=>item.name)

    let chatMessage = `Your mutual friend thinks you and ${contactData[1].name} would be a great match! ${selectedInterests.length > 0 ? 'They think you have ' + selectedInterests.slice(0,3).join(',') + ' in common! ' : ''}Why don't you shoot them a text at ${contactData[1].phone}?`


    const { register, handleSubmit } = useForm();
    return (
        <>
            <div className="h-screen bg-blue-lightest flex flex-col items-apart p-4">
                <div className="flex-center-2d flex-grow">
                    {/* <div className="text-bold text-2xl">Coming Soon</div> */}
                    <img className="coming-soon" src={ComingSoon}></img>
                    <MatchBox className="w-32" />
                </div>
                <div className="flex-center">
                    <div className="font-sans text-blue-dark">Match your friends in the meantime</div>
                    <img className="text-blue-dark arrow-down" src={ArrowDown}></img>
                    <div></div>
                </div>
            </div>
            <div className="p-4 h-screen flex-center p-4 pt-16">
                <div className="text-3xl font-semibold text-blaze">First, a bit about your friends</div>
                <div className="text-xl font-semibold text-blue-dark">How can we hit them up? Either two numbers or two emails will work.</div>
                <div className="flex-center-2d flex-grow">
                    <div className='grid md:grid-cols-2 gap-10'>
                        {people.map((item, idx) => (<div>
                            <form class="flex-center">
                                <img className="mb-8" src={match}/>
                                <Input blur={(_) => validateContactInfo(idx, "name")} error={contactErrors[idx]["name"]} change={(event)=>setField(idx, "name", event.target.value)} className="my-2" type="text" placeholder="Name" name="Name" maxLength={30} required={true} />
                                {/* <Input blur={(_) => validateContactInfo(idx, "email")} error={contactErrors[idx]["email"]} change={(event)=>setField(idx, "email", event.target)} className="my-2" type="email" placeholder="Email" />
                                <div className=" text-xl text-blue-light">-or-</div> */}
                                <Input blur={(_) => validateContactInfo(idx, "phone")} error={contactErrors[idx]["phone"]} change={(event)=>setField(idx, "phone", event.target.value)} className="my-2" type="tel" placeholder="Phone number" />
                            </form>
                        </div>))}
                    </div>

                </div>
                <div className="flex-center">
                    <div className="font-sans text-blue-dark">What makes them a good match?</div>
                    <img className="text-blue-dark arrow-down" src={ArrowDown}></img>
                    <div></div>
                </div>
            </div>
            <div className="p-4 h-screen flex-center p-4 pt-16">
                <div className="text-3xl">What do person A and person B have in common?</div>
                <div className="text-xl font-semibold text-blue-dark">Click on fields that they have in common, shared interests, or write your own!</div>
                <div className="py-10 flex flex-row flex-wrap justify-center max-w-2xl">
                    {
                        allInterests.map((interest) => (
                            <button onClick={() => setAllInterests(allInterests.map((i) => i.name != interest.name ? ({ ...i }) : ({ ...i, selected: !i.selected })))} className={`px-4 m-2 rounded-md py-1 font-semibold bg-${interest.selected ? 'blaze' : 'white'} text-${interest.selected ? 'blue-lightest' : 'blue-dark'} border ${interest.selected ? 'border-transparent' : 'border-blue-dark'} `}>{interest.name}</button>
                        ))
                    }
                    {
                        !isAddingNewInterest && <button onClick={()=>setIsAddingNewInterest(true)}>Add your own...  </button>
                    }
                    {
                        isAddingNewInterest && (<div class="flex flex-row">
                                                <Input onEnter={()=>addInterest()} autofocus={true} change={(event)=>setNewInterestName(event.target.value)} placeholder="Any interest..." maxLength={24}/>
                                                <button onClick={()=>addInterest()}>Done</button>
                                                </div>)
                    }
                </div>
                <div className="flex-center">
                    <div className="font-sans text-blue-dark">Finish</div>
                    <img className="text-blue-dark arrow-down" src={ArrowDown}></img>
                    <div></div>
                </div>
            </div>
            {
                contactDataValid() && 
                <div className="p-4 h-screen flex-center bg-blue p-4 pt-16">
                    <div className="text-3xl">Make sure everything looks good!</div>
                    <div className="text-xl font-semibold text-blue-dark">This is exactly how your friends will be notified of the match!</div>
                    <div>If you want your friends to know it was you, enter your name below (optional):</div>
                    <div class="chat-bubble">{chatMessage}</div>
                    <Input placeholder="Your name..." />
                    <button class="text-xl rounded-3xl text-blue bg-blaze py-3 px-20 my-shadow text-bold" >Send!</button>
                </div>
            }
        </ >
    );
}

export default Home;
