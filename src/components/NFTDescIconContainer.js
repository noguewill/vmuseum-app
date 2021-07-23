import xpoThemes from "./themeData";
const NFTDescIconContainer = ({ theme }) => {
  return (
    <div className="w-full h-full flex justify-between items-center xl:max-w-lg">
      <div className=" 2xl:w-44 lg:w-20 flex flex-col justify-between items-center">
        <svg
          className="w-9 h-9 mb-2"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.342a2 2 0 0 0-.602-1.43l-4.44-4.342A2 2 0 0 0 13.56 2H6a2 2 0 0 0-2 2z"
              stroke={xpoThemes[theme].themeNFTDescToolIconColor}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 2v4a2 2 0 0 0 2 2h4"
              stroke={xpoThemes[theme].themeNFTDescToolIconColor}
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </g>
        </svg>

        <h6 className="text-xs 2xl:text-lg">Pen & Paper</h6>
      </div>
      <div className=" 2xl:w-44  lg:w-20 flex flex-col justify-between items-center">
        <a className="mb-2" href="https://www.blender.org/about/">
          <svg
            className="w-9 h-9 "
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
          >
            <path
              d="M12.427 13.011c.037-.667.363-1.254.856-1.671a2.855 2.855 0 0 1 1.844-.66c.71 0 1.36.25 1.845.66c.492.417.819 1.005.856 1.671c.038.686-.237 1.323-.721 1.795a2.829 2.829 0 0 1-1.979.782a2.83 2.83 0 0 1-1.981-.782c-.483-.472-.759-1.109-.72-1.795z"
              fill={xpoThemes[theme].themeNFTDescToolIconColor}
            />
            <path
              d="M8.124 14.361c.005.26.089.767.213 1.164a6.156 6.156 0 0 0 1.328 2.299a6.833 6.833 0 0 0 2.323 1.667a7.465 7.465 0 0 0 3.05.635a7.495 7.495 0 0 0 3.051-.645a6.913 6.913 0 0 0 2.321-1.675a6.196 6.196 0 0 0 1.326-2.303a5.76 5.76 0 0 0 .25-1.285a5.942 5.942 0 0 0-.888-3.594a6.496 6.496 0 0 0-1.545-1.703l.001-.001l-6.249-4.799l-.016-.014c-.411-.314-1.101-.313-1.551.002c-.457.319-.508.846-.104 1.18l-.001.001l2.606 2.121l-7.943.009h-.012c-.656 0-1.287.432-1.412.976c-.128.555.318 1.015 1.001 1.017l-.001.003l4.027-.008l-7.188 5.516l-.027.021c-.677.519-.896 1.382-.47 1.929c.434.556 1.354.556 2.04.002l3.922-3.209c.001 0-.056.433-.052.694zm10.078 1.45c-.808.824-1.938 1.291-3.163 1.293c-1.226.002-2.356-.461-3.165-1.283a3.739 3.739 0 0 1-.864-1.352a3.503 3.503 0 0 1-.199-1.511c.044-.505.193-.987.434-1.422c.236-.429.562-.815.962-1.144a4.477 4.477 0 0 1 2.832-.988a4.478 4.478 0 0 1 2.832.98c.399.326.725.711.961 1.139c.24.436.39.916.434 1.421a3.52 3.52 0 0 1-.198 1.511a3.804 3.804 0 0 1-.866 1.356z"
              fill={xpoThemes[theme].themeNFTDescToolIconColor}
            />
          </svg>
        </a>
        <h6 className="text-xs 2xl:text-lg">Blender 3D</h6>
      </div>
      <div className=" 2xl:w-44 lg:w-20 flex flex-col justify-between items-center">
        <a
          className="mb-2"
          href="https://www.adobe.com/products/photoshop.html"
        >
          <svg
            className="w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M0 .401v31.198h32V.401zm1.333 1.333h29.333v28.531H1.333zm6.401 5.974c0-.089.188-.156.297-.156a76.42 76.42 0 0 1 3.438-.068c3.698 0 5.135 2.026 5.135 4.62c0 3.391-2.458 4.844-5.469 4.844c-.51 0-.682-.026-1.036-.026v5.125c0 .109-.042.156-.151.156H7.885c-.109 0-.151-.042-.151-.151zm2.365 7.084c.307.021.552.021 1.083.021c1.557 0 3.026-.552 3.026-2.661c0-1.693-1.052-2.552-2.833-2.552c-.526 0-1.031.021-1.276.042zm11.479-1.589c-1.057 0-1.411.531-1.411.969c0 .484.24.813 1.651 1.542c2.089 1.016 2.75 1.979 2.75 3.411c0 2.13-1.63 3.276-3.828 3.276c-1.167 0-2.161-.245-2.734-.573c-.083-.042-.104-.109-.104-.219v-1.958c0-.13.063-.177.151-.109a4.9 4.9 0 0 0 2.682.792c1.057 0 1.495-.438 1.495-1.036c0-.484-.307-.901-1.646-1.604c-1.896-.906-2.688-1.828-2.688-3.37c0-1.719 1.344-3.146 3.672-3.146c1.146 0 1.953.177 2.396.37c.109.068.13.177.13.266v1.828c0 .109-.068.177-.198.13c-.594-.349-1.469-.573-2.323-.573z"
              fill={xpoThemes[theme].themeNFTDescToolIconColor}
            />
          </svg>
        </a>
        <h6 className="text-xs 2xl:text-lg">Photoshop</h6>
      </div>
      <div className=" 2xl:w-44 lg:w-20 flex flex-col justify-between items-center">
        <a className="mb-2" href="https://lightroom.adobe.com/">
          <svg
            className="w-9 h-9"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 32 32"
          >
            <path
              d="M0 .401v31.197h32V.401zm1.333 1.334h29.333v28.531H1.333zm7.531 20.432c-.156 0-.197-.068-.197-.197V7.646c0-.115.041-.176.156-.176h2.109c.115 0 .136.047.136.161v12.343h5.5c.109 0 .14.048.12.157l-.333 1.891c-.021.109-.089.156-.199.156H8.864zm9.871-8.636c0-.161 0-.552-.068-1.301c0-.109.027-.136.115-.177c.812-.328 2.74-.921 4.896-.921c.109 0 .151.02.151.135v1.932c0 .115-.041.136-.156.136c-.833-.041-2.084.068-2.547.265v8.412c0 .109-.043.151-.152.151h-2.093c-.109 0-.151-.041-.151-.151v-8.48z"
              fill={xpoThemes[theme].themeNFTDescToolIconColor}
            />
          </svg>
        </a>
        <h6 className="text-xs 2xl:text-lg">Lightroom</h6>
      </div>
    </div>
  );
};

export default NFTDescIconContainer;
