const WeeklyData = ({ cStyle, weeklySlides, current }) => {
  return (
    <div className="w-3/6   h-screen imgContainer overflow-hidden">
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
<div className="imgContainer overflow-hidden">
  <div className="imageEl"></div>
</div>;
