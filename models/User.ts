import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  img: string;
  role: string;
  state: boolean;
  google: boolean;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required.'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required.'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: [true, 'Role is required.'],
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  state: {
    //Is Active
    type: Boolean,
    default: true,
  },
  google: {
    //If the user had been created with google
    type: Boolean,
    default: false,
  },
});

export default model<IUser>('User', UserSchema);
