export default function Divider() {
  return (
    <>
      <div id="divider"></div>
      <div className="circle"></div>
      <div className="arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          {" "}
          <path
            fill-rule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />{" "}
        </svg>
      </div>
    </>
  );
}