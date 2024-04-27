import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/react.svg";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitErrors, setSubmitErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: null, // Clear error when the field value changes
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!formData.mobile) {
      formErrors.mobile = "موبایل الزامی است";
    } else if (formData.mobile.length < 10 || formData.mobile.length > 11) {
      formErrors.mobile = "موبایل باید بین 10 تا 11 رقم باشد";
    }

    if (!formData.password) {
      formErrors.password = "رمز عبور الزامی است";
    } else if (formData.password.length < 6) {
      formErrors.password = "رمز عبور باید حداقل 6 کاراکتر داشته باشد";
    }

    if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword =
        "تکرار رمز عبور با رمز عبور وارد شده مطابقت ندارد";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      setSubmitting(true);
      const response = await axios.post(
        "https://react-mini-projects-api.classbon.com/Users",
        formData
      );
      if (response.status === 200) {
        console.log("Form submitted successfully!");
        navigate("/login"); // Redirect to login page on success
      }
    } catch (error) {
      console.error("Error submitting form:", error.response);
      const errorMessages = error?.response?.data || [{ description: "خطایی رخ داده است، لطفا دوباره تلاش کنید." }];
      setSubmitErrors(errorMessages.map(error => error.description));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="text-center mt-4">
        <img src={logo} style={{ height: "100px" }} alt="React Logo" />
        <h1 className="h2">پلتفرم آموزش آنلاین</h1>
        <p className="lead">
          جهت استفاده از ویژگی های پلتفرم آموزش آنلاین کلاسبن ثبت نام کنید
        </p>
        <p className="lead">
          قبلا ثبت نام کرده اید؟
          <Link to="/login" className="me-2">
            وارد شوید{" "}
          </Link>
        </p>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="m-sm-4">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">موبایل</label>
                <input
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`form-control form-control-lg ${
                    errors.mobile && "is-invalid"
                  }`}
                />
                {errors.mobile && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.mobile}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">رمز عبور</label>
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-control form-control-lg ${
                    errors.password && "is-invalid"
                  }`}
                  type="password"
                />
                {errors.password && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">تکرار رمز عبور</label>
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-control form-control-lg ${
                    errors.confirmPassword && "is-invalid"
                  }`}
                  type="password"
                />
                {errors.confirmPassword && (
                  <p className="text-danger small fw-bolder mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-lg btn-primary"
                  disabled={submitting}
                >
                  {submitting ? "در حال ارسال" : "ثبت نام کنید"}
                </button>
              </div>

              {submitErrors.length > 0 && (
                <div className="alert alert-danger mt-3" role="alert">
                  {submitErrors.map((error, index) => (
                    <p key={index}>{error}</p>
                  ))}
                </div>
              )}

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;