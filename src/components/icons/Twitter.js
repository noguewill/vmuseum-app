const Twitter = ({ color }) => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 3.55855C28.8968 4.1599 27.7116 4.56621 26.4657 4.74987C27.7513 3.80363 28.713 2.31435 29.1716 0.559934C27.9638 1.44244 26.6419 2.06362 25.2634 2.39648C24.3364 1.17894 23.1085 0.371933 21.7704 0.100754C20.4324 -0.170425 19.059 0.109396 17.8634 0.896774C16.6679 1.68415 15.7171 2.93503 15.1588 4.45521C14.6004 5.97539 14.4656 7.67981 14.7754 9.30386C12.328 9.1527 9.93389 8.37022 7.74829 7.00721C5.5627 5.64419 3.63451 3.73109 2.08888 1.39207C1.56038 2.5135 1.2565 3.81371 1.2565 5.19844C1.25591 6.44501 1.50546 7.67249 1.98302 8.77196C2.46057 9.87144 3.15136 10.8089 3.9941 11.5012C3.01675 11.463 2.06096 11.1381 1.20629 10.5537V10.6512C1.20619 12.3996 1.69783 14.0941 2.59779 15.4474C3.49775 16.8006 4.7506 17.7291 6.14375 18.0754C5.2371 18.3773 4.28654 18.4217 3.36387 18.2054C3.75693 19.7098 4.52259 21.0253 5.55364 21.9678C6.5847 22.9103 7.82954 23.4326 9.11389 23.4615C6.93363 25.5669 4.24102 26.709 1.46922 26.7039C0.978219 26.7041 0.487637 26.6688 0 26.5983C2.81354 28.8236 6.08871 30.0046 9.43363 30C20.7566 30 26.9466 18.4639 26.9466 8.45872C26.9466 8.13367 26.94 7.80537 26.9281 7.48031C28.1322 6.40922 29.1715 5.08288 29.9974 3.56342L30 3.55855Z"
          fill={`${color}`}
        />
      </svg>
    </>
  );
};

export default Twitter;
