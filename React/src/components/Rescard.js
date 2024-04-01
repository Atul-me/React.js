import { PIC_URL } from '../utils/constant';

const ResCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div
            className="res-card"
            style={{
                backgroundColor: '#f0f0f0',
            }}
        >
            <img
                className="res-logo"
                src={PIC_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery time: {sla.slaString}</h4>
        </div>
    );
};

export default ResCard;
