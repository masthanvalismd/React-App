import { useFormik } from "formik";
import * as yup from "yup";
// import { useFormik } from "formik";
// const validateForm = (values) => {
//   const errors = {};
//   console.log("validateForm", values);

//   if (values.email.length < 5) {
//     errors.email = "Please provide a longer email address";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
//     errors.email = "please enter a valid email address";
//   }

//   if (values.password.length < 8) {
//     errors.password = "Please provide a longer password";
//   } else if (values.password.length > 12) {
//     errors.password = "Please provide a shorter password";
//   }
//   console.log(errors);
//   return errors;
// };

// export function BasicForm() {
//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validate: validateForm,
//     onSubmit: (values) => {
//       console.log("onSubmit", values);
//     },
//   });
//   console.log("formik.touched", formik.touched);
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <input
//         id="email"
//         name="email"
//         value={formik.values.email}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         type="email"
//         placeholder="Enter your email address"
//       />
//       {formik.touched.email && formik.errors.email ? formik.errors.email : ""}
//       <input
//         id="password"
//         name="password"
//         value={formik.values.password}
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         type="password"
//         placeholder="Enter your password"
//       />
//       {formik.touched.password && formik.errors.password
//         ? formik.errors.password
//         : ""}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

const formvalidationSchema = yup.object({
  email: yup
    .string()
    .min(5, "provide a longer email 😁")
    .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Pattern Not Matched 😏")
    .required("please fill the email 😉"),
  password: yup
    .string()
    .min(8, "provide a longer password 😁")
    .min(12, "provide a smaller password 😁")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    )
    .required("please fill the email"),
});
export function BasicForm() {
  const { handleChange, handleSubmit, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: { email: "", password: "" },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
      },
    });
  console.log("formik.touched", touched);
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        placeholder="Enter your email address"
      />
      {touched.email && errors.email ? errors.email : ""}
      <input
        id="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        type="password"
        placeholder="Enter your password"
      />
      {touched.password && errors.password ? errors.password : ""}
      <button type="submit">Submit</button>
    </form>
  );
}
