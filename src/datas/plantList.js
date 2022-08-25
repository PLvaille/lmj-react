import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		light: 2,
		water: 3,
		cover: monstera,
		price: 15,
		size: 'moyenne',
		info:`Le genre Monstera comprend plus d'une centaine d'espèces de plantes épiphytes de la famille des Aracées, originaires des régions tropicales d'Amérique. Le monstera s'adapte au mi ombrage.`
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		light: 3,
		water: 1,
		cover: lyrata,
		price: 16,
		size: 'moyenne',
		info:`Ficus lyrata est une espèce de figuier de la famille des Moraceae. Elle est originaire d'Afrique de l'Ouest. Son habitat va de l'ouest du Cameroun à la Sierra Leone, dans la forêt tropicale pluvieuse.`
	},

	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		light: 1,
		water: 2,
		cover: pothos,
		price: 9,
		size: 'grande',
		info:`Plante d’ornement par excellence, la scindapsus pictus se caractérise par ses feuilles tachées de blanc. C’est une touche esthétique et exotique à apporter notamment dans votre espace intérieur ou extérieur. Très résistante et facile à entretenir, sa plantation est à la portée de tous les amateurs de jardinage.`
	},
	{
		name: 'calathea',
		category: 'classique',
		id: '4kk',
		light: 2,
		water: 3,
		cover: calathea,
		price: 20,
		size: 'moyenne',
		info:`Calathea est un genre de plantes monocotylédones appartenant à la famille des Marantaceae. Ce genre comprend aujourd'hui 56 espèces de plantes herbacées. De nombreuses espèces autrefois classées dans le genre Calathea sont aujourd'hui classées dans le genre Goeppertia`
	},
	{
		name: 'olivier',
		category: `d'extérieur`,
		id: '5pl',
		light: 3,
		water: 1,
		cover: olivier,
		price: 25,
		size: 'grande',
		info:`L’olivier est un arbre fruitier qui produit les olives, un fruit consommé sous diverses formes et dont on extrait une des principales huiles alimentaires, l'huile d'olive.`
	},

	{
		name: 'cactus',
		category: 'grasse',
		id: '8fp',
		light: 2,
		water: 1,
		cover: cactus,
		price: 6,
		size: 'petite',
		info:`Les Cactus, Cactées ou encore Cactacées (Cactaceae ) sont une famille de plantes à fleurs. Ce sont presque toutes des plantes grasses ou plantes succulentes, c'est-à-dire des plantes xérophytes qui stockent dans leurs tissus des réserves de « suc » pour faire face aux longues périodes de sécheresse.`
	},
	{
		name: 'basilique',
		category: `d'extérieur`,
		id: '7ie',
		light: 2,
		water: 3,
		cover: basil,
		price: 5,
		size: 'petite',
		info:`Le Basilic ou Basilic romain est une espèce de plantes herbacées thérophytes de la famille des Lamiacées, cultivée comme plante aromatique et condimentaire. La plante est parfois appelée Basilic commun, Basilic aux sauces, Herbe royale ou Grand Basilic`
	},
	{
		name: 'succulente',
		category: 'grasse',
		id: '9vn',
		light: 2,
		water: 1,
		cover: succulent,
		price: 8,
		size: 'petite',
		info:`Une plante succulente, appelée aussi malacophyte, est une plante charnue adaptée pour survivre dans des milieux arides du fait des caractéristiques du sol, du climat ou à forte concentration en sel.`
	},

	{
		name: 'menthe',
		category: `d'extérieur`,
		id: '6uo',
		light: 2,
		water: 2,
		cover: mint,
		price: 4,
		size: 'petite',
		info:`Les menthes forment un genre de plantes herbacées vivaces de la famille des Lamiacées, sous-famille des Nepetoideae, tribu des Mentheae, sous-tribu des Menthinae. Ce genre comprend de nombreuses espèces, dont beaucoup sont cultivées comme plantes aromatiques et condimentaires, ornementales ou médicinales.`
	}
]
