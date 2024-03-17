const AddCooking = ({ data, index }) => {
    const {name, time, caloric} = data;
    return (
        <div>
             <table className="bg-slate-200 mt-4 border pl-6">
                        <th className="flex justify-center items-center text-[16px] text-[#878787] gap-2 ">
                            <tr className="pl-2">{index+1}</tr>
                            <tr className="pl-7">{name}</tr>
                            <tr className="pl-7">{time}</tr>
                            <tr className="pl-7">{caloric} Calories</tr>
                            
                        </th>
            </table>
        </div>
    );
};

export default AddCooking;