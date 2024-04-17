import React from "react"
import { Card,Typography,} from '@mui/material';

function ListCard({items}) {
    return (
        <>
            <Card sx={{ boxShadow: '6px 4px 5px grey !important'}}>
                <Typography><b>Email:</b>&nbsp;{items.email} </Typography>
                <Typography><b>Phone:</b>&nbsp;{items.phone} </Typography>
                <Typography><b>Company:</b>&nbsp;{items.company.name} </Typography>
                <Typography><b>Address:</b>&nbsp;{items.address.suite},&nbsp;{items.address.street},&nbsp;{items.address.city},&nbsp;{items.address.zipcode} </Typography>
            </Card>
        </>
    )
}

export default ListCard;