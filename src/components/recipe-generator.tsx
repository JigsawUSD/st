'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { generateRecipeAction } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
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
    <Button type="submit" disabled={pending} size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-md transition-transform transform hover:scale-105 rounded-full text-base py-6">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Gerando Receita...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-5 w-5" />
          Gerar Receita Mágica
        </>
      )}
    </Button>
  );
}

export function RecipeGenerator() {
  const [state, formAction] = useFormState(generateRecipeAction, initialState);
  const { toast } = useToast();
  const { pending } = useFormStatus();

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
    <div className="mt-10 md:mt-12 max-w-4xl mx-auto">
      <Card className="shadow-xl border-2 border-primary/10 rounded-2xl">
        <form action={formAction}>
          <CardContent className="p-4 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
              <div className="space-y-4">
                <div className="text-left">
                  <Label htmlFor="ingredients" className="text-base md:text-lg font-semibold">Ingredientes Disponíveis</Label>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 mb-2">Liste os ingredientes que você tem em casa, separados por vírgula.</p>
                  <Textarea
                    id="ingredients"
                    name="ingredients"
                    placeholder="Ex: banana, aveia, maçã..."
                    className="min-h-[100px] md:min-h-[120px] text-sm md:text-base rounded-lg"
                    required
                  />
                </div>
                <div className="text-left">
                  <Label htmlFor="babyAgeMonths" className="text-base md:text-lg font-semibold">Idade do Bebê (meses)</Label>
                   <p className="text-xs md:text-sm text-muted-foreground mt-1 mb-2">Selecione a idade para garantir uma receita segura.</p>
                  <Select name="babyAgeMonths" defaultValue="6" required>
                    <SelectTrigger className="w-full text-sm md:text-base h-11 md:h-12 rounded-lg">
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

              <div className="bg-primary/5 rounded-lg p-4 md:p-6 min-h-[280px] md:min-h-[300px] border border-dashed border-primary/20 flex flex-col">
                <h3 className="text-base md:text-lg font-semibold text-foreground flex items-center gap-2">
                  <ChefHat className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                  Sua Receita Personalizada
                </h3>
                 {pending ? (
                   <div className="space-y-4 mt-4 flex-1">
                    <Skeleton className="h-5 w-3/4 bg-primary/10" />
                    <Skeleton className="h-3 w-full bg-primary/10" />
                    <Skeleton className="h-3 w-5/6 bg-primary/10" />
                    <Skeleton className="h-3 w-full bg-primary/10" />
                  </div>
                 ) : state.success && state.data ? (
                  <div className="mt-4 text-left space-y-3 text-sm text-foreground/90 flex-1">
                    <h4 className="text-lg md:text-xl font-bold text-primary">{state.data.recipeName}</h4>
                    <div>
                      <h5 className="font-semibold text-foreground">Ingredientes:</h5>
                      <p className="whitespace-pre-wrap text-muted-foreground text-xs md:text-sm">{state.data.ingredients}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Instruções:</h5>
                      <p className="whitespace-pre-wrap text-muted-foreground text-xs md:text-sm">{state.data.instructions}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Recomendação de Idade:</h5>
                      <p className="whitespace-pre-wrap text-muted-foreground text-xs md:text-sm">{state.data.ageAppropriateness}</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center flex-1 text-muted-foreground text-center p-4">
                    <p className="text-sm md:text-base">Sua receita gerada por IA aparecerá aqui!</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-card p-4 md:p-6 flex justify-center border-t">
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
