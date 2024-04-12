# Rastreador de Gastos

## O que é o Rastreador de Gastos
O rastreador de gastos é um site onde você pode colocar todos os valores de seus gastos e indentificação de cada um (seu emoji), onde na tela principal, aparecerá o valor total de todos os gastos. Também é possível criar tags, remover tags, remover os gastos já adicionados e ativar o dark mode do site, onde irá mudar todas as telas. 

![Screenshot_180](https://github.com/Ryanzhin22/rastreadorDeGastos-NextJS/assets/103447125/9640f091-09a3-468a-ba19-cfb043366a86)

## Ferramentas utilizadas
-> React <br>
-> Next.JS <br>
-> Tailwind <br>
-> React Icons

## Problema
Devido ao grande uso de localStorage que eu fiz, houve diversos problemas com o build e não foi possível fazê-lo porque o localstorage é renderizado como client-component e o next faz primeiro a renderização dos server-components: O erro ocorre porque o código que acessa o localStorage está sendo executado em um contexto onde ele não está disponível, como no lado do servidor durante a renderização de páginas estáticas.
