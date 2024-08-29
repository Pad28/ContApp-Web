import "../../styles/components/activity/Avance.css";
import "../../styles/components/buttons/ButtonPrimary.css";
import { IconType } from 'react-icons';
import { Button } from "../buttons/ButtonPrimary";


interface Props {
    nameActivity: string;
    titulo: string;
    text: string;
    style?: React.CSSProperties;
    icon: IconType;
    onClickButton: () => void;
}

export const Avance = ({ onClickButton, icon: Icon, text, titulo }: Props) => {
    return (
        <div
            style={{
                backgroundColor: "#74022D",
                height: 200,
                width: 350,
                borderRadius: 10,
                padding: 5,
            }}>

            <h3 style={{
                color:"white",
                margin: 0, 
                padding:10,
                fontSize: 30
            }}>{titulo}</h3>
             
        <div
            style={{
                
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
            }}
        >
            <div
                style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    padding: 10
                }}>

                <p style={{
                    borderRadius: 10,
                    border: "solid 1.5px",
                    borderColor: "white",
                    color: "white",
                    margin: 0,
                    padding: 5


                    
                }}>Calificación</p>
            </div>

            <div
                style={{
                    display: "flex",
                    padding: 10,
                    textAlign: "center",
                    justifyContent: "center"

                }}>

                <p style={{
                    borderRadius: 10,
                    border: "solid 1.5px",
                    borderColor: "white",
                    color: "white",
                    margin: 0,
                    padding: 5,
                    width: 80

                    
                }}>{text}</p>
            </div>

            <div
                style={{
                    display:"flex",
                    justifyContent: "center",
                    padding: 10,
                    alignSelf:"center"
                }}>

                
                <Icon style={{
                    color: "white",
                    margin: 0,
                    padding: 5,
                    width:45,
                    height:45
                }} className="icon" />
            </div>

            <div
                style={{
                    display: "flex",
                    padding: 10,
                    textAlign: "center",
                    justifyContent: "center"
                }}>

                <Button
                    onClick={()=>{onClickButton}}
                    text="Mas"
                    
                    />
            </div>

            
            




        </div >
    
        </div>

    );
}
