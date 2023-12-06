import viteLogo from "/vite.svg";
import "./landingpage.css";

function Landingpage() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/o8MBQeSj1IeFnRGbCygLPdNyIeWqKNIC7AgC0A~tplv-photomode-zoomcover:480:480.jpeg?x-expires=1701262800&x-signature=B%2BOY8O6iydId39g%2FeYxvXdCr0bg%3D"
            className="logo react"
            alt="React logo"
          />
        </a>
      </div>
    </>
  );
}

export default Landingpage;
