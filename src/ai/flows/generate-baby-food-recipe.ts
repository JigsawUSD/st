'use server';

/**
 * @fileOverview Generates baby food recipes based on available ingredients and age appropriateness.
 *
 * - generateBabyFoodRecipe - A function that generates a baby food recipe.
 * - GenerateBabyFoodRecipeInput - The input type for the generateBabyFoodRecipe function.
 * - GenerateBabyFoodRecipeOutput - The return type for the generateBabyFoodRecipe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBabyFoodRecipeInputSchema = z.object({
  ingredients: z
    .string()
    .describe('A comma-separated list of available ingredients.'),
  babyAgeMonths: z
    .number()
    .describe('The age of the baby in months, used to ensure recipe appropriateness.'),
});
export type GenerateBabyFoodRecipeInput = z.infer<
  typeof GenerateBabyFoodRecipeInputSchema
>;

const GenerateBabyFoodRecipeOutputSchema = z.object({
  recipeName: z.string().describe('The name of the generated recipe.'),
  ingredients: z.string().describe('A list of ingredients required for the recipe.'),
  instructions: z.string().describe('Step-by-step instructions for preparing the recipe.'),
  ageAppropriateness: z
    .string()
    .describe('Explanation of why the recipe is appropriate for the given age.'),
});
export type GenerateBabyFoodRecipeOutput = z.infer<
  typeof GenerateBabyFoodRecipeOutputSchema
>;

export async function generateBabyFoodRecipe(
  input: GenerateBabyFoodRecipeInput
): Promise<GenerateBabyFoodRecipeOutput> {
  return generateBabyFoodRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBabyFoodRecipePrompt',
  input: {schema: GenerateBabyFoodRecipeInputSchema},
  output: {schema: GenerateBabyFoodRecipeOutputSchema},
  prompt: `You are a baby food recipe generator. A user will provide a list of ingredients they have available, and the age of their baby in months. You will respond with a safe and healthy baby food recipe using the available ingredients, which is safe for the baby's age. Make sure the recipe is nutritious and easy to prepare. Adhere to safe baby feeding guidelines.

Ingredients: {{{ingredients}}}
Baby's Age (months): {{{babyAgeMonths}}}

Consider common allergenic foods, and contraindicate if there are any concerns.

Respond in the following format:
Recipe Name: [recipe name]
Ingredients: [list of ingredients and quantities]
Instructions: [step-by-step instructions]
Age Appropriateness: [explanation of why the recipe is appropriate for the given age, noting any potential allergens or contraindications]`,
});

const generateBabyFoodRecipeFlow = ai.defineFlow(
  {
    name: 'generateBabyFoodRecipeFlow',
    inputSchema: GenerateBabyFoodRecipeInputSchema,
    outputSchema: GenerateBabyFoodRecipeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
