const FilterFooter = ({ }) => {
    return <section className=" bg-purple-200">
        <div className="flex justify-between items-center px-4 py-4 ">
            <div>
                <ul className="flex items-center justify-between">
                    <li className="cursor-pointer mr-4 font-semibold">Today</li>
                    <li className="cursor-pointer mr-4">Yesterday</li>
                    <li className="cursor-pointer mr-4">Prev. Week</li>
                </ul>
            </div>
            <div>

                <ul className="flex items-center justify-between">
                    <li className="cursor-pointer mr-4 font-semibold">All</li>
                    <li className="cursor-pointer mr-4">Completed</li>
                    <li className="cursor-pointer mr-4">On Going</li>
                </ul>
            </div>
        </div>
    </section>
}

export default FilterFooter