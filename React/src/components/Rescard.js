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
            className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:shadow-md hover:bg-gray-200 transition-all"
        >
            <img
                className="res-logo"
                src={PIC_URL + cloudinaryImageId}
                alt="Biryani"
            />

            <h3 className="py-4 text-lg font-bold" >{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>Delivery time: {sla.slaString}</h4>
        </div>
    );
};

export const withPromoted = (ResCard) => {
    return (props) => {
        return (
            <div className="absolute p-2 mb-6 ml-4 text-white bg-black rounded-lg">
                <label>Open 🟢</label>
                <ResCard {...props}/>
            </div>
        )
    }
}

export default ResCard;
