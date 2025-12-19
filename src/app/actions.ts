'use server';

import {
  generateBabyFoodRecipe,
  GenerateBabyFoodRecipeInput,
  GenerateBabyFoodRecipeOutput,
} from '@/ai/flows/generate-baby-food-recipe';
import { z } from 'zod';

const ActionInputSchema = z.object({
  ingredients: z.string().min(3, { message: "Por favor, insira pelo menos um ingrediente." }),
  babyAgeMonths: z.coerce.number().min(4, { message: "A idade deve ser de pelo menos 4 meses." }).max(36, { message: "A idade máxima é 36 meses." }),
});

type ActionState = {
  success: boolean;
  data: GenerateBabyFoodRecipeOutput | null;
  error: string | null;
};

export async function generateRecipeAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  
  const rawInput = {
    ingredients: formData.get('ingredients'),
    babyAgeMonths: formData.get('babyAgeMonths'),
  };

  const validationResult = ActionInputSchema.safeParse(rawInput);

  if (!validationResult.success) {
    return {
      success: false,
      data: null,
      error: validationResult.error.errors.map((e) => e.message).join(', '),
    };
  }

  const input: GenerateBabyFoodRecipeInput = validationResult.data;

  try {
    const output = await generateBabyFoodRecipe(input);
    return {
      success: true,
      data: output,
      error: null,
    };
  } catch (error) {
    console.error('Error generating recipe:', error);
    return {
      success: false,
      data: null,
      error: 'Ocorreu um erro ao gerar a receita. Por favor, tente novamente.',
    };
  }
}
