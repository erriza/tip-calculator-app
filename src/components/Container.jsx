import { useState } from "react";
import { act } from "react-dom/test-utils";
import Form from "./Form";
import Output from "./Output";

function Container () {

    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("")
    const [tip, setTip] = useState({
        active: "",
        value: 0
    })

    const [reset, setReset] = useState(false)

    const addTip = (active, btnValue) => {
        setTip({ active: active, value: btnValue })
    }

    const onReset = () => {
        if(reset) {
            setBill("")
            setPeople("")
            setTip({ active: "", value: 0 })
            setReset(false)
        }
    }

    return (
        <div className="container" onChange={() => setReset(true)}>
            <Form bill={bill} setBill={setBill} people={people} setPeople={setPeople} tip={tip} addTip={addTip} setReset={setReset}/>
            <Output bill={bill} people={people} tip={tip.value} resetCalc={onReset} reset={reset}/>
        </div>
    )
}

export default Container;