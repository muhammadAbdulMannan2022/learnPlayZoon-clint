const Header = () => {
  //   <a href="https://imgbb.com/"><img src="" alt="senjuti-kundu-Jfol-Ij-Rnve-Y-unsplash-removebg-preview" border="0"></a>
  // <a href="https://ibb.co/5htvCqC"><img src="" alt="daniel-k-cheung-c-PF2nl-Wc-MY4-unsplash" border="0"></a>
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://i.ibb.co/B2djv8v/daniel-k-cheung-c-PF2nl-Wc-MY4-unsplash.jpg')",
        }}
        className="hero"
      >
        <div className="hero min-h-screen px-5 ">
          <div className="hero-content flex-col lg:flex-row text-green-800">
            <img
              style={{
                background: "rgba(255,255,255,0.25)",
                backdropFilter: "blur(5px)",
              }}
              src="https://i.ibb.co/CV5cWJC/senjuti-kundu-Jfol-Ij-Rnve-Y-unsplash-removebg-preview.png"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">
                PICK THE BEST TOY <br /> FOR YOUR KID
              </h1>
              <p className="py-6 font-bold">
                Make studying fun. Play and learn with our educational toys and
                games.
              </p>
              <button
                style={{ borderRadius: "51% 29% 11% 72% / 52% 42% 36% 46% " }}
                className="px-6 py-4 hover:px-7 font-bold hover:bg-green-700 transition-all bg-green-800 text-white"
              >
                PURCASE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
