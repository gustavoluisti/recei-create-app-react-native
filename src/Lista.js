import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ReceitaItem from './ReceitaItem';

export default class Lista extends Component {

	static navigationOptions = {
        title:'Receitando',
	};

	constructor(props) {
		super(props);
		this.state = {
			list:[
				{
					key:'01',
					nome:"Hambúrguer de Feijão Preto",
					por:'Presunto vegetariano',
					descricao:'Hambúrgueres veganos são opções bem gostosas e práticas para o dia a dia, podendo ser servidos em lanches, com saladas ou refeições. Este leva ingredientes acessíveis e fáceis de serem encontrados.',
					rendimento:6,
					preparo:12,
					imagem:'https://i.pinimg.com/564x/3e/44/be/3e44be24fbe44bb994042fc5651cee8c.jpg',
					ingredientes:[
						{key:'1', txt:'1 xícara (de chá) de feijão preto cru'},
						{key:'2', txt:'1/3 de xícara (de chá) de cebola bem picada'},
						{key:'3', txt:'2 dentes alho médios bem picados'},
						{key:'4', txt:'1 colher (de sopa) de orégano desidratado'},
						{key:'5', txt:'2 colheres (de sopa) de azeite'},
						{key:'6', txt:'1/2 xícara (de chá) de salsinha picada'},
						{key:'7', txt:'1 colher (de sopa) de suco de limão'},
						{key:'8', txt:'Sal a gosto'},
						{key:'9', txt:'Pimenta a gosto'},
						{key:'10', txt:'1/3 de xícara (de chá) de aveia em flocos finos'},
						{key:'11', txt:'1/3 de xícara (de chá) de farinha de trigo integral'},
					],
					modo:[
                        {key:'1', txt:'Coloque o feijão preto cru em uma vasilha,'},
                        {key:'2', txt:'cubra com o triplo de água e deixe de molho por 12 horas. '},
                        {key:'3', txt:'Escorra, lave, coloque em uma panela de pressão e cubra com 2 dedos de água. '},
                        {key:'4', txt:'Deixe cozinhar por cerca de 15 minutos depois que pegar pressão e desligue.'},
                        {key:'5', txt:'Retire o feijão cozido com o auxílio de uma escumadeira (deixe escorrer todo o caldo, '},
                        {key:'6', txt:'para o hambúrguer não pedir muita farinha depois) e coloque em uma vasilha.'},
                        {key:'7', txt:'Amasse com um garfo, mas se você quiser, pode deixar alguns grãos inteiros para dar textura ao hambúrguer.'},
                        {key:'8', txt:'Adicione a cebola, o alho, o orégano, o suco de limão, o azeite, a salsinha picada, '},
                        {key:'9', txt:'tempere com sal e pimenta a gosto e misture.'},
                        {key:'10', txt:'Adicione a aveia em flocos finos e a farinha integral. '},
                        {key:'11', txt:'Misture bem e caso necessário adicione mais farinha, até a massa ficar modelável.'},
                        {key:'12', txt:'Modele hambúrgueres e frite em uma frigideira antiaderente com um fio de óleo'},
                        {key:'13', txt:'em fogo médio, até os dois lados ficarem bem douradinhos.'},
                        {key:'14', txt:'Está pronto!'},
					]
				},
				{
					key:'02',
					nome:"Bolo de Fubá Vegano de Caneca",
					por:'presunto vegetariano',
					descricao:'Este bolo de fubá fofinho é ótimo.',
					rendimento:1,
					preparo:27,
					imagem:'https://i.pinimg.com/564x/2f/3b/70/2f3b7049bf3bbc94628c7064c325a6e5.jpg',
					ingredientes:[
                        {key:'1', txt:'3 colheres (de sopa) de farinha de trigo '},
                        {key:'2', txt:'(para uma versão sem glúten, use 1'},
                        {key:'3', txt:'e 1/2 colher de sopa de farinha de arroz)'},
                        {key:'4', txt:'2 colheres (de sopa) de fubá de milho'},
                        {key:'5', txt:'1 e 1/2 colher (de sopa) de açúcar '},
                        {key:'6', txt:'demerara ou cristal'},
                        {key:'7', txt:'Uma pitada de sal'},
                        {key:'8', txt:'1 colher (de chá) de fermento químico em pó'},
                        {key:'9', txt:'2 colheres (de sopa) de óleo vegetal '},
                        {key:'10', txt:'(coco, girassol, milho…)'},
                        {key:'11', txt:'3 colheres (de sopa) de água filtrada'},
                        {key:'12', txt:'1/4 de colher (de chá) de vinagre branco '},
                        {key:'13', txt:'ou de maçã, ou suco de limão'},
                        {key:'14', txt:'1/4 de xícara (de chá) de goiabada + 1/4 '},
                        {key:'15', txt:'de xícara (de chá) de água (opcional)'},
						
					],
					modo:[
                        {key:'1', txt:'Antes de tudo, derreta goiabada a gosto'},
                        {key:'2', txt:'coloquei a goiabada picada em uma panela'},
                        {key:'3', txt:'juntamente com a água e deixei cozinhar em fogo baixo por cerca de 5 minutos'},
                        {key:'4', txt:'Geralmente uso na quantidade 1:1'},
                        {key:'5', txt:'Depois que estiver derretida, reserve.'},
                        {key:'6', txt:'Em uma caneca de cerâmica com no mínimo 360 ml'},
                        {key:'7', txt:'coloque a farinha de trigo, o fubá,'},
                        {key:'8', txt:'o açúcar, adicione uma pitadinha de sal e o fermento químico em pó'},
                        {key:'9', txt:'Misture bem, até ficar uniforme.'},
                        {key:'10', txt:'Adicione o óleo vegetal, a água e o vinagre ou suco de limão.'},
                        {key:'11', txt:'Mexa bem, até obter uma mistura uniforme,'},
                        {key:'12', txt:'e leve ao micro-ondas para assar em potência alta por 2 minutos e meio.'},
                        {key:'13', txt:'O tempo pode variar conforme o seu aparelho'},
                        {key:'14', txt:'Para assar no forno, pré aqueça o forno a 210ºC'},
                        {key:'15', txt:'coloque a caneca sobre uma assadeira e asse por cerca de 20 minutos'},
                        {key:'16', txt:'ou até você espetar uma faca e ela sair limpa.'},
                        {key:'17', txt:'Sirva com a goiabada derretida e está pronto!'},
						
					]
				},
				{
					key:'03',
					nome:"Pão de minuto com cebola, parmesão, gergelim",
					por:'Receitas Vegans',
					descricao:'Receita rápida feita com amor.',
					rendimento:16,
					preparo:45,
					imagem:'https://i.pinimg.com/564x/72/b7/62/72b762d2a2801e4a44cd59cfb1d11c24.jpg',
					ingredientes:[
						{key:'1', txt:'1/2 cebola picada'},
						{key:'2', txt:'Manteiga ou azeite'},
						{key:'3', txt:'250 g de farinha de trigo (quase 2 xícaras)'},
						{key:'4', txt:'50 g de queijo parmesão ralado'},
						{key:'5', txt:'1 colher (chá) de fermento químico'},
						{key:'6', txt:'1 boa pitada de sal'},
						{key:'7', txt:'125 ml de leite'},
                        {key:'8', txt:'50 ml de água (aproximadamente)'},
                        {key:'9', txt:'gergelim'},
                        {key:'11', txt:'ervas da provence (ou outros tempero que prefira, como manjericão e orégano)'},
					],
					modo:[
						{key:'1', txt:'Comece pre-aquecendo o forno numa temperatura média.'},
						{key:'2', txt:'Depois, refogue a cebola no azeite até que fique dourada'},
						{key:'3', txt:'Reserve. Num recipiente junte a farinha, o queijo ralado, o sal, o gergelim, as ervas e o fermento.'},
						{key:'4', txt:'Misture e depois abra, ao centro, um buraco no qual despejará o leite e a cebola'},
                        {key:'5', txt:'Vá mexendo e acrescentando água até ficar homogêneo e pegajoso.'},
                        {key:'6', txt:'Pingue algumas bolas de massa na assadeira untada com óleo.'},
                        {key:'7', txt:'Quando ficarem dourados, com as pontas sapecadas, é hora de tirar. Você pode comer com patês ou manteiga.'},
                        {key:'8', txt:'Vá mexendo e acrescentando água até ficar homogêneo e pegajoso.'},
					]
				},
				{
					key:'04',
					nome:"Mac and Cheese (macarrão e queijo) vegan",
					por:'sociedade vegan',
					descricao:'Receita rápida feita com amor.',
					rendimento:2,
					preparo:45,
					imagem:'https://i.pinimg.com/564x/c1/c8/59/c1c85977d4637bcfc4fad099dcd3d71f.jpg',
					ingredientes:[
						{key:'1', txt:'300gr de macarrão'},
						{key:'2', txt:'225gr de batata amarela'},
						{key:'3', txt:'15gr de cenoura'},
						{key:'4', txt:'50gr de cebola picada'},
						{key:'5', txt:'3/4 de copo de água da cozedura dos vegetais'},
						{key:'6', txt:'75gr castanhas de cajus'},
						{key:'7', txt:'1/4 de copo de leite de coco'},
                        {key:'8', txt:'4 colheres de sopa cheias, de levedura de cerveja'},
                        {key:'9', txt:'1 colher de sopa de sumo de limão'},
                        {key:'11', txt:'1 pitada de paprica'},
                        {key:'12', txt:'alho em pó a gosto'},
                        {key:'13', txt:'pimenta a gosto'},
					],
					modo:[
						{key:'1', txt:'Cozer o macarrão al dente, de acordo com as instruções da embalagem, escorrer a água e reservar à parte'},
						{key:'2', txt:'Numa panela à parte cozer a batata, a cenoura e a cebola, até ficarem macios para transformar em puré. O tempo de cozedura varia dependendo da espessura dos vegetais.'},
						{key:'3', txt:'Num processador de alimentos colocar os vegetais cozidos e 3/4 de água da cozedura, juntamente com os restantes ingredientes, deixando o macarrão de parte.'},
						{key:'4', txt:'Processar até obter uma textura suave.'},
                        {key:'5', txt:'Misturar o molho de queijo vegano sobre o macarrão e servir.'},
                        
					]
				},
				{
					key:'05',
					nome:"Beringela recheada com cogumelos",
					por:'sociedade vegan',
					descricao:'Receita rápida feita com amor.',
					rendimento:2,
					preparo:45,
					imagem:'https://i.pinimg.com/564x/3e/cd/b2/3ecdb2ecda7793ae68176a52af798dcb.jpg',
					ingredientes:[
						{key:'1', txt:'Azeite'},
						{key:'2', txt:'1 cebola média picada'},
						{key:'3', txt:'200gr de Tofu'},
						{key:'4', txt:'2 beringelas médias'},
						{key:'5', txt:'200gr de cogumelos'},
						{key:'6', txt:'Natas de Soja'},
						{key:'7', txt:'Molho de Soja'},
                        {key:'8', txt:'Pimenta moída'},
                        {key:'9', txt:'4 Batatas Médias'},
					],
					modo:[
						{key:'1', txt:'Beringelas'},
						{key:'2', txt:'Pré-aquecer o forno a 180º.'},
						{key:'3', txt:'Cortar as beringelas ao meio e retirar a polpa com cuidado para não cortar a pele da beringela. Colocar as Metades no forno, durante a preparação do recheio.'},
						{key:'4', txt:'Fritar a cebola com o azeite, até ficar dourada.'},
                        {key:'5', txt:'Cortar a polpa das beringelas em cubos pequenos e juntar ao tofu, assim como os cogumelos.'},
                        {key:'6', txt:'Adicionar molho de soja. Deixar cozinhar até que a polpa das beringelas fique tenra.'},
                        {key:'7', txt:'Se necessário juntar um copo de água.'},
                        {key:'8', txt:'Rechear as metades. Colocar as natas a cobrir as beringelas e levar ao forno durante 25 minutos, mais 5 minutos a gratinar.'},
                        {key:'9', txt:'Batatas'},
                        {key:'10', txt:'Cortar as batatas aos cubos, temperar com sal. Colocar no forno ao mesmo tempo que as metades das beringelas.'},
                        
					]
				},
				{
					key:'06',
					nome:"Creme de amendoim caseiro",
					por:'reino veggie',
					descricao:'Receita rápida feita com amor.',
					rendimento:8,
					preparo:45,
					imagem:'https://i.pinimg.com/564x/ae/6c/4f/ae6c4f1ca936daeb1176ad91cdbaba69.jpg',
					ingredientes:[
						{key:'1', txt:'2 xícaras de amendoim torrados, sem casca'},
						{key:'2', txt:'1 pitada boa de sal'},
						{key:'3', txt:'4 a 5 colheres de sopa de açúcar (usei mascavo)'},
						{key:'4', txt:'4 a 5 colheres de sopa de óleo de milho e creme vegetal'},
					],
					modo:[
						{key:'1', txt:'Torre o amendoim numa assadeira, depois tire as cascas.'},
						{key:'2', txt:'Se você não quiser se dar ao trabalho, pode usar amendoim sem torrar e sem pele, como já se vende no supermercado. '},
						{key:'3', txt:'Coloque num processador e vá acrescentando os ingredientes aos poucos, depois que o amendoim já tiver se tornado uma pasta.'},
						{key:'4', txt:'Ele não fica super cremoso como o que compramos pronto, pois a máquina de uma empresa é muito mais potente, no entanto, quanto mais você bater na sua, mais ele ficará.'},
                        {key:'5', txt:'Você pode passar em pães ou comer com frutas. Vou tentar fazer uns quadradinhos com ele para ver como fica depois.'},
                        
					]
				},
				{
					key:'07',
					nome:"Quiche de Alho Poró",
					por:'Receitas Vegans',
					descricao:'Receita rápida feita com amor.',
					rendimento:2,
					preparo:45,
					imagem:'https://i.pinimg.com/564x/5e/11/d4/5e11d4936a28f2ea56417a095f29780d.jpg',
					ingredientes:[
						{key:'1', txt:'Para a massa'},
						{key:'2', txt:'2 xícaras de grão de bico cozido'},
						{key:'3', txt:'1 colher de sopa de azeite'},
						{key:'4', txt:'Sal a gosto'},
						{key:'5', txt:'Para o recheio '},
						{key:'6', txt:'1 caixinha de creme de leite (200 gramas)'},
						{key:'7', txt:'3 ovos'},
                        {key:'8', txt:'1 alho poró (somente o talo fatiado)'},
                        {key:'9', txt:'100 g de queijo minas picado em cubinhos'},
                        {key:'11', txt:'Pimenta do reino moída na hora'},
					],
					modo:[
						{key:'1', txt:'Com o grão de bico já cozido (8 horas de molho na água filtrada + 20 minutos na panela de pressão)'},
						{key:'2', txt:'vamos levá-lo ao processador até obter uma massa bem cremosa. '},
						{key:'3', txt:'Para dar “liga” na massa, usei 1 colher de sopa de azeite.'},
						{key:'4', txt:'Unte e enfarinhe uma fôrma de fundo removível (usei uma forma de 20 cm). '},
                        {key:'5', txt:'Depois, espalhe a massa sobre a fôrma, apertando com os dedos até que a massa esteja distribuída igualmente. '},
                        {key:'6', txt:'Minha massa cobriu o fundo e um pedaço das laterais.'},
                        {key:'7', txt:'Dependendo do tamanho da sua forma, você consegue cobrir mais as paredes.'},
                        {key:'8', txt:'Em uma tigela, misture os ovos, o creme de leite, o alho poró cortado em fatias bem fininhas e o queijo minas picado. '},
                        {key:'9', txt:'Misture tudo e despeje sobre a massa.'},
                        {key:'10', txt:'Leve ao forno pré-aquecido por 10 minutos, a 200 ºC. Asse por mais ou menos 40 minutos.'},
                        {key:'11', txt:'Dica: a massa fica um pouco úmida então acredito que levá-la ao forno por 5 minutinhos antes de rechear deixe a massa mais sequinha. '},
                        {key:'12', txt:'Aqui assei tudo junto e achei bem gostoso!'},
                        {key:'13', txt:'Você pode substituir o alho poró por espinafre, brócolis'},
                        
                        
					]
				},
				{
					key:'08',
					nome:"Tortinha de Banana Vegan",
					por:'dani noce',
					descricao:'Estas tortinhas ficam uma delícia e são super fáceis de fazer. Caso não quiser decorar com chantilly, você pode apenas salpicar canela e colocar uma rodelinha de banana.',
					rendimento:6,
					preparo:32 ,
					imagem:'https://i.pinimg.com/564x/69/6c/36/696c36750446ef2bb9b35a331736f2c5.jpg',
					ingredientes:[
                        {key:'01', txt:'Massa'},
						{key:'1', txt:'1 xícara (chá) de FARINHA DE TRIGO INTEGRAL'},
						{key:'2', txt:'2 colheres (sopa) de ÁGUA'},
						{key:'3', txt:'2 colheres (sopa) de MARGARINA VEGETAL sem sal'},
						{key:'4', txt:'1 colher (sopa) de AÇÚCAR DEMERARA'},
						{key:'5', txt:'Recheio'},
						{key:'6', txt:'2 xícaras (chá) de BANANAS NANICAS MADURAS E AMASSADAS (cerca de 7 bananas)'},
						{key:'7', txt:'Suco de um LIMÃO TAITI'},
                        {key:'8', txt:'½ xícara (chá) de AÇÚCAR DEMERARA'},
                        {key:'9', txt:'RODELAS DE BANANA'},
                        {key:'11', txt:'CANELA EM PÓ'},
                        {key:'12', txt:'CHANTILLY VEGANO de sua preferência'},
					],
					modo:[
						{key:'1', txt:'Em uma vasilha, misture a farinha integral, a água, a margarina e o açúcar até virar uma massa lisa e uniforme. '},
						{key:'2', txt:'Embrulhe esta massa em plástico e leve à geladeira por pelo menos meia hora.'},
						{key:'3', txt:'Amasse as bananas e coloque em uma panela antiaderente em fogo médio, juntamente com o limão e o açúcar. '},
						{key:'4', txt:' Deixe cozinhando até as bananas estarem bem molinhas e com a cor escura, com aspecto de geleia, o que vai levar cerca de 10 minutos.'},
                        {key:'5', txt:'Mexa sempre, tomando cuidado para não grudar no fundo da panela. Reserve.'},
                        {key:'6', txt:'Pré-aqueça o forno a 240ºC e distribua a massa em forminhas de mini cupcake ou empadinhas.'},
                        {key:'7', txt:'DICA: Evite deixar a massa grossa, pois corre o risco de ficar crua no meio.'},
                        {key:'8', txt:'Faça furinhos com um garfo e leve para assar por cerca de 12 minutos, ou até estarem firmes e crocantes.'},
                        {key:'9', txt:'Retire as massas das forminhas e coloque o recheio.'},
                        {key:'10', txt:'Caso for decorar com chantilly, prepare-o conforme a embalagem.'},
                        {key:'11', txt:'Em seguida cubra as tortinhas com o auxílio de um bico de confeiteiro.'},
                        {key:'12', txt:'Salpique canela e decore com uma rodela de banana.'},
                        {key:'13', txt:'OBS: a quantidade de tortinhas dependerá do tamanho da forminha e da quantidade de massa que você colocar.'},
                        
					]
				},
				{
					key:'09',
					nome:"Coxinha de Jaca",
					por:'sociedade vegan',
					descricao:'E na cozinha da Dona Dina tudo é aproveitado, apenas a casca da jaca é descartada. “A semente cozida eu coloco na massa do pão”, conta. A receita de coxinha de jaca (confira abaixo) pode render ate 50 porções..',
					rendimento:50,
					preparo:45,
					imagem:'https://i.pinimg.com/564x/79/8e/b7/798eb7e4ccaa9abe96b088d01c001d56.jpg',
					ingredientes:[
						{key:'1', txt:'Massa'},
						{key:'2', txt:'500 gramas de farinha de trigo'},
						{key:'3', txt:'1 kg de polpa de jaca verde cozida e triturada'},
						{key:'4', txt:'500 ml de leite'},
						{key:'5', txt:'500 ml de água'},
						{key:'6', txt:'1 colher de sopa de alho amassado com pimenta dedo-de-moça e pimenta-do-reino branca em grão'},
						{key:'7', txt:'100 gramas de margarina.'},
                        {key:'8', txt:'Recheio'},
                        {key:'9', txt:'1/2 cebola picada'},
                        {key:'11', txt:'1 colher de sopa de salsinha picada'},
                        {key:'12', txt:'3 colheres de sopa de cebolinha picada'},
                        {key:'13', txt:'2 colheres de chá de açafrão misturado com sa'},
                        {key:'14', txt:'1 colher de sopa de dente de alho amassado com pimenta dedo-de-moça e pimenta-do-reino branca em grão'},
                        {key:'15', txt:'1 colher de sopa de alho frito'},
                        {key:'16', txt:'3 colheres de sopa de óleo de soja'},
                        {key:'17', txt:'300 gramas de jaca cozida e desfiada'},
                        {key:'18', txt:'Ingredientes para empanar:'},
                        {key:'19', txt:'1 kg de farinha de rosca'},
                        {key:'20', txt:'3 ovos batidos misturados com água'},
					],
					modo:[
						{key:'1', txt:' Preparo do recheio'},
						{key:'2', txt:'A jaca verde libera uma espécie de cola, que é conhecida como visgo.'},
						{key:'3', txt:'Por isso é preciso untar as mãos e a faca com óleo.'},
						{key:'4', txt:'Retire a casca e separe a parte fibrosa (que será desfiada) para fazer o recheio e a polpa para a massa.'},
                        {key:'5', txt:'Para preparar o recheio adicione o óleo na panela quente, acrescente o alho com as pimentas'},
                        {key:'6', txt:'a cebola, o açafrão, a polpa da jaca desfiada, um pouco de água e tampe até amolecer, '},
                        {key:'7', txt:'mexendo de vez em quando. Depois é a vez do alho frito, da salsinha e da cebolinha.'},
                        {key:'8', txt:'Coe o caldo e reserve.'},
                        {key:'9', txt:'Modo de preparo da massa:'},
                        {key:'10', txt:'Cozinhe a polpa da jaca até amolecer, amasse com a ajuda de um garfo e reserve.'},
                        {key:'11', txt:'Ferva o leite misturado com a água, adicione depois a manteiga e aquele caldo coado que estava reservado, lembra?'},
                        {key:'12', txt:' Acrescente a farinha e mexa até obter uma massa homogênea.'},
                        {key:'13', txt:' Por fim, a polpa da jaca cozida e amassada.'},
                        {key:'14', txt:'Depois que esfriar é hora de rechear e empanar as coxinhas. '},
                        {key:'15', txt:'Frite em óleo bem quente e está pronta a receita.'},
                        
					]
				},
				{
					key:'10',
					nome:"Rabanada",
					por:'presunto vegetariano',
					descricao:'Existem várias versões de rabanada: com leite condensado, frita, assada. Depois de vários testes com estas versões, e até mesmo com o condensado de soja, cheguei a este resultado. Esta foi a rabanada mais gostosa que fiz, e minha receita adaptei do site da Sociedade Vegetariana Brasileira, onde frita-se a rabanada em uma calda de açúcar. ',
					rendimento:10,
					preparo:25,
					imagem:'https://i.pinimg.com/564x/ac/c7/a1/acc7a187c65fe7433fe6338ea85b4ccc.jpg',
					ingredientes:[
						{key:'1', txt:'2 xícaras (de chá) de leite vegetal – eu usei o leite de amêndoas'},
						{key:'2', txt:'1 colher (de chá) de essência de baunilha'},
						{key:'3', txt:'2 pães franceses (ou pão vegano de sua preferência)'},
						{key:'4', txt:'1/4 de xícara (de chá) de açúcar demerara'},
						{key:'5', txt:'1/2 colher (de chá) de canela em pó'},
						{key:'6', txt:'3 colheres (de sopa) de água'},
						{key:'7', txt:'2 colheres (de sopa) de óleo vegetal'},
                        {key:'8', txt:'Farinha de trigo para empanar'},
                        {key:'9', txt:'Açúcar e canela a gosto para polvilhar'},
					],
					modo:[
						{key:'1', txt:'Em uma tigela, coloque o leite vegetal e a essência de baunilha, misture e reserve.'},
						{key:'2', txt:'Corte os dois pães franceses em fatias com cerca de 2cm e molhe as levemente no leite vegetal, escorrendo bem para sair o excesso de líquido.'},
						{key:'3', txt:'Não deixe as fatias muito molhadas, pois elas podem “derreter” quando fritar.'},
						{key:'4', txt:'Coloque farinha de trigo em um pratinho, e empane as fatias umedecidas, batendo para tirar o excesso.'},
                        {key:'5', txt:'Em uma frigideira grande e antiaderente, coloque o açúcar, a canela, a água e o óleo vegetal, misture e deixe ferver. '},
                        {key:'6', txt:'É importante deixar o fogo baixo.'},
                        {key:'7', txt:'Quando começar a borbulhar coloque as fatias de pão e deixe-as fritando na calda por cerca de dois minutos.'},
                        {key:'8', txt:'virando-as para dourar do outro lado também.'},
                        {key:'9', txt:'Verifique se os dois lados estão dourados e desligue. '},
                        {key:'10', txt:'Polvilhe com açúcar e canela, ou só canela, a gosto. '},
                        {key:'11', txt:'Está pronto!'},
                        {key:'12', txt:'*Se sua frigideira não for muito grande e não couber todas as fatias, repita o processo. '},
                        {key:'13', txt:' Você pode dividir a quantidade dos ingredientes da calda para cara vez que for fazer'},
                        {key:'14', txt:'e depois acrescentar açúcar na hora de polvilhar; ou fazer as caldas com a mesma quantidade da receita para as duas frigideiras,'},
                        {key:'15', txt:'e polvilhar apenas com canela no final.'},
                        
					]
				},
				{
					key:'11',
					nome:"Hambúrguer de Lentilha",
					por:'presunto vegetariano',
					descricao:'Compartilho com vocês mais uma opção de hambúrguer vegano! Este hambúrguer de lentilha é super saboroso e nutritivo! Assim como nas outras receitas que ensinei aqui, você pode adicionar os temperos de sua preferência.',
					rendimento:5,
					preparo:120,
					imagem:'https://i.pinimg.com/564x/f1/5b/8b/f15b8b1bb0e4327667719ddde7a744a7.jpg',
					ingredientes:[
						{key:'1', txt:'1 xícara (de chá) de lentilha crua'},
						{key:'2', txt:'4 xícaras (de chá) de água'},
						{key:'3', txt:'1 dente de alho grande picado'},
						{key:'4', txt:'1/2 xícara (de chá) de cebola picada'},
						{key:'5', txt:'1/2 xícara (de chá) de cheiro verde picado (salsinha e cebolinha)'},
						{key:'6', txt:'1 colher (de sopa) de azeite'},
						{key:'7', txt:'1 colher (de chá) de sal (ou mais, se preferir)'},
                        {key:'8', txt:'Cominho a gosto'},
                        {key:'9', txt:'Cerca de 1/2 xícara (de chá) de farinha de trigo integral'},
					],
					modo:[
						{key:'1', txt:'Antes de tudo, cozinhe a lentilha. '},
						{key:'2', txt:'Coloque a lentilha, juntamente com 4 xícaras de água na panela de pressão e deixe cozinhando em fogo médio até pegar pressão'},
						{key:'3', txt:'em seguida abaixe o fogo e deixe cozinhando por mais 15 minutos. Escorra e coloque em uma vasilha.'},
						{key:'4', txt:'Recomendo deixar a lentilha de molho por 8 horas antes de cozinhar'},
                        {key:'5', txt:'em seguida cozinhe ela na pressão por apenas 5 minutos '},
                        {key:'6', txt:'depois que pegar pressão ou um pouquinho mais, '},
                        {key:'7', txt:'caso for necessário, até ela ficar macia.'},
                        {key:'8', txt:'Adicione o alho, a cebola, o cheiro verde, o azeite, o sal, tempere com cominho a gosto, e misture.'},
                        {key:'9', txt:'Acrescente a farinha de trigo integral aos poucos, até dar o ponto de modelar.'},
                        {key:'10', txt:'(Evite colocar muita farinha, senão seu hambúrguer perderá o sabor da lentilha).'},
                        {key:'11', txt:'Divida a massa em 5 partes iguais e passe um fio de óleo nas mãos. '},
                        {key:'12', txt:'Modele os hambúrgueres com cerca de 1,5cm de espessura.'},
                        {key:'13', txt:'Coloque os hambúrgueres em uma forma untada ou com papel manteiga e leve ao freezer por uma hora.'},
                        {key:'14', txt:'Retire com cuidado, frite em uma frigideira antiaderente com um fio de óleo,'},
                        {key:'15', txt:'e vire quando estiver bem douradinho.'},
                        {key:'16', txt:'Sirva como preferir, eu monte um lanche com pão integral, alface, tomate e cebola.  '},
                        {key:'17', txt:'Dicas'},
                        {key:'18', txt:'Uso xícaras e colheres medidoras nas receitas, para as medidas ficarem mais precisas! A xícara tem 240ml, enquanto uma colher de sopa tem 15ml.'},
                        {key:'19', txt:'Se quiser deixar seu hambúrguer mais crocante, empane com farinha de rosca.'},
                        {key:'20', txt:'Dá para usar farinha de trigo branca e amido de milho também, adicione aos poucos até dar o ponto de modelar.'},
                        {key:'21', txt:'Para congelar: depois que os hambúrgueres ficaram 1 hora no freezer, retire-os da assadeira, coloque em um potinho fechado e deixe congelado. Consumi depois de 2 semanas e ainda estava ótimo!'},
                        {key:'22', txt:'Eu assei a 240ºC até ficar levemente dourado (foram cerca de 40 minutos), em uma forma untada e dei uma regadinha com azeite.'},
                        
					]
				},
				{
					key:'12',
					nome:"Torta de Rabanada",
					por:'presunto vegetariano',
					descricao:'Aprenda a preparar uma deliciosa torta de rabanada, que é feita com sobras de pães amanhecidos e não leva leite nem ovo na composição. Esta é uma ótima opção para o café da manhã ou lanche da tarde!',
					rendimento:6,
					preparo:120,
					imagem:'https://i.pinimg.com/564x/b3/dc/5f/b3dc5f767690b6734be2aa6f58e5314a.jpg',
					ingredientes:[
						{key:'1', txt:'2 colheres (de sopa) de sementes de linhaça'},
						{key:'2', txt:'6 colheres (de sopa) de água'},
						{key:'3', txt:'4 colheres (de sopa) de açúcar '},
						{key:'4', txt:'demerara ou cristal (para salpicar)'},
						{key:'5', txt:'1 colher (de chá) de canela em pó (para salpicar)'},
						{key:'6', txt:'3 pães franceses médios bem picados (cerca de 200g)'},
						{key:'7', txt:'1/3 de xícara (de chá) de castanha-do-Para picada'},
						{key:'8', txt:'1/3 de xícara (de chá) de uvas passas'},
						{key:'9', txt:'2 bananas nanicas cortadas em rodelas'},
						{key:'10', txt:'2 xícaras (de chá) de leite de amêndoas '},
						{key:'11', txt:'2 colheres (de sopa) de açúcar '},
						{key:'11', txt:'demerara ou cristal'},
						{key:'12', txt:'1 colher (de chá) de essência de baunilha'},
						{key:'13', txt:'1 colher (de sopa) de amido de milho'},
						
					],
					modo:[
						{key:'1', txt:'Em um liquidificador coloque a linhaça e bata até triturar bem.'},
						{key:'2', txt:'Adicione a água, bata rapidamente para misturar e deixe de molho por 15 minutos.'},
						{key:'3', txt:'Pré-aqueça o forno a 210ºC e unte bem uma assadeira antiaderente com óleo (eu usei o de coco).'},
						{key:'4', txt:'Misture as 4 colheres de açúcar demerara (ou cristal) com a canela em pó e salpique metade sobre a assadeira.'},
                        {key:'5', txt:'Pique os pães em pedaços pequenos e coloque sobre a assadeira. '},
                        {key:'6', txt:'Adicione a castanha-do-Para picada e as uvas passas.'},
                        {key:'7', txt:'Se gostar, acrescente as bananas cortadas em rodelas. Reserve.'},
                        {key:'8', txt:'Coloque no liquidificador (junto com a linhaça hidratada) o leite de amêndoas,'},
                        {key:'9', txt:'as 2 colheres de açúcar, a essência de baunilha e o amido de milho.'},
                        {key:'10', txt:'Bata bem e em seguida jogue sobre os ingredientes da assadeira.'},
                        {key:'11', txt:'Ajeite com uma colher e salpique o restante do açúcar com canela por cima.'},
                        {key:'12', txt:'Leve para assar por cerca de 40 minutos ou até formar uma crosta douradinha por cima'},
                        {key:'13', txt:'Eu servi com sorvete de banana natural. '},
                        {key:'14', txt:' Bati em um processador 2 bananas nanicas cortadas em rodelas congeladas,'},
                        {key:'15', txt:' ate obter um creme uniforme. '},
                        {key:'16', txt:'Está pronto!'},
                        
					]
				}
			]
		};

        this.clicou = this.clicou.bind(this);
	}

    clicou(item) {
        this.props.navigation.navigate('Receita', item);
    }


	render() {
		return (
			<View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item})=><ReceitaItem data={item} onPress={()=>{
                        this.clicou(item);
                    }} /> }
                />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
        flex:1,
        backgroundColor:'#FFF',
	}
});






