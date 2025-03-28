import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const EmployeeInfoSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  department: Yup.string().required("Department is required"),
  position: Yup.string().required("Position is required"),
});

const EmployeeForm = () => (
  <Formik
    initialValues={{ name: "", email: "", phone: "", department: "", position: "" }}
    validationSchema={EmployeeInfoSchema}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
      <View style={styles.container}>

        <TextInput 
            style={styles.input} 
            placeholder="Name" 
            onChangeText={handleChange("name")} 
            onBlur={handleBlur("name")} 
            value={values.name} />
        {errors.name && touched.name && <Text style={styles.error}>{errors.name}</Text>}

        <TextInput 
            style={styles.input} 
            placeholder="Email" 
            onChangeText={handleChange("email")} 
            onBlur={handleBlur("email")} 
            value={values.email} 
            keyboardType="email-address" />
        {errors.email && touched.email && <Text style={styles.error}>{errors.email}</Text>}

        <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={handleChange("phone")}
            onBlur={handleBlur("phone")}
            value={values.phone}
            keyboardType="phone-pad"
          />
          {errors.phone && touched.phone && <Text style={styles.error}>{errors.phone}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Department"
            onChangeText={handleChange("department")}
            onBlur={handleBlur("department")}
            value={values.department}
          />
          {errors.department && touched.department && <Text style={styles.error}>{errors.department}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Position"
            onChangeText={handleChange("position")}
            onBlur={handleBlur("position")}
            value={values.position}
          />
          {errors.position && touched.position && <Text style={styles.error}>{errors.position}</Text>}

          <Button title="Submit" onPress={handleSubmit} />

      </View>
    )}
  </Formik>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: "red" },
});

export default EmployeeForm;
