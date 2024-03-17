import PropTypes from 'prop-types'
import AddCooking from './AddCooking';

const Cooking = ({cooking}) => {
    return (
        <div className='shadow-xl border rounded-[20px] mt-2'>
        <div className=" text-center w-[490px] ">
            <h1 className="text-[24px] pt-8 pb-2 font-bold">Currently cooking: <span>{cooking.length}</span></h1>
        </div>
        <div>
            <table className="m-3 text-[#878787] ">
                    <th>
                        <td className="pl-20">Name</td>
                        <td className="pl-9">Time</td>
                        <td className="pl-9">Calories</td>
                    </th>
            </table>
            <div className="w-[450px] pl-20 pb-6">
            <hr/>
            </div>
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