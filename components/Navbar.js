export default function Navbar() {
  return (
    <div className="sticky top-0 z-10  h-20 flex items-center justify-between  backdrop-filter backdrop-blur-lg bg-opacity-20  text-white">
      <div className="md:pl-10 sm:pl-5 pl-3 text-xl">
        <b>Akshay.dev</b>
      </div>
      <div className="flex flex-row md:gap-10 md:pr-10 sm:gap-5 sm:pr-5 gap-3 pr-3">
        <div>Home</div>
        <div>Projects</div>
        <div>Contact Me</div>
      </div>
    </div>
  );
}
