import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";
import SignInForm from "../../components/auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="Gestión Formación | SENA"
        description="Gestión Formación | SENA"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
