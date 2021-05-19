import Forecast from "./Forecast";

const Main = () => {
    let addNum = 0;
    let days = [0];
    days[0]+=addNum
    days = [days[0], days[0] + 2, days[0] + 4, days[0] + 6, days[0] + 8]

    return (
        <div>
        <div className="currentDay">
            <Forecast id={days[0]} />
        </div>
        <br></br>
        <Forecast id={days[1]} />
        <br></br>
        <div className="brightLine birds">
            <Forecast id={days[2]} />
        </div>
        <br></br>
        <Forecast id={days[3]} />
        <br></br>
        <div className="brightLine clouds">
            <Forecast id={days[4]} />
        </div>
        </div>
    )
}

export default Main
