import { z } from 'zod'

export const signUpFormSchema = z.object({
  name: z
    .string({ required_error: 'Esse campo é obrigatório' })
    .min(3, { message: 'O nome deve ter no mínimo 3 caracteres' }),
  email: z
    .string()
    .email({ message: 'Formato de e-mail inválido!' })
    .endsWith('@cinbal.com.br', { message: 'O e-mail precisa ser da Cinbal!' }),
  password: z.string().min(6, 'A senha precisa ter pelo menos 6 caracteres!'),
  sector: z
    .string({ required_error: 'Esse campo é obrigatório' })
    .min(2, { message: 'O setor deve ter no mínimo 2 caracteres!' }),
  extension: z
    .string({ required_error: 'Esse campo é obrigatório' })
    .min(4, { message: 'Adicione um ramal!' }),
})
