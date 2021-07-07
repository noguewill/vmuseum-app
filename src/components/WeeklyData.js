const WeeklyData = ({ cStyle, weeklySlides, current }) => {
  return (
    <div className="w-full h-screen">
      <img
        weeklySlides={weeklySlides}
        src={weeklySlides[current].weeklyImg}
        alt={weeklySlides[current].weeklyImg.alt}
        className={cStyle}
      />
    </div>
  );
};

export default WeeklyData;
