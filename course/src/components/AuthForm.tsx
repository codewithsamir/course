"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import Image from 'next/image'
import { Brain } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { auth, googleprovider } from '@/firebase/client'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
 
} from 'firebase/auth'
import { signIn, signUp, signUpWithGoogle } from '@/lib/actions/auth.action'

const signInSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

const signUpSchema = signInSchema.extend({
  name: z.string().min(2, { message: 'Name is required' }),
  confirmPassword: z.string().min(6, { message: 'Confirm your password' }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type AuthFormProps = {
  type: 'sign-in' | 'sign-up'
}

type SignInValues = z.infer<typeof signInSchema>
type SignUpValues = z.infer<typeof signUpSchema>

const AuthForm = ({ type }: AuthFormProps) => {
  const router = useRouter()
  const isSignUp = type === 'sign-up'
  const form = useForm<SignInValues | SignUpValues>({
    resolver: zodResolver(isSignUp ? signUpSchema : signInSchema),
    defaultValues: isSignUp
      ? { name: '', email: '', password: '', confirmPassword: '' }
      : { email: '', password: '' },
  })

  const onSubmit = async (values: any) => {
    const { name, email, password } = values
    try {
      if (type === 'sign-up') {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password
        })
        if (!result?.success) {
          toast.error(result?.message)
          return
        }
        toast.success('Account created successfully. Please sign in.')
        router.push('/sign-in')
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const idToken = await userCredential.user.getIdToken()

        if (!idToken) {
          toast.error('Sign in failed')
          return
        }

        await signIn({ email, idToken })
        toast.success('Signed in successfully.')
        router.push('/')
      }
    } catch (error: any) {
      toast.error(error.message || 'Something went wrong')
    }
  }

  const handleGoogleSignIn = async () => {
    
    try {
      const result = await signInWithPopup(auth, googleprovider)
      const user = result.user
      const idToken = await user.getIdToken()


   const response = await signUpWithGoogle({
    idToken,
      uid: user.uid,
      name: user.displayName ?? "",
      email: user.email ?? ""
    });

    if (!response.success) {
      toast.error(response.message);
      return;
    }

      toast.success('Signed in with Google!')
      router.push('/')
    } catch (error: any) {
      console.error('Google Sign-In Error:', error)
      toast.error(error.message || 'Google sign-in failed')
    }
  }

  return (
    <div className="max-w-md w-full mx-auto mt-12 p-8 bg-card rounded-2xl shadow">
     

      <Toaster position="top-center" richColors />

      <h2 className="text-2xl font-bold mb-6 text-center">
        {isSignUp ? 'Create an account' : 'Sign in to your account'}
      </h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {isSignUp && (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" autoComplete={isSignUp ? 'new-password' : 'current-password'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isSignUp && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirm password" autoComplete="new-password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <Button type="submit" className="w-full mt-2">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full mt-2"
            onClick={handleGoogleSignIn}
          >
            Continue with Google
          </Button>

          <div className="text-center mt-4">
            {isSignUp ? (
              <span className="text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/sign-in" className="text-primary-200 hover:underline font-semibold">Sign in</Link>
              </span>
            ) : (
              <span className="text-sm text-muted-foreground">
                Don&apos;t have an account?{' '}
                <Link href="/sign-up" className="text-primary-200 hover:underline font-semibold">Sign up</Link>
              </span>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}

export default AuthForm
