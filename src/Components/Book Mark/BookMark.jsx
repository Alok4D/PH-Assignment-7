import PropTypes from 'prop-types'
import Food from './Food';

const BookMark = ({button, cookHandle}) => {
    console.log(cookHandle);
    return (
        
        <div className="border mt-12 rounded-2xl">
            <div className="text-center">
                <h1 className="text-[24px] pt-8 pb-[18px] font-bold">Want to cook : <span>{button.length}</span></h1>
                <div className='border w-[80%] mx-auto'></div>
            </div>

        <div className='table-card-data mt-6 pb-4'>
            <table className='w-[80%] mx-auto'>
                    <th>
                        <td className="pl-10">Name</td>
                        <td className="pl-20">Time</td>
                        <td className="pl-20">Calories</td>
                    </th>
            </table>
        </div>

                {
                    button.map((item, index) => <Food cookHandle={cookHandle} key={button.id} item={item} index={index}></Food>)
                }

        </div>
        
    );
};
BookMark.propTypes = {
    button : PropTypes.array
}
export default BookMark;