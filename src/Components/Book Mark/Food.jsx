const Food = ({item, cookHandle, index}) => {
    const {name, time, caloric} = item;
    return (
        <div>
            <table className="bg-slate-200 mt-4  rounded-xl pl-6 ">
                        <th className="flex justify-center items-center text-[16px] text-[#878787] gap-2">
                            <tr className="pl-2">{index+1}</tr>
                            <tr className="pl-7">{name}</tr>
                            <tr className="pl-7">{time}</tr>
                            <tr className="pl-7">{caloric} Calories</tr>
                            <tr className="pl-9"><button onClick={() => cookHandle(item)} className="p-3 rounded-3xl text-[#150B2B]  bg-[#0BE58A]">Preparing</button></tr>
                        </th>
            </table>
        </div>

    );
};

export default Food;