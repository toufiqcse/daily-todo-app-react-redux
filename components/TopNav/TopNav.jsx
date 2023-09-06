import Header from "../Header/Header"

const TopNav = () => {
    return (
        <>

            <div className="w-full bg-purple-600 text-white font-medium text-3xl py-4 text-center leading-10 ">
                <p>Simple Daily To Do Application</p>

            </div>
            <div className="bg-purple-200 sticky top-10">
                <div className="max-w-7xl m-auto ">
                    <Header />
                </div>
            </div>
        </>
    )
}

export default TopNav