import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { LoginUser } from '@/api/login-user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signInForm = z.object({
  email: z.string().email(),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticateUser } = useMutation({
    mutationFn: LoginUser,
  })

  const navigate = useNavigate()

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticateUser({
        email: data.email,
        password: data.password,
      })
      toast.success('Usuário autenticado com sucesso!')
      navigate('/helpDesk')
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message ?? 'Erro desconhecido'
        toast.error(`${message}`)
      }
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Cadastre-se</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem vindo(a) ao seu HelpDesk
            </h1>
            <p className="text-sm text-muted-foreground">
              Contacte o suporte que precisar
            </p>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...register('password')} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Acessar Painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
