import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useSelector } from "react-redux";
import { State } from "../../state";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import axios from "axios";  
import { Button } from "../../components/button";
import { useNavigate } from "react-router-dom";

const BookFormContainer = styled.form`
    ${tw`
        flex
        flex-col
        space-y-4 
        border-green-500
        rounded
        border-2
        border-solid
        pt-10
        pb-10
        pl-40
        pr-40
    `}
`;

const BookFormWrapper = styled.div`
    ${tw`
        flex
        flex-row
        justify-between
        space-x-4
        p-2
    `}
`;

const BookFormInput = styled.input`
    ${tw`
        border
        rounded
        py-2
        px-3

    `}

    &:focus {
        ${tw`
            border-green-500
            rounded
            outline
            outline-green-500
            text-green-500
        `}
`;

const BookFormLabel = styled.label`
    ${tw`
        text-lg
        font-semibold
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

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

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

            navigate("/booking-process/confirmation");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <BookFormContainer onSubmit={handleSubmit}>
            <BookFormWrapper>
                <BookFormLabel htmlFor="name">Name: </BookFormLabel>
                <BookFormInput
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            </BookFormWrapper>
            <BookFormWrapper>
                <BookFormLabel htmlFor="email">Email: </BookFormLabel>
                <BookFormInput
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />
            </BookFormWrapper>
            <BookFormWrapper>
                <BookFormLabel htmlFor="country">Country: </BookFormLabel>
                <BookFormInput
                type="text"
                id="country"
                value={country}
                onChange={(event) => setCountry(event.target.value)}
            />
            </BookFormWrapper>
            <BookFormWrapper>
                <BookFormLabel htmlFor="city">City: </BookFormLabel>
                <BookFormInput
                type="text"
                id="city"
                value={city}
                onChange={(event) => setCity(event.target.value)}
            />
            </BookFormWrapper>
            <BookFormWrapper>
                <BookFormLabel htmlFor="street">Street: </BookFormLabel>
                <BookFormInput
                type="text"
                id="street"
                value={street}
                onChange={(event) => setStreet(event.target.value)}
            />
            </BookFormWrapper>
            <BookFormWrapper>
                <BookFormLabel htmlFor="zip">Zip: </BookFormLabel>
                <BookFormInput
                type="text"
                id="zip"
                value={zip}
                onChange={(event) => setZip(event.target.value)}
            />
            </BookFormWrapper>
            <BookFormWrapper>
                <BookFormLabel htmlFor="phone">Phone: </BookFormLabel>
                <BookFormInput
                type="text"
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
            />
            </BookFormWrapper>
            
            <BookFormWrapper>
                <Button text="Back" theme="filled" to="/booking-process/choose-store" />
                <FromButton type="submit">Checkout</FromButton>
            </BookFormWrapper>
      
        </BookFormContainer>
    );
}

