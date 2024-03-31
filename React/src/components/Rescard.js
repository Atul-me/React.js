
import { PIC_URL } from "../utils/constant";

const Rescard = (props) => {
    const Res = props.resData;
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <div className="res-img">
                <img src={PIC_URL+Res.cloudinaryImageId} />
            </div>
            <div className="data">
                <h3 className="name">{Res.name}</h3>
                <h4 className="cuisines">{[Res.cuisines.join(",")]}</h4>
                <h4 className="stars">{Res.avgRating}</h4>
                <h4 className="cost">${Res.costForTwo/100} For Two</h4>
                <h4 className="d-time">Max. Delivery Time: {Res.maxDeliveryTime} Mins</h4>
            </div>
        </div>
    )
}

export default Rescard;