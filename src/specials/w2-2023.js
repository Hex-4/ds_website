import Countdown from "react-countdown";
export default function Special() {
  return (
    <div
      id="page"
      className="fixed top-0 left-16 float-right bg-primary h-screen z-0 overflow-scroll`"
    >
      <div className="from-blue-500 to-green-500 h-screen w-screen p-36 transiton-all bg-gradient-to-bl">
        <h1 className="header text-center">
          Welcome to <b className="text-secondary">2023</b>.
        </h1>
        <Countdown date={"2022-12-31T24:00:00.000-07:00"} renderer={renderer} />
        <h1 className="header text-center text-5xl mt-20 mb-96">
          Here's to life, Diamond Studios, and Dimpux.
        </h1>
      </div>
    </div>
  );
}
const renderer = ({ hours, minutes, seconds, completed }) => {
  // Render a countdown
  return (
    <h1 className=" header countdown text-center text-secondary mt-40">
      {hours}:{minutes}:{seconds}
    </h1>
  );
};
