import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import ComingSoon from "../img/coming_soon.png";
import ArrowDown from "../img/gif-bounce-arrow.gif";
import { ReactComponent as MatchBox } from "../img/match-box.svg";
import Input from "../components/Input.js";

import { useForm } from "react-hook-form";
import match from "../img/match.png";
// import landingBackground from ".../img/landingBackground.png"

const SERVER_URL = window.location.href.includes("3000") ? "http://localhost:3001" : "";

function Home() {
  document.body.style.backgroundImage = "landingBackground.png";

  let people = [0, 1];

  const contactDataDefault = [
    { name: "", phone: "", email: "" },
    { name: "", phone: "", email: "" },
  ];
  let [contactData, setContactData] = React.useState(contactDataDefault);

  let [contactErrors, setContactErrors] = React.useState([
    { name: undefined, phone: undefined, email: undefined },
    { name: undefined, phone: undefined, email: undefined },
  ]);

  let [contactDataValid, setContactDataValid] = React.useState(true);
  let [isAddingNewInterest, setIsAddingNewInterest] = React.useState(false);
  let [newInterestName, setNewInterestName] = React.useState("");

  let [matcherName, setMatcherName] = React.useState("");

  let [textIsSending, setTextIsSending] = React.useState(false);
  let [textSent, setTextSent] = React.useState(false);

  const [settingInterests, setSettingInterests] = useState(false);
  const [sendingText, setSendingText] = useState(false);

  const contactDataRef = useRef(null);
  const interestRef = useRef(null);
  const sendTextRef = useRef(null);

  let reset = () => {
    setSettingInterests(false);
    setSendingText(false);
    setTextSent(false);
    setContactData(contactDataDefault);
  };
  useEffect(
    () =>
      setContactDataValid(
        validationTests["phone"].test(contactData[0].phone) &&
          validationTests["phone"].test(contactData[1].phone) &&
          validationTests["name"].test(contactData[0].name) &&
          validationTests["name"].test(contactData[1].name)
      ),
    [contactData]
  );

  let goToSendText = () => {
    setSendingText(true);
    setTimeout(() => {
      if (sendTextRef.current) sendTextRef.current.scrollIntoView({ behavior: "smooth" });
    });
  };

  let goToSetInterests = () => {
    setSettingInterests(true);
    setTimeout(() => {
      if (interestRef.current) interestRef.current.scrollIntoView({ behavior: "smooth" });
    });
  };

  useEffect(() => {
    if (settingInterests && interestRef.current) {
    }
  }, [settingInterests]);

  useEffect(() => {
    if (sendingText && sendTextRef.current) {
      sendTextRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [sendingText]);

  let setField = (idx, field, value) => {
    setContactData(contactData.map((item, index) => (index != idx ? item : { ...item, [field]: value })));
    if (contactErrors[idx][field]) {
      validateContactInfo(idx, field, value);
    }
  };

  let validationTests = {
    name: /[a-z]+/,
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  };

  let errorStrings = {
    name: "Enter a name!",
    email: "Invalid email",
    phone: "Enter a valid phone number (i.e. 4081234567)",
  };

  let validateContactInfo = (index, field, value) => {
    let fieldValid = validationTests[field].test(value);
    setContactErrors(
      contactErrors.map((item, idx) =>
        idx != index ? item : { ...item, [field]: fieldValid ? undefined : errorStrings[field] }
      )
    );
  };

  let addInterest = () => {
    if (newInterestName.trim().length > 0) {
      setAllInterests([...allInterests, { name: newInterestName, selected: true }]);
    }
    setNewInterestName(undefined);
    setIsAddingNewInterest(false);
  };

  let submit = () => {
    setTextIsSending(true);
    fetch(SERVER_URL + "/api/messages", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        message1: chatMessage(contactData[1]),
        message2: chatMessage(contactData[0]),
        phone1: contactData[0].phone,
        phone2: contactData[1].phone,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setTextSent(true);
      });
  };

  let defaultInterests = ["sports", "music", "food", "major", "hometown", "love language"];
  let [allInterests, setAllInterests] = React.useState(
    defaultInterests.map((interest) => ({ name: interest, selected: false }))
  );

  let selectedInterests = allInterests.filter((interest) => interest.selected).map((item) => item.name);

  let interestsString = undefined;
  if (selectedInterests.length == 0) {
    interestsString = "";
  } else if (selectedInterests.length == 1) {
    interestsString = selectedInterests[0];
  } else if (selectedInterests.length == 2) {
    interestsString = selectedInterests[0] + " and " + selectedInterests[1];
  } else {
    interestsString = selectedInterests[0] + ", " + selectedInterests[1] + ", and " + selectedInterests[2];
  }

  let interestSentence =
    interestsString.length > 0 ? " Some things you have in common include " + interestsString + "." : "";

  let chatMessage = (info) =>
    `Your mutual friend ${matcherName && matcherName + " "}thinks you and ${
      info.name
    } would be a great match!${interestSentence} Why don't you shoot them a text at ${info.phone}?`;

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
      <div ref={contactDataRef} className="p-4 h-screen flex-center p-4 pt-16">
        <div className="text-3xl font-semibold text-blaze">First, a bit about your friends</div>
        <div className="text-xl font-semibold text-blue-dark">
          How can we hit them up? Either two numbers or two emails will work.
        </div>
        <div className="flex-center-2d flex-grow">
          <div className="grid md:grid-cols-2 gap-10">
            {people.map((item, idx) => (
              <div>
                <form class="flex-center">
                  <img className="mb-8" src={match} />
                  <Input
                    blur={(_) => validateContactInfo(idx, "name", contactData[idx]["name"])}
                    error={contactErrors[idx]["name"]}
                    change={(event) => setField(idx, "name", event.target.value)}
                    value={contactData[idx]["name"]}
                    className="my-2"
                    type="text"
                    placeholder="Name"
                    name="Name"
                    maxLength={30}
                    required={true}
                  />
                  {/* <Input blur={(_) => validateContactInfo(idx, "email")} error={contactErrors[idx]["email"]} change={(event)=>setField(idx, "email", event.target)} className="my-2" type="email" placeholder="Email" />
                                <div className=" text-xl text-blue-light">-or-</div> */}
                  <Input
                    blur={(_) => validateContactInfo(idx, "phone", contactData[idx]["phone"])}
                    error={contactErrors[idx]["phone"]}
                    value={contactData[idx]["phone"]}
                    change={(event) => setField(idx, "phone", event.target.value)}
                    className="my-2"
                    type="tel"
                    placeholder="Phone number"
                  />
                </form>
              </div>
            ))}
          </div>
        </div>
        {contactDataValid && (
          <>
            <div className="flex-center">
              <Button onClick={() => goToSetInterests()}>What makes them a good match?</Button>
              <img className="text-blue-dark arrow-down" src={ArrowDown}></img>
              <div></div>
            </div>
          </>
        )}
      </div>
      {settingInterests && (
        <>
          <div ref={interestRef} className="p-4 h-screen flex-center p-4 pt-16">
            <div className="text-3xl">
              What do {contactData[0].name} and {contactData[1].name} have in common?
            </div>
            <div className="text-xl font-semibold text-blue-dark">
              Click on fields that they have in common, shared interests, or write your own!
            </div>
            <div className="py-10 flex flex-row flex-wrap justify-center max-w-2xl">
              {allInterests.map((interest) => (
                <button
                  onClick={() =>
                    setAllInterests(
                      allInterests.map((i) => (i.name != interest.name ? { ...i } : { ...i, selected: !i.selected }))
                    )
                  }
                  className={`px-4 m-2 rounded-md py-1 font-semibold bg-${interest.selected ? "blaze" : "white"} text-${
                    interest.selected ? "blue-lightest" : "blue-dark"
                  } border ${interest.selected ? "border-transparent" : "border-blue-dark"} `}
                >
                  {interest.name}
                </button>
              ))}
              {!isAddingNewInterest && <button onClick={() => setIsAddingNewInterest(true)}>Add your own... </button>}
              {isAddingNewInterest && (
                <div class="flex flex-row items-center">
                  <Input
                    classes="rounded-l-md p-2"
                    onEnter={() => addInterest()}
                    autofocus={true}
                    change={(event) => setNewInterestName(event.target.value)}
                    placeholder="Any interest..."
                    maxLength={24}
                  />
                  <button class="bg-blaze text-white rounded-r-md p-2 cursor-pointer" onClick={() => addInterest()}>
                    Done
                  </button>
                </div>
              )}
            </div>

            <div className="flex-center">
              <Button onClick={() => goToSendText()}>Finish up!</Button>
              <img className="text-blue-dark arrow-down" src={ArrowDown}></img>
              <div></div>
            </div>
          </div>
        </>
      )}

      {sendingText && (
        <div ref={sendTextRef} className="p-4 h-screen flex-center bg-blue p-4 pt-16">
          <div className="text-3xl">Make sure everything looks good!</div>
          <div className="text-xl font-semibold text-blue-dark">
            This is exactly how your friends will be notified of the match!
          </div>
          <div class="w-48 md:w-72 bg-gray rounded-xl p-4 my-8">{chatMessage(contactData[0])}</div>
          <div>If you want your friends to know it was you, enter your name below (optional):</div>
          <Input change={(event) => setMatcherName(event.target.value)} placeholder="Your name..." />
          <Button onClick={() => submit()} disabled={textSent}>
            {textSent ? "Sent" : "Send!"}
          </Button>
          {textSent && (
            <div class="cursor-pointer hover:underline" onClick={() => reset()}>
              Make another match!
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
