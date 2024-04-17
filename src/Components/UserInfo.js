import React, { useEffect, useState } from "react";
import Accordion1 from "./Accordion1";
import { Typography, TextField, Button, Box, Container } from "@mui/material";


function UserInfo() {
    const [userlist, setUserlist] = useState([]);
    const [expanded, setExpanded] = React.useState(false);
    const [search, setSearch] = useState('');

    const getData = async () => {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((result) => {
                setUserlist(result);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    React.useEffect(() => {
        getData();
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const TextChange = (event) => {
        setSearch(event.target.value);
    };


    return (
        <Container>
            <Typography sx={{ fontSize: 25, textAlign: 'center', fontWeight: 'bold', mb: '20px' }}>User Information</Typography>

            <TextField
                
                fullWidth
                variant="standard"
                value={search}
                onChange={TextChange}
                placeholder="Search..."
            />

            {userlist.filter((item) => {
                console.log("item",item);
                return search.toLocaleLowerCase() === ''
                    ? item
                    : item.name.toLocaleLowerCase().includes(search)
            })
                .map((items, i) => {
                    return (
                        
                        <Accordion1 key={i} Data={items} expand={expanded} Collapse={handleChange} index={i} />
                        
                    );
                })}
        </Container>

    );
}

export default UserInfo;