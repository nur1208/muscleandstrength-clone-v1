import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import { findEmail, registerUser } from "../actions/userActions";
import logo from "../images/icons.svg";
import { Loading } from "../components/Loading";
import { useGetPathName } from "../hooks/customGetPathName";
import { useAddBodyClass } from "../hooks/customAddBodyClass";
// import style from "../styles/creactAccount.css";

export const CreateAccountScreen = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState("");
  const [experience, setExperience] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [reCode, setReCode] = useState("");
  const [isNewsLitter, setIsNewsLitter] = useState(false);

  const [firstNameClass, setFirstNameClass] = useState(
    "fl-wrap fl-wrap-input fl-is-required"
  );
  const [lastNameClass, setLastNameClass] = useState(
    "fl-wrap fl-wrap-input fl-is-required"
  );
  const [emailClass, setEmailClass] = useState(
    "fl-wrap fl-wrap-input fl-is-required"
  );
  const [genderClass, setGenderClass] = useState("fl-wrap fl-wrap-select");
  const [goalClass, setGoalClass] = useState("fl-wrap fl-wrap-select");
  const [trainingExClass, setTrainingExClass] = useState(
    "fl-wrap fl-wrap-select"
  );
  const [passwordClass, setPasswordClass] = useState(
    "fl-wrap fl-wrap-input fl-is-required"
  );
  const [CPasswordClass, setCPasswordClass] = useState(
    "fl-wrap fl-wrap-input fl-is-required"
  );
  const [codeClass, setCodeClass] = useState("fl-wrap fl-wrap-input");

  const [isFNValid, setIsFNValid] = useState(true); //isFNValid = isFirstNameEmpty
  const [isLNValid, setIsLNEmpty] = useState(true); //isLNValid = isLastNameEmpty
  const [isEmailValid, setIsEmailEmpty] = useState({
    value: true,
    msg: "This is a required field.",
  });
  const [isPasswordValid, setIsPasswordEmpty] = useState({
    value: true,
    msg: "This is a required field.",
  });
  const [isCPasswordValid, setIsCPasswordEmpty] = useState({
    value: true,
    msg: "This is a required field.",
  }); // isCPasswordValid = isConfirmPasswordEmpty

  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success } = userRegister;

  // const emailFind = useSelector((state) => state.emailFind);
  // const { isEmailExist } = emailFind;

  const dispatch = useDispatch();

  const fistNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const CPasswordRef = useRef(null);

  // useEffect(() => {
  //   if (error)
  //     if (error.includes("E11000 duplicate key error collection"))
  //       setIsEmailEmpty({
  //         ...isEmailValid,
  //         value: false,
  //         msg: `Please enter a different email address. email is exist`,
  //       });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [error, isEmailValid]);

  // const [inputs, setInputs] = useState([
  //   { ref: fistNameRef, isValid: isFNValid, value: firstName },
  //   { ref: lastNameRef, isValid: isLNValid },
  // ]);

  require("../styles/creactAccount.css");

  const benefits = [
    { text: "Reward points to use on exclusive products or order discounts" },
    { text: "2 free samples with every order placed" },
    { text: "Early access when we post sales, discounts and deals" },
    { text: "Amazing 7 day support from our team of fitness enthusiasts" },
    {
      text:
        "Free workouts, fitness tools, videos, diet plans, expert guides and motivational content",
    },
  ];

  useGetPathName(props.location.pathname);

  useAddBodyClass("col1-wide");
  useEffect(() => {
    fistNameRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setInputs(
  //     { ref: fistNameRef, isValid: isFNValid },
  //     { ref: lastNameRef, isValid: isLNValid }
  //   );
  // }, [isFNValid, isLNValid]);

  useEffect(() => {
    setIsEmailChecked(false);
  }, [emailAddress]);

  const handleChange = (e) => {
    // console.log(e.target);
  };

  // eslint-disable-next-line no-useless-escape
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const checkValidation = () => {
    setIsFNValid(firstName ? true : false);
    setIsLNEmpty(lastName ? true : false);
    setIsEmailEmpty({
      ...isEmailValid,
      value: emailAddress ? true : false,
      msg: "This is a required field.",
    });
    if (emailAddress && !re.test(emailAddress)) {
      setIsEmailEmpty({
        ...isEmailValid,
        value: false,
        msg:
          "Please enter a valid email address. For example johndoe@domain.com.",
      });
    }
    // if (isEmailExist)
    //   // if (error.includes("E11000 duplicate key error collection"))
    //   setIsEmailEmpty({
    //     ...isEmailValid,
    //     value: false,
    //     msg: `Please enter a different email address. email is exist`,
    //   });
    setIsPasswordEmpty({
      ...isEmailValid,
      value: password ? true : false,
      msg: "This is a required field.",
    });
    if (password && password.length < 7) {
      setIsPasswordEmpty({
        ...isEmailValid,
        value: false,
        msg: "Your password must be at least 7 characters.",
      });
    }
    setIsCPasswordEmpty({
      ...isEmailValid,
      value: passwordConfirm ? true : false,
      msg: "This is a required field.",
    });
    if (passwordConfirm && !(password === passwordConfirm)) {
      setIsCPasswordEmpty({
        ...isEmailValid,
        value: false,
        msg: "Please make sure your passwords match.",
      });
    }
  };

  const handleSubmit = (e) => {
    checkValidation();
    e.preventDefault();

    const isFNValid = firstName ? true : false;
    const isLNValid = lastName ? true : false;
    const isEmailValid = emailAddress && re.test(emailAddress);
    const isPasswordValid = password && password.length >= 7;
    const isCPasswordValid = passwordConfirm && password === passwordConfirm;

    if (emailAddress && !isEmailChecked) {
      dispatch(findEmail(emailAddress));
      setIsEmailChecked(true);
    }

    if (
      isFNValid &&
      isLNValid &&
      isEmailValid &&
      isPasswordValid &&
      isCPasswordValid
    ) {
      dispatch(
        registerUser(
          firstName,
          lastName,
          emailAddress,
          gender,
          goal,
          experience,
          password,
          reCode,
          isNewsLitter
        )
      );
    }
  };

  const handleInputFocus = (e) => {
    if (e.target.id === "firstname") {
      setFirstNameClass(firstNameClass + " fl-has-focus");
    } else if (e.target.id === "lastname") {
      setLastNameClass(lastNameClass + " fl-has-focus");
    } else if (e.target.id === "email_address") {
      setEmailClass(emailClass + " fl-has-focus");
    } else if (e.target.id === "register-gender") {
      setGenderClass(genderClass + " fl-has-focus");
    } else if (e.target.id === "register-goal") {
      setGoalClass(goalClass + " fl-has-focus");
    } else if (e.target.id === "register-experience") {
      setTrainingExClass(trainingExClass + " fl-has-focus");
    } else if (e.target.id === "password") {
      setPasswordClass(passwordClass + " fl-has-focus");
    } else if (e.target.id === "confirmation") {
      setCPasswordClass(CPasswordClass + " fl-has-focus");
    } else if (e.target.id === "rewards_referral") {
      setCodeClass(codeClass + " fl-has-focus");
    }
    // console.log(e.target.id);
    // e.target.parentElement.classList.add("fl-has-focus");
  };

  const handleInputBlur = (e) => {
    if (e.target.id === "firstname") {
      setFirstNameClass("fl-wrap fl-wrap-input fl-is-required");
    } else if (e.target.id === "lastname") {
      setLastNameClass("fl-wrap fl-wrap-input fl-is-required");
    } else if (e.target.id === "email_address") {
      setEmailClass("fl-wrap fl-wrap-input fl-is-required");
    } else if (e.target.id === "register-gender") {
      setGenderClass("fl-wrap fl-wrap-select");
    } else if (e.target.id === "register-goal") {
      setGoalClass("fl-wrap fl-wrap-select");
    } else if (e.target.id === "register-experience") {
      setTrainingExClass("fl-wrap fl-wrap-select");
    } else if (e.target.id === "password") {
      setPasswordClass("fl-wrap fl-wrap-input fl-is-required");
    } else if (e.target.id === "confirmation") {
      setCPasswordClass("fl-wrap fl-wrap-input fl-is-required");
    } else if (e.target.id === "rewards_referral") {
      setCodeClass("fl-wrap fl-wrap-input");
    }
  };

  const handleKeyPress = (e, index) => {
    // console.log(e.target);
    // e.preventDefault();
    // if (e.key === "Enter") handleSubmit(e);
    if (e.key === "Enter") {
      const inputs = [
        { ref: fistNameRef, isValid: firstName },
        { ref: lastNameRef, isValid: lastName },
        {
          ref: emailRef,
          isValid: emailAddress && re.test(emailAddress),
        },
        {
          ref: passwordRef,
          isValid: password && password.length >= 7,
        },
        {
          ref: CPasswordRef,
          isValid: passwordConfirm && password === passwordConfirm,
        },
      ];

      let nextIndex =
        index === inputs.length - 1 ? (index + 1) % inputs.length : index + 1;

      if (inputs[index].isValid) {
        let count = 0;
        while (true) {
          if (!inputs[nextIndex].isValid) {
            inputs[nextIndex].ref.current.focus();
            return;
          }
          if (count === inputs.length - 1) return;
          nextIndex++;
          count++;
          if (nextIndex === inputs.length)
            nextIndex = nextIndex % inputs.length;
        }
      }
    }
  };

  // const clearEmailField = () => {
  //   setIsEmailEmpty({
  //     ...isEmailValid,
  //     value: true,
  //     msg: `This is a required field.`,
  //   });
  // };

  if (success) props.history.push("/");

  return (
    <main id="main-wrapper">
      <Helmet>
        <title>Create Account</title>
      </Helmet>
      <article className="before-content"></article>
      <article className="content">
        <section className="create-account">
          <div className="grid-x">
            <div className="cell bp740-8 signup-form">
              <h1 className="page-title text-center">Create an Account</h1>
              <form
                action="https://www.muscleandstrength.com/store/customer/account/createpost/"
                method="post"
                id="form-validate"
                className="fl-form fl-style-1"
              >
                <input type="hidden" name="success_url" value="" />
                <input type="hidden" name="error_url" value="" />
                <input type="hidden" name="form_key" value="vbCso1zLNjETtBgR" />
                <input
                  type="hidden"
                  name="source"
                  value="Create_Account_Store"
                />
                <div>
                  <div className="register-name customer-name">
                    <div className="input-box name-firstname col-full">
                      <div
                        className={`${firstNameClass} ${
                          firstName ? "fl-is-active" : ""
                        }`}
                        // onFocus={handleInputFocus}
                        // onBlur={handleInputBlur}
                      >
                        <label
                          htmlFor="firstname"
                          className="required fl-label"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="First Name"
                          autoComplete="given-name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          title="First Name"
                          data-placeholder="First Name"
                          className="input-text required-entry fl-input"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          onKeyPress={(e) => handleKeyPress(e, 0)}
                          ref={fistNameRef}
                        ></input>
                        {!isFNValid && (
                          <div
                            className="validation-advice"
                            id="advice-required-entry-firstname"
                            // style=""
                          >
                            This is a required field.
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="input-box name-lastname col-full">
                      <div
                        className={`${lastNameClass} ${
                          lastName ? "fl-is-active" : ""
                        } `}
                      >
                        <label htmlFor="lastname" className="required fl-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Last Name"
                          autoComplete="family-name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          title="Last Name"
                          data-placeholder="Last Name"
                          className="input-text required-entry fl-input"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          ref={lastNameRef}
                          onKeyPress={(e) => handleKeyPress(e, 1)}
                        />
                        {!isLNValid && (
                          <div
                            className="validation-advice"
                            id="advice-required-entry-firstname"
                            // style=""
                          >
                            This is a required field.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="input-box">
                      <div
                        className={`${emailClass} ${
                          emailAddress ? "fl-is-active" : ""
                        }`}
                      >
                        <label
                          htmlFor="email_address"
                          className="required fl-label"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email_address"
                          // autoComplete="email"
                          value={emailAddress}
                          onChange={(e) => {
                            setEmailAddress(e.target.value);
                            // if (!isEmailValid.value) clearEmailField();
                          }}
                          placeholder="Email Address"
                          required
                          data-placeholder="Email Address"
                          title="Email Address"
                          className="input-text validate-email required-entry fl-input"
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          ref={emailRef}
                          onKeyPress={(e) => handleKeyPress(e, 2)}
                        />
                        {!isEmailValid.value && (
                          <div
                            className="validation-advice"
                            id="advice-required-entry-firstname"
                            // style=""
                          >
                            {isEmailValid.msg}
                          </div>
                        )}
                        {error &&
                          error.includes(
                            "E11000 duplicate key error collection"
                          ) && (
                            <div
                              className="validation-advice"
                              id="advice-required-entry-firstname"
                              // style=""
                            >
                              Please enter a different email address. email is
                              exist
                              {emailRef.current.focus()}
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="input-box">
                      <div
                        className={`${genderClass} ${
                          gender ? "fl-is-active" : ""
                        }`}
                      >
                        <label htmlFor="register-gender" className="fl-label">
                          Gender
                        </label>
                        <select
                          id="register-gender"
                          placeholder="Gender"
                          data-placeholder="Gender"
                          autoComplete="sex"
                          name="gender"
                          title="Gender"
                          className="fl-select"
                          onChange={(e) => setGender(e.target.value)}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          defaultValue={"Gender"}
                        >
                          <option value="Gender" disabled>
                            Gender
                          </option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${goalClass} ${goal ? "fl-is-active" : ""}`}
                    >
                      <label htmlFor="register-goal" className="fl-label">
                        Your Training Goal
                      </label>
                      <select
                        id="register-goal"
                        placeholder="Goal"
                        name="fitness_goal"
                        title="Goal"
                        className="fl-select"
                        data-placeholder="Goal"
                        onChange={(e) => setGoal(e.target.value)}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        defaultValue="Goal"
                      >
                        <option value="Goal" disabled>
                          Goal
                        </option>
                        <option value="Build Muscle">Build Muscle</option>
                        <option value="Burn Fat">Burn Fat</option>
                        <option value="Increase Strength">
                          Increase Strength
                        </option>
                        <option value="Improve Sport Performance">
                          Improve Sport Performance
                        </option>
                        <option value="Healthy Lifestyle">
                          Healthy Lifestyle
                        </option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div
                      className={`${trainingExClass} ${
                        experience ? "fl-is-active" : ""
                      }`}
                    >
                      <label htmlFor="register-experience" className="fl-label">
                        Training Experience
                      </label>
                      <select
                        id="register-experience"
                        name="training_experience"
                        title="Training Experience"
                        className="fl-select"
                        onChange={(e) => setExperience(e.target.value)}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        defaultValue="Training Experience"
                      >
                        <option value="Training Experience" disabled>
                          Training Experience
                        </option>
                        <option value="Beginner">Beginner (&lt; 1 Year)</option>
                        <option value="Intermediate">
                          Intermediate (1-3 Years)
                        </option>
                        <option value="Advanced">Advanced (3+ Years)</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <div className="input-box col-full">
                      <div
                        className={`${passwordClass} ${
                          password ? "fl-is-active" : ""
                        }`}
                      >
                        <label htmlFor="password" className="fl-label">
                          Password
                        </label>
                        <input
                          type="password"
                          autoComplete="new-password"
                          name="password"
                          id="password"
                          title="Password"
                          className="input-text required-entry validate-password fl-input"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          ref={passwordRef}
                          onKeyPress={(e) => handleKeyPress(e, 3)}
                        />
                        {!isPasswordValid.value && (
                          <div
                            className="validation-advice"
                            id="advice-required-entry-firstname"
                            // style=""
                          >
                            {isPasswordValid.msg}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="input-box col-full">
                      <div
                        className={`${CPasswordClass} ${
                          passwordConfirm ? "fl-is-active" : ""
                        }`}
                      >
                        <label htmlFor="confirmation" className="fl-label">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          autoComplete="new-password"
                          name="confirmation"
                          title="Confirm Password"
                          id="confirmation"
                          className="input-text required-entry validate-cpassword fl-input"
                          placeholder="Confirm Password"
                          onChange={(e) => setPasswordConfirm(e.target.value)}
                          onFocus={handleInputFocus}
                          onBlur={handleInputBlur}
                          ref={CPasswordRef}
                          onKeyPress={(e) => handleKeyPress(e, 4)}
                        />
                        {!isCPasswordValid.value && (
                          <div
                            className="validation-advice"
                            id="advice-required-entry-firstname"
                            // style=""
                          >
                            {isCPasswordValid.msg}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="rewards_referral_information">
                    <div className="">
                      <div className="field">
                        <div className="input-box">
                          <div
                            className={`${codeClass} ${
                              reCode ? "fl-is-active" : ""
                            }`}
                          >
                            <label
                              htmlFor="rewards_referral"
                              className="fl-label"
                            >
                              Referral Code (optional)
                            </label>
                            <input
                              type="text"
                              name="rewards_referral"
                              id="rewards_referral"
                              className="input-text fl-input"
                              value={reCode}
                              placeholder="Referral Code (optional)"
                              onChange={(e) => setReCode(e.target.value)}
                              onFocus={handleInputFocus}
                              onBlur={handleInputBlur}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="reContainer">
                    <ReCAPTCHA
                      sitekey="6LfYBQ4aAAAAADqnTPLhYURJUvZ3Wts1M3cYohwx"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="newsletter">
                    <div className="switch-wrapper">
                      <div className="switch">
                        <input
                          className="switch-input"
                          id="is_subscribed"
                          type="checkbox"
                          name="is_subscribed"
                          value="1"
                          // onChange={handleChange}
                        />
                        <label
                          className="switch-paddle"
                          htmlFor="is_subscribed"
                          onClick={() => setIsNewsLitter(!isNewsLitter)}
                        >
                          <span className="switch-active" aria-hidden="true">
                            Yes
                          </span>
                          <span className="switch-inactive" aria-hidden="true">
                            No
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      Do you want us to send you free sample offers, coupons,
                      workouts etc?{" "}
                    </div>
                  </div>
                  <button
                    id="register-button-submit"
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-blue btn-expanded"
                  >
                    Create Account
                    <Loading />
                    {loading && <Loading />}
                  </button>
                </div>
              </form>
            </div>
            <div className="cell bp740-4 member-benefits text-center">
              <h3>Join Over 500k M&amp;S Members Who Get:</h3>
              {benefits.map((benefits, index) => {
                return (
                  <div className="benefit" key={index}>
                    <div className="icon">
                      <svg>
                        <use href={logo}></use>
                      </svg>
                    </div>
                    <div className="text">{benefits.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};
