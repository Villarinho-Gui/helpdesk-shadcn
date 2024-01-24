import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerUser } from '@/api/register-user'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { signUpFormSchema } from './SignUpSchema'

type SignUpForm = z.infer<typeof signUpFormSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpFormSchema),
  })

  const { mutateAsync: registerUserFn } = useMutation({
    mutationFn: registerUser,
  })

  async function handleSignUp(data: SignUpForm) {
    try {
      await registerUserFn({
        name: data.name,
        email: data.email,
        password: data.password,
        sector: data.sector,
        extension: data.extension,
      })

      toast.success('Usuário cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response?.data.message ?? 'Erro desconhecido'
        toast.error(`${message}`)
      }
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer Login</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo(a) ao HelpDesk!
            </h1>
            <p className="text-sm text-muted-foreground">
              A plataforma de suporte técnico
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" type="text" {...register('name')} />
              {errors && (
                <span className="text-sm leading-relaxed text-rose-400">
                  {errors.name?.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" {...register('email')} />
              {errors && (
                <span className="text-sm leading-relaxed text-rose-400">
                  {errors.email?.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" {...register('password')} />
              {errors && (
                <span className="text-sm leading-relaxed text-rose-400">
                  {errors.password?.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="sector">Setor</Label>
              <Input id="sector" type="text" {...register('sector')} />
              {errors && (
                <span className="text-sm leading-relaxed text-rose-400">
                  {errors.sector?.message}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="extension">Ramal</Label>
              <Input
                id="extension"
                type="tel"
                {...register('extension')}
                maxLength={4}
              />
              {errors && (
                <span className="text-sm leading-relaxed text-rose-400">
                  {errors.extension?.message}
                </span>
              )}
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com os nossos{' '}
              <a href="" className="underline underline-offset-4">
                Termos de Serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
