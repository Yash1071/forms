import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const AuthSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignUpForm = () => (
  <Formik initialValues={{ email: "", password: "" }} validationSchema={AuthSchema} onSubmit={(values) => console.log(values)}>
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View style={styles.container}>
        
        <TextInput 
            style={styles.input} 
            placeholder="Email" 
            onChangeText={handleChange("email")} 
            onBlur={handleBlur("email")} 
            value={values.email} />
        {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

        <TextInput 
            style={styles.input} 
            placeholder="Password" 
            onChangeText={handleChange("password")} 
            onBlur={handleBlur("password")} 
            value={values.password} 
            secureTextEntry />
        {errors.password && touched.password && <Text style={styles.error}>{errors.password}</Text>}

        <Button title="Login" onPress={handleSubmit} />
      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: "red" },
});

export default SignUpForm;