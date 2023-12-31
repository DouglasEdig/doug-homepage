export default function Bio() {
  return (
    <div className="mt-8">
      <h3 className=" text-2xl font-semibold underline pl-4">Bio</h3>
      <div className=" h-1/2  px-4 py-4 text-lg" style={{ width: 650 }}>
        <div className="flex gap-2 ">
          <p className=" font-semibold">1995: </p>
          <span className=" font-light"> Born in Maringá, Brazil</span>
        </div>
        <div className="flex gap-2 mt-4">
          <p className=" font-semibold">2018: </p>
          <span className=" font-light">
            {" "}
            I started studying to focus on technology by taking courses and
            bootcamps
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <p className=" font-semibold">2020: </p>
          <span className=" font-light">
            {" "}
            My first experience at freelance job was a web developer(HTML, CSS
            and JavaScript )
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <p className=" font-semibold">2021: </p>
          <span className=" font-light">
            {" "}
            My first job at a technology company Systextil as a web developer
            (React and Java)
          </span>
        </div>
        <div className="flex gap-2 mt-4">
          <p className=" font-semibold">2023: </p>
          <span className=" font-light"> Work at Bradesco Bank</span>
        </div>
        ...
      </div>
    </div>
  );
}
