import { useFormik } from "formik";
const validateForm = (values) => {
  const errors = {};
  console.log("validateForm", values);

  if (values.email.length < 5) {
    errors.email = "Please provide a longer email address";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "please enter a valid email address";
  }

  if (values.password.length < 8) {
    errors.password = "Please provide a longer password";
  } else if (values.password.length > 12) {
    errors.password = "Please provide a shorter password";
  }
  console.log(errors);
  return errors;
};

export function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validate: validateForm,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });
  console.log("formik.touched", formik.touched);
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="email"
        placeholder="Enter your email address"
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      <input
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="password"
        placeholder="Enter your password"
      />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : ""}
      <button type="submit">Submit</button>
    </form>
  );
}
