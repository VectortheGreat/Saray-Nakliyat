import PropTypes from "prop-types";
const UserReviewCard = ({ card }) => {
  UserReviewCard.propTypes = {
    card: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
    }).isRequired,
  };
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md my-3 w-5/6 mx-auto">
      <div className="flex items-center">
        <img
          src={
            card.gender === "male"
              ? "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
              : "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png"
          }
          alt="Kullanıcı Resmi"
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{card.name}</h3>
          <p className="text-orange-400">{card.score} Yıldız</p>
        </div>
      </div>
      <p className="mt-4">{card.description}</p>
      <div className="mt-4 text-sm text-rose-700">
        İnceleme Tarihi: {card.date}
      </div>
    </div>
  );
};

export default UserReviewCard;
