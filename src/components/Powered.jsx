
function Powered( {size = "h-8 w-8", spacing = "mx-2", color = "white"} ) {

    const className=`${size} ${spacing}`;
    return (
        <div className="flex justify-center items-center mt-2">

            <img
                className={className}
                src="/img/icon-vite.svg"
                alt="icon-vite"
            />
            <img
                className={className}
                src="/img/icon-react.svg"
                alt="icon-react"
            />
            <img
                className={className}
                src="/img/icon-tailwind.svg"
                alt="icon-tailwind"
            />
        </div>
    );
}

export default Powered;
