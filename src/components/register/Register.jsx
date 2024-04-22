import logo from "../../assets/images/react.svg";

const Register = () => {
  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت استفاده از ویژگی های پلتفرم آموزش آنلاین کلاسبن ثبت نام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
          <a href="/login" className="me-2">
            وارد شوید{" "}
          </a>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form>
              <div className="mb-3">
                <label className="form-label">موبایل</label>
                <input className={`form-control form-control-lg`} type="text" />
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input
                  className={`form-control form-control-lg`}
                  type="password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">تکرار رمز عبور</label>
                <input
                  className={`form-control form-control-lg`}
                  type="password"
                />
              </div>
              <div className="text-center mt-3">
                <button type="submit" className="btn btn-lg btn-primary">
                  ثبت نام کنید
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
