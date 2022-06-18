import { Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import React, {useState} from "react";
import './thirdPage.css';

export default function ThirdPage(){

    const [mySelf, setMySelf] = useState(false);
    const [team, setTeam] = useState(false);
    const [color, setColor] = useState('none');
    const [ccolor, setCcolor] = useState('none');

    if(mySelf) {
        console.log('Myself')
    }
    else if(team) {
        console.log('Team')
    }

    const cardSelect = (card) => {
        switch(card) {
            case "mySelf":
                setMySelf(true);
                setTeam(false);
                setColor('1px solid #5a4ad1');
                setCcolor('none');
                break;
            case "team":
                setMySelf(false);
                setTeam(true);
                setCcolor('1px solid #5a4ad1');
                setColor('none');
                break;
            default:
                setMySelf(false);
                setTeam(false);
        }
    }

    const style = {
        border: color
    }

    const style2 = {
        border: ccolor
    }

    return(
        <div className="thirdPage">
            <p className="head3">
                How are you planning to use Eden?
            </p>
            <p className="subHead3">
                We'll streamline your setup experience accordingly.
            </p>
            <div className="cards">
                <Card onClick={e => cardSelect ("mySelf")} className="card" style={style} >
                    <CardActionArea>
                        <CardMedia component="img" alt="MySelf" image='/images/cutshort1.png' className="img3" />
                        <CardContent>
                            <span className="title3">
                                For myself
                            </span>
                            <br /><br/>
                            <span className="text3">
                                Write better. Think more clearly. Stay Organized
                            </span>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card onClick={e => cardSelect ("team")} className="card" style={style2} >
                    <CardActionArea>
                        <CardMedia component="img" alt="MySelf" image='/images/cutshort2.png' className="img4" />
                        <CardContent>
                            <span className="title3">
                                With my team
                            </span>
                            <br /><br/>
                            <span className="text3">
                                Wikis, docs, tasks & projects, all in one place.
                            </span>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    )
}