export interface Forgotemail {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    resetPasswordToken: String;
    resetPasswordExpires: Date;
}