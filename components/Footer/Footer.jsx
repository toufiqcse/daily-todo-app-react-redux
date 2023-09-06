const Footer = () => {
    const date = new Date();
    const years = date.getFullYear();
    return (
        <div className="mt-6 py-3 bg-gray-200 text-gray-600 text-center">
            <p> <span>@</span> Copyright All Right Reserved {years}</p>
        </div>
    )
}

export default Footer