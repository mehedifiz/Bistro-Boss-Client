
const Sectiontitle = ({heading , subheading}) => {
    return (
        <div className="md:w-4/12 my-6 mx-auto text-center">
            <p className="text-orange-500 my-3 font-Inter italic font-thin ">---{subheading}---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4 text-black ">{heading}</h3>
            
        </div>
    );
};

export default Sectiontitle;