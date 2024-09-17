import bg from "/bg.png";
import Input from "../../components/common/input";
import { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
const Register = () => {
  const {
    register,
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(GlobalContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    register(userName, email, password);
  };

  return (
    <div className="flex h-screen gap-[50px] items-center">
      <img
        src={bg}
        alt="backgroud-img"
        className="h-full w-[650px] object-cover"
      />
      <form
        action=""
        className="w-[455px] flex flex-col gap-[30px] lg:p-0"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <h2 className="font-bold text-[30px] text-[var(--dark)]">
            Create New Account
          </h2>
          <p className="text-[var(--gray)]">Please enter details</p>
        </div>

        <div className="flex flex-col gap-[16px] justify-start">
          <div>
            <label
              htmlFor="email-field"
              className="text-[12px] text-[var(--dark)]"
            >
              User Name
            </label>
            <br />
            <Input
              type={"text"}
              name={"user"}
              placeholder={"Robert fox"}
              value={userName}
              required={true}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="email-field"
              className="text-[12px] text-[var(--dark)]"
            >
              Email Address
            </label>
            <br />
            <Input
              type={"text"}
              name={"email"}
              placeholder={"Robertfox@example.com"}
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password-field"
              className="text-[12px] text-[var(--dark)]"
            >
              Password
            </label>
            <br />
            <Input
              placeholder={"Enter Password"}
              name={"password"}
              type={"password"}
              min={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>
        </div>
        <button className="bg-[var(--dark)] p-5 text-white rounded-[10px]">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Register;
