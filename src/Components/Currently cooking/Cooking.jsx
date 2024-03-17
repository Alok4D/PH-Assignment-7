import PropTypes from 'prop-types'
import AddCooking from './AddCooking';

const Cooking = ({cooking}) => {
    return (
        <div className='shadow-xl border rounded-[20px] mt-2'>
        <div className=" text-center w-[490px] ">
            <h1 className="text-[24px] pt-8 pb-2 font-bold">Currently cooking: <span>{cooking.length}</span></h1>
            <div className='border w-[80%] mx-auto'></div>
        </div>
        <div>
            <table className=" text-[#878787] w-[80%] mx-auto ">
                    <th>
                        <td className="pl-10">Name</td>
                        <td className="pl-20">Time</td>
                        <td className="pl-20">Calories</td>
                    </th>
            </table>

        </div>
        {
            cooking.map((data, index) => <AddCooking  key={cooking.id} data={data} index={index}></AddCooking>)
        }
        
    </div>
    );
};
Cooking.propTypes = {
    cooking: PropTypes.object
}
export default Cooking;