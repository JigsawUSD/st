
'use server';
/**
 * @fileOverview Flow para gerar ideias de receitas de papinhas para bebês.
 *
 * - generateRecipeIdea - Gera uma sugestão de receita simples baseada em ingredientes.
 * - RecipeIdeaInput - O tipo de entrada para a função.
 * - RecipeIdeaOutput - O tipo de saída para a função.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const RecipeIdeaInputSchema = z.object({
  ingredients: z.string().describe('Uma lista de ingredientes disponíveis, separados por vírgula.'),
});
export type RecipeIdeaInput = z.infer<typeof RecipeIdeaInputSchema>;

const RecipeIdeaOutputSchema = z.object({
  recipeSuggestion: z.string().describe('Uma sugestão de receita simples e saudável para um bebê, formatada como texto simples com quebras de linha para os passos. Inclua um título, ingredientes e um modo de preparo curto e direto.'),
});
export type RecipeIdeaOutput = z.infer<typeof RecipeIdeaOutputSchema>;


export async function generateRecipeIdea(input: RecipeIdeaInput): Promise<RecipeIdeaOutput> {
  return generateRecipeIdeaFlow(input);
}

const recipePrompt = ai.definePrompt({
  name: 'recipeIdeaPrompt',
  input: { schema: RecipeIdeaInputSchema },
  output: { schema: RecipeIdeaOutputSchema },
  prompt: `
    Você é um assistente de culinária especialista em alimentação infantil.
    Sua tarefa é criar uma sugestão de receita de papinha simples, saudável e segura para bebês com 6 meses ou mais, usando os ingredientes fornecidos.

    Ingredientes disponíveis: {{{ingredients}}}

    Crie uma receita que seja fácil de preparar.
    Formate a resposta com um título criativo para a receita, uma lista de ingredientes a serem usados (baseado nos que foram fornecidos) e um "Modo de Preparo" com passos curtos e numerados.
    A resposta deve ser em texto simples, usando \\n para quebras de linha. Não use markdown.
  `,
});


const generateRecipeIdeaFlow = ai.defineFlow(
  {
    name: 'generateRecipeIdeaFlow',
    inputSchema: RecipeIdeaInputSchema,
    outputSchema: RecipeIdeaOutputSchema,
  },
  async (input) => {
    const { output } = await recipePrompt(input);
    if (!output) {
      throw new Error('A IA não conseguiu gerar uma receita.');
    }
    return output;
  }
);

    
