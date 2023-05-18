const Contact = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center">Contact Us</h1>
      <div className="hero py-10 ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Contact now</h1>
            <p className="py-6">
              We are here to assist you with any inquiries or concerns you may
              have. Feel free to send email. let us know if you want update
              product info in your email.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">massage</span>
                </label>
                <textarea
                  type="text"
                  placeholder="massage"
                  className="input input-bordered h-40 resize-none"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
