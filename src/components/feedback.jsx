const FeedbackCard = ({ content, name, title, img }) => (
    <div className=" flex justify-between w-3/5 flex-col  px-10 py-12 rounded-[20px]  max-w-[370px]  mx-auto my-0 feedback-card">
      
      <p className=" text-[18px] leading-[32.4px] text-black text-center max-sm:text-sm w-full">
        {content}
      </p>
  
      <div className="flex flex-col w-full h-48 justify-center text-center items-center mt-8 max-sm:mt-2">
        <img src={img} alt={name} className=" rounded-full"  />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black">
            {name}
          </h4>
          <p className="font-poppins pb-8 font-normal text-[16px] leading-[24px] text-black">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
  
  export default FeedbackCard;