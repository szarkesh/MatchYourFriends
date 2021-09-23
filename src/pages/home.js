import React from "react";
import { Button, Container } from "../shared.js";
import styled from "styled-components";
import Step1 from "./step1.js"
import Hero from "./hero.js"
import ComingSoon from "../img/coming_soon.png"
import ArrowDown from "../img/gif-bounce-arrow.gif"
import { ReactComponent as MatchBox } from "../img/match-box.svg"
import Input from "../components/Input.js"

import { useForm } from "react-hook-form";
// import landingBackground from ".../img/landingBackground.png"



function Home() {
    document.body.style.backgroundImage = "landingBackground.png";

    let people = [0, 1]

    let [allData, setAllData] = React.useState({ contact: { 1: {}, 2: {} }, interests: { 1: {}, 2: {}, 3: {} } });

    let [isAddingNewInterest, setIsAddingNewInterest] = React.useState(false);
    let [newInterestName, setNewInterestName] = React.useState("");

    let setTab = (number) => console.log(number)

    let defaultInterests = ["sports", "music", "food", "major", "hometown", "love language"];
    let [allInterests, setAllInterests] = React.useState(defaultInterests.map((interest) => ({ name: interest, selected: false })))

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
                            <div>Person {idx + 1}</div>
                            <form class="flex-center">
                                <Input className="my-2" type="text" placeholder="Name" name="Name" maxLength={30} required={true} />
                                <Input className="my-2" type="email" placeholder="Email" />
                                <div className=" text-xl text-blue-light">-or-</div>
                                <Input className="my-2" type="tel" placeholder="Mobile number" />
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
                </div>
                <div className="flex-center">
                    <div className="font-sans text-blue-dark">Finish</div>
                    <img className="text-blue-dark arrow-down" src={ArrowDown}></img>
                    <div></div>
                </div>
            </div>
            <div className="p-4 h-screen flex-center bg-blue p-4 pt-16">
                <div className="text-3xl">Make sure everything looks good!</div>
                <div className="text-xl font-semibold text-blue-dark">This is exactly how your friends will be notified of the match!</div>
                <div>If you want your friends to know it was you, enter your name below (optional):</div>
                <Input placeholder="Your name..." />
                <button class="text-xl rounded-3xl text-blue bg-blaze py-3 px-20 my-shadow text-bold" >Send!</button>
            </div>
        </ >
    );
}

export default Home;
