import { View, Text, Button } from "react-native";
import { Link, useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to the Form</Text>
      <Button title="Employee Form" onPress={() => router.push("/EmployeeForm")} /><br></br>
      <Button title="Sign In" onPress={() => router.push("/SignInForm")} /><br></br>
      <Button title="Sign Up" onPress={() => router.push("/SignUpForm")} /><br></br>
    </View>
  );
}
