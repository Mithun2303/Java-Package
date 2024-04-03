
export const MovieCard = ({ image, name }) => {
    const img = image;
    const title = name;
    return (
            <div className="max-w-[10vw] rounded-2xl min-h-[30vh] bg-[rgba(0,0,0,0.65)] flex flex-col justify-center items-center">
                <img src={img} alt="" className="w-[10vw] rounded-t-2xl" />
                <span className="text-xl text-center py-3 px-2 text-white">
                    {title}
                </span>
            </div>
    )
}
