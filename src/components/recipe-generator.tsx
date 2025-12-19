'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { generateRecipeAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { ChefHat, Loader2, Sparkles } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const initialState = {
  success: false,
  data: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Gerando Receita...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Gerar Receita Mágica
        </>
      )}
    </Button>
  );
}

export function RecipeGenerator() {
  const [state, formAction] = useFormState(generateRecipeAction, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (!state.success && state.error) {
      toast({
        variant: 'destructive',
        title: 'Erro na Validação',
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <div className="mt-12 max-w-4xl mx-auto">
      <Card className="shadow-xl border-2 border-primary/20">
        <form action={formAction}>
          <CardContent className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="ingredients" className="text-lg font-medium">Ingredientes Disponíveis</Label>
                  <p className="text-sm text-muted-foreground mb-2">Liste os ingredientes que você tem em casa, separados por vírgula.</p>
                  <Textarea
                    id="ingredients"
                    name="ingredients"
                    placeholder="Ex: banana, aveia, maçã, cenoura..."
                    className="min-h-[120px] text-base"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="babyAgeMonths" className="text-lg font-medium">Idade do Bebê (meses)</Label>
                   <p className="text-sm text-muted-foreground mb-2">Selecione a idade do seu bebê para garantir uma receita segura.</p>
                  <Select name="babyAgeMonths" defaultValue="6" required>
                    <SelectTrigger className="w-full text-base h-12">
                      <SelectValue placeholder="Selecione a idade" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 15 }, (_, i) => i + 4).map(age => (
                         <SelectItem key={age} value={String(age)}>{age} meses</SelectItem>
                      ))}
                       <SelectItem value="19">19-24 meses</SelectItem>
                       <SelectItem value="25">25-36 meses</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 min-h-[200px] border border-dashed border-primary/20">
                <h3 className="text-lg font-semibold text-primary-foreground flex items-center gap-2">
                  <ChefHat className="h-6 w-6" />
                  Sua Receita Personalizada
                </h3>
                 {useFormStatus().pending ? (
                   <div className="space-y-4 mt-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                 ) : state.success && state.data ? (
                  <div className="mt-4 text-left space-y-4 text-sm text-foreground/80">
                    <h4 className="text-xl font-bold text-accent">{state.data.recipeName}</h4>
                    <div>
                      <h5 className="font-semibold text-foreground/90">Ingredientes:</h5>
                      <p className="whitespace-pre-wrap">{state.data.ingredients}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground/90">Instruções:</h5>
                      <p className="whitespace-pre-wrap">{state.data.instructions}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground/90">Recomendação de Idade:</h5>
                      <p className="whitespace-pre-wrap">{state.data.ageAppropriateness}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-48 text-muted-foreground text-center">
                    <p>Sua receita gerada por IA aparecerá aqui!</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-background/50 p-6 flex justify-center">
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
