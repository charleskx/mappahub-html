# Playbook de captacao de clientes - MappaHub

## Diagnostico rapido

O MappaHub resolve um problema bem especifico: empresas que tem pontos fisicos, parceiros, distribuidores, franquias, representantes ou clientes B2B espalhados no territorio, mas ainda controlam isso em planilha.

Como ainda nao ha clientes, a prioridade nao deve ser trafego pago amplo. A prioridade e conseguir conversas qualificadas, validar o discurso comercial e transformar os primeiros clientes em prova social.

## Posicionamento recomendado

Frase curta:

> Transformamos sua planilha de parceiros, distribuidores ou pontos de venda em um mapa online, filtravel e compartilhavel.

Promessa comercial:

> Em ate 1 dia, voce sai de uma planilha baguncada para um mapa organizado da sua rede, sem precisar de equipe tecnica.

Evitar vender como:

- "SaaS de mapas", porque parece tecnico demais.
- "Geocoding automatico", porque e funcionalidade, nao dor.
- "Dashboard geografico", porque pode soar generico.

Vender como:

- "Mapa de onde comprar"
- "Mapa de distribuidores"
- "Mapa da rede credenciada"
- "Mapa interno de representantes"
- "Mapa de franquias e unidades"

## ICPs prioritarios

### 1. Industrias com distribuidores e revendas

Sinais de bom fit:

- Site tem pagina "Onde comprar", "Revendas", "Distribuidores" ou "Representantes".
- Lista atual aparece em texto, PDF, tabela ou pagina desatualizada.
- Atua em varios estados.

Abordagem:

> Vi que voces tem uma rede de distribuidores/revendas e hoje essa informacao parece estar em lista ou pagina estatica. O MappaHub transforma essa base em um mapa online, com filtros e importacao por Excel. Posso montar um exemplo com alguns pontos de voces para mostrar como ficaria?

### 2. Franqueadoras e redes com unidades

Sinais de bom fit:

- Pagina de unidades/franquias.
- Muitas cidades.
- Expansao ativa.

Abordagem:

> Vi a rede de unidades de voces e pensei em uma melhoria simples: um mapa publico com filtros por cidade/estado e uma area interna para manter tudo atualizado por planilha. Posso te enviar um exemplo visual aplicado a rede de voces?

### 3. Associacoes, cooperativas e redes credenciadas

Sinais de bom fit:

- Membros, associados, pontos de atendimento ou prestadores credenciados.
- Busca por estado/cidade feita manualmente.

Abordagem:

> Muitas associacoes acabam mantendo a rede credenciada em planilhas ou paginas dificeis de atualizar. O MappaHub centraliza isso em um mapa compartilhavel, com controle do que fica publico e interno. Faz sentido eu te mostrar um exemplo?

### 4. Empresas B2B com representantes comerciais

Sinais de bom fit:

- Equipe comercial distribuida por territorio.
- Venda por representantes regionais.

Abordagem:

> Para empresas com representantes em varias regioes, uma dor comum e visualizar cobertura, sobreposicao e lacunas de atendimento. O MappaHub cria esse mapa a partir da planilha que voces ja usam. Posso te mostrar como ficaria com um exemplo simples?

## Oferta inicial para os 10 primeiros clientes

Use uma oferta mais consultiva do que self-service:

> Implantacao assistida gratuita para os 10 primeiros clientes: voce envia a planilha, nos ajudamos a configurar categorias, importar os dados e publicar o primeiro mapa.

Incentivo:

- 14 dias gratis continuam.
- Primeira importacao feita junto com o cliente.
- Se contratar anual, oferecer revisao da base e configuracao do mapa publico.

Evitar desconto agressivo no inicio. O mais valioso agora e aprendizado + casos reais.

## Mudancas recomendadas no site

Adicionar uma CTA secundaria:

> Quero uma demonstracao com minha planilha

Destino ideal:

- WhatsApp comercial, Calendly ou formulario simples.

Texto para uma secao curta:

> Tem uma planilha pronta? Envie uma amostra e mostramos como ela ficaria no mapa.

Campos do formulario:

- Nome
- Empresa
- Site da empresa
- Email ou WhatsApp
- Tipo de rede: distribuidores, franquias, lojas, representantes, credenciados, outros
- Quantidade aproximada de pontos

## Ponto de atencao: "parceiros ilimitados" + geocoding automatico + mapa publico

O discurso de "parceiros ilimitados" e forte comercialmente, mas precisa ser protegido. O risco aparece quando tres coisas crescem ao mesmo tempo:

- Muitos parceiros importados em massa.
- Geocoding automatico para todos os enderecos.
- Mapa publico recebendo muitas visitas.

Isso pode gerar custo variavel de geocoding, mapas, infraestrutura e suporte. Se o cliente pagar valor fixo baixo e usar volume muito alto, a margem pode desaparecer.

### Como corrigir sem enfraquecer a oferta

Manter a promessa comercial:

> Parceiros ilimitados para cadastro e gestao.

Adicionar uma regra de uso justo:

> Os planos incluem uso justo de geocoding, importacoes e visualizacoes de mapas publicos. Volumes muito altos podem exigir plano Business ou Enterprise.

Separar os limites tecnicos dos limites comerciais:

- Parceiros cadastrados: ilimitados.
- Usuarios: ilimitados.
- Geocoding automatico: franquia mensal por plano.
- Importacoes em massa: franquia mensal por plano.
- Visualizacoes do mapa publico: franquia mensal por plano.
- Volumes especiais: sob consulta.

Exemplo de estrutura:

| Item | Mensal | Business futuro |
|---|---:|---:|
| Parceiros cadastrados | Ilimitado | Ilimitado |
| Usuarios | Ilimitado | Ilimitado |
| Novos geocodings por mes | 2.000 | 10.000 |
| Reprocessamentos/importacoes grandes | Uso justo | Prioritario |
| Visualizacoes do mapa publico | 50.000/mes | 250.000/mes |
| SLA | Email | Prioritario |

Acao tecnica recomendada:

- Salvar coordenadas geocodificadas para nao reprocessar enderecos iguais.
- Reprocessar geocoding apenas quando o endereco mudar.
- Criar fila com limite por conta.
- Registrar consumo por conta: geocodings, importacoes, falhas e visualizacoes.
- Exibir aviso antes de importacoes grandes.
- Ter um plano Enterprise para alto volume.

Texto sugerido para FAQ:

> O cadastro de parceiros e usuarios e ilimitado. Para garantir estabilidade e preco justo para todos os clientes, geocoding automatico, importacoes em massa e visualizacoes de mapas publicos seguem uma politica de uso justo. Se sua operacao tiver volume muito alto, montamos um plano Business ou Enterprise adequado.

## Rotina semanal de prospeccao

Meta inicial:

- 100 empresas abordadas por semana.
- 20 respostas.
- 8 reunioes ou demonstracoes.
- 2 trials assistidos.
- 1 cliente pago.

Agenda:

- Segunda: montar lista de 100 empresas.
- Terca a quinta: enviar 30 a 40 abordagens por dia.
- Sexta: follow-up, reunioes e ajustes de discurso.

## Como montar a lista de leads

Buscas que tendem a encontrar bons alvos:

- "onde comprar" + industria + Brasil
- "nossos distribuidores" + segmento
- "revendas autorizadas" + segmento
- "rede credenciada" + associacao
- "encontre uma unidade" + franquia
- "representantes" + "estado"

Segmentos bons para comecar:

- Equipamentos industriais
- Materiais de construcao
- Produtos agro
- Energia solar
- Autopecas
- Cosmeticos profissionais
- Alimentos B2B
- Associacoes medicas/odontologicas
- Redes de clinicas
- Franquias regionais

## Mensagens prontas

### Email 1 - abordagem fria

Assunto: Mapa da rede de distribuidores da {empresa}

Oi, {nome}. Tudo bem?

Vi que a {empresa} trabalha com uma rede de {distribuidores/revendas/unidades} e queria te mostrar uma ideia simples.

Criei o MappaHub para transformar planilhas de parceiros em um mapa online, com filtros, importacao por Excel e link publico para clientes ou equipe comercial.

Se fizer sentido, posso montar uma demonstracao usando alguns pontos da propria {empresa}, sem custo. Em 15 minutos voce ve se ajuda ou nao.

Posso te enviar um exemplo?

### Follow-up 1

Oi, {nome}. Passando rapido para reforcar: a ideia nao e trocar o sistema de voces, e sim transformar a base que ja existe em Excel em um mapa facil de consultar e compartilhar.

Se voces tiverem uma planilha com nome + endereco dos pontos, ja da para demonstrar.

Faz sentido eu montar um exemplo?

### LinkedIn

Oi, {nome}. Vi que a {empresa} tem uma rede de {distribuidores/unidades/revendas}. Estou criando o MappaHub, que transforma planilhas desse tipo em mapas online com filtros e link publico. Posso te mostrar um exemplo aplicado ao caso de voces?

### WhatsApp curto

Oi, {nome}. Sou o Charles, criador do MappaHub. Vi que a {empresa} tem uma rede de {distribuidores/revendas/unidades}. Minha ferramenta transforma essa planilha em um mapa online com filtros e link publico. Posso montar uma demonstracao com alguns pontos de voces?

## Roteiro de demo

1. Perguntar: "Hoje voces controlam essa rede em planilha, sistema interno ou pagina do site?"
2. Perguntar: "Quem precisa consultar esse mapa: cliente final, time comercial ou operacao?"
3. Mostrar importacao por Excel.
4. Mostrar pins por categoria.
5. Mostrar mapa publico por link.
6. Fechar com proximo passo: "Se voce me mandar a planilha, eu configuro a primeira versao e voce valida no trial."

## Objeções comuns

### "Ja temos isso no site"

Resposta:

> Perfeito. O MappaHub pode justamente facilitar a manutencao. Em vez de editar pagina ou depender de tecnico, voces atualizam a base por Excel e o mapa publico acompanha.

### "Hoje esta em planilha e funciona"

Resposta:

> A planilha funciona para guardar dados. O mapa ajuda quando alguem precisa localizar, filtrar por regiao ou compartilhar com cliente/equipe. A ideia e complementar, nao substituir tudo.

### "Nao queremos expor dados internos"

Resposta:

> O MappaHub separa pontos publicos e internos. O link publico mostra apenas o que voces marcarem como publico.

### "Nao temos tempo para implantar"

Resposta:

> Para os primeiros clientes, eu mesmo ajudo na primeira importacao. Se a planilha tiver nome e endereco, ja conseguimos colocar uma primeira versao no ar rapidamente.

## Indicadores para acompanhar

Planilha simples de controle:

- Empresa
- Segmento
- URL
- Dor observada
- Contato
- Canal
- Data da primeira abordagem
- Status: enviado, respondeu, demo marcada, trial, pago, perdido
- Motivo da perda
- Proximo follow-up

Taxas iniciais esperadas:

- Resposta fria: 5% a 15%
- Demo por resposta: 30% a 50%
- Trial por demo: 40% a 70%
- Pago por trial assistido: 20% a 50%

## Primeiro sprint de 7 dias

Dia 1:

- Criar lista com 50 empresas de industrias com distribuidores.
- Separar 10 que tenham pagina "onde comprar" ruim ou desatualizada.

Dia 2:

- Montar 3 demos manuais com dados publicos dessas empresas.
- Tirar prints ou gravar video curto de 60 segundos.

Dia 3:

- Enviar 30 abordagens personalizadas.

Dia 4:

- Enviar mais 30 abordagens.
- Fazer follow-up nas primeiras.

Dia 5:

- Fazer demos.
- Oferecer implantacao assistida.

Dia 6:

- Ajustar pitch com base nas respostas.

Dia 7:

- Revisar numeros e repetir no segmento que respondeu melhor.
