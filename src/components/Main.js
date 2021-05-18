import Forecast from "./Forecast";

const Main = () => {
    return (
        <div>
        <div className="currentDay">
            <Forecast id={0} />
        </div>
        <br></br>
        <Forecast id={2} />
        <br></br>
        <div className="brightLine birds">
            <Forecast id={4} />
        </div>
        <br></br>
        <Forecast id={6} />
        <br></br>
        <div className="brightLine clouds">
            <Forecast id={8} />
        </div>
        </div>
    )
}

export default Main
