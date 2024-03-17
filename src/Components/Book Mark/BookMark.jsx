import PropTypes from 'prop-types'
import Food from './Food';

const BookMark = ({button, cookHandle}) => {
    console.log(cookHandle);
    return (
        <div>
        <div className="border mt-12 rounded-2xl">
            <div className=" text-center w-[400px] ">
                <h1 className="text-[24px] pt-8 pb-2 font-bold">Want to cook: <span>{button.length}</span></h1>
            </div>
            <table className="m-3 w-96 ">
                    <th>
                        <td className="pl-10">Name</td>
                        <td className="pl-20">Time</td>
                        <td className="pl-20">Calories</td>
                    </th>
                </table>
                <div className="w-[350px] pl-14 pb-6">
                <hr/>
            
                </div>

                {
                    button.map((item) => <Food cookHandle={cookHandle} key={button.id} item={item}></Food>)
                }

        </div>
        </div>
    );
};
BookMark.propTypes = {
    button : PropTypes.array
}
export default BookMark;