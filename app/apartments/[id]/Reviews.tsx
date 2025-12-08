const Reviews = () => {
  const reviews = [
    {
      avatarUrl: "",
      user: "Sam Larry",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      ratings: "⭐⭐⭐⭐",
      date: "12:02pm - 12/12/25",
    },
    {
      avatarUrl: "",
      user: "Janet Doe",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      ratings: "⭐⭐⭐⭐",
      date: "12:02pm - 12/12/25",
    },
    {
      avatarUrl: "",
      user: "Randy Orton",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      ratings: "⭐⭐⭐⭐",
      date: "12:02pm - 12/12/25",
    },
    {
      avatarUrl: "",
      user: "Mike Wheeler",
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      ratings: "⭐⭐⭐⭐",
      date: "12:02pm - 12/12/25",
    },
  ];
  return (
    <div>
      <h2 className="hFour font-semibold">Reviews</h2>
      <div className="space-y-6 mt-6">
        {reviews.map((info, id) => (
          <div
            key={id}
            className="border p-3 rounded-2xl grid grid-cols-[60px_1fr] gap-4"
          >
            {/* image */}
            <div></div>

            <div className="space-y-3 p-2">
              {/* user */}
              <h2 className="font-semibold text-[#0F172A]">{info.user}</h2>
              {/* message */}
              <p className="text-[#666666] text-sm mt-2">{info.message}</p>
              {/* border */}
              <div className="bg-[#D4DEED] h-px rounded-full w-[90%] text-center"></div>
              <div className="grid space-y-3">
                {/* ratings*/}
                <span>{info.ratings}</span>
                {/* date */}
                <span className="text-[#666666] text sm">{info.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
