import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useSelector } from "react-redux";
import { State } from "../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useEffect } from "react";
import axios from "axios";

const BookFormContainer = styled.form`
    ${tw`
        flex
        flex-col
        space-y-4
    `}
`;

const BookFormInput = styled.input`
    ${tw`
        border
        rounded
        py-2
        px-3

    `}
`;

const FromButton = styled.button`
${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-red-500
    text-xs
    font-semibold
    border-red-500
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `};
`;


export function BookForm() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [city, setCity] = React.useState("");
    const [street, setStreet] = React.useState("");
    const [zip, setZip] = React.useState("");
    const [phone, setPhone] = React.useState("");

    const state = useSelector ((state: State) => state.booking);
    const dispatch = useDispatch();
    const { setUserInfo } = bindActionCreators(actionCreators, dispatch);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Name: " + name);
        console.log("Email: " + email);
        console.log("Country: " + country);
        console.log("City: " + city);
        console.log("Street: " + street);
        console.log("Zip: " + zip);
        console.log("Phone: " + phone);

        setUserInfo({name, email, country, city, street, zip, phone});

        const requestBody = {
            store: state.storeId,
            userInfo: state.userInfo,
            bikes: ["6435ac46fe2fef5814fc69bf"],
            startDate: state.startDate,
            endDate: state.returnDate,
            status: "pending",
            isPaid: false,
        };

        try{
            const response = await axios.post("/bookings/", requestBody);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log(state.userInfo);
    }, [state.userInfo]);

    return (
        <BookFormContainer onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name: </label>
            <BookFormInput
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="email">Email: </label>
            <BookFormInput
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            <label htmlFor="country">Country: </label>
            <BookFormInput

                type="text"
                id="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
            />
            <label htmlFor="city">City: </label>
            <BookFormInput
                type="text"
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            <label htmlFor="street">Street: </label>
            <BookFormInput
                type="text"
                id="street"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
            />
            <label htmlFor="zip">Zip: </label>
            <BookFormInput
                type="text"
                id="zip"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
            />
            <label htmlFor="phone">Phone: </label>
            <BookFormInput
                type="text"
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            />
            <FromButton type="submit">Submit</FromButton>

        </BookFormContainer>
    );
}

