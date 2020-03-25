# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).


Quelques petites questions :

- Résumer en une phrase l'intérêt de Material UI: Gagner du temps avec des composants qui suivent le concencus actuel des interfaces web tout en ayant le possibilité de les modifiés facilement.

- Comment importer `material-ui` dans un fichier ?: il faut importer les different composant de material ui depuis le module @material-ui.

- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ?: Elle peut utiliser MuiThemeProvider qui permet de créer des themes facilement.

- A quoi sert `createMuiTheme` ?: Il permet de personaliser un partie des composant de material-ui.

- A quoi correspond `palette` ?: Il permet de personaliser les couleurs

- Comment re-définir des propriétés ?: avec la clé overrides de l'objet createMuiTHeme

- A quoi vous fait penser `withStyle` ? Comment l'utiliser ?: Sa me fait pensé à du css passé en javascript (ex: el.style.color = 'blue'). On peut l'utiliser directement dans class name en faisant className={style.bg}, on peut aussi en fair un HOC. 

- Reproduire les deux boutons rouge et bleu présentées dans la vidéo.: https://github.com/Yoon-Dev/tmp-button.git


## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ?: C'est du css généré par le javascript

- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ?:  C'est une nouvelle feature de l'es6 qui permet d'intégrer plus facilement du code javascript à une string (ex: `Hello ${word}`)

- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?

sans => styled.button(["color: lightsalmon"])

avec =>
let color = 'lightsalmon'
styled.button`color: ${color}`

- Comment utilise-t-on les props dans cette librarie ?: On utilise un HOC nommé ThemeProvider dans lequel on pass un attribut theme qui contient un objet javascript contentant le css. On peut ensuite retrouvé ces même propriété css en faisant props.theme.exemple.css

- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.: https://github.com/Yoon-Dev/tmp-button.git

- Quelles sont les fonctions du contexte de styled-components ? il y a le HOC withTheme, ou alors la fonction  themeContext, qui utlise le useContext natif de react


## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
Activer l'authentification anonyme dans la console de Firebase.

### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes des composants (telles que setState) et celles des fonctions ?

Réponse: 

ecrire un boutton sous form de function
const btn = props =>{
    return(
        <button />
    )
}
ecire un boutton sous forme de class 
class btn extends Component{
    render(){
        return(
            <button />
        )
    }
}

equivalence class function: 
le state de la class equivaux à useState. les functions componentDidMount, componentDidUnmount etc.. sont lié à useEffect, se hook contient un tableau de dépendense pour savoir quand appellé ou non la function. On peut mettre plusieur useEffect dans un même composant. La function component didUnMount est géré dans la partie clear du useEffect. Il est trompeur de mettre des variables de state dans un useEffect car le comportement est souvent peu prévisible. On peut alors utilisé un useRef qui ferra réference à la variable state. Il existe un multitude de hook, il est conseillé de faire un seul hook par composant en utilsant un hook personnalisé.


- Comment récupérer les props dans une fonction ?
Réponse
const composant = props => {
    console.log(props)   
}
comme cela
- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?

Réponse:
Les provider sont:
- UserProvider
il partage toute les données relatifs à un utilisateur (si il est authentifier etc...)
- GameProvide
il partage les informations du jeu pour un joueur au reste de l'application, il fait des requette à la base de données. 
- MasterGameProvider
il partage les données relative au jeu (la partie) en général, il avertit si un joueur est présent dans plusieur partie en même temps.
    

- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.
Réponse:

- la page start avec comme path "/"
permet de créer ou de rejoindre une partie

- la page end vec comme path "/end"
permet à la fin d'une partie de montrer les gagnants

- la page join avec comme path "/join"
permet de rejoindre une partie

- la page create avec comme path "/create"
permet  de créer et de recuperer le code de partage de la partie, elle permet également de la démarrer

- la page night avec comme path "/night"
permet de dire que c'est la nuit.. elle est assez vide pour l'instant

- la page resultpage avec comme path "/vote/results" 
permet d'afficher les résultats du vote, elle affiche un message si un joueur arrive sur cette page par inadvertance

- la page castpage avec comme path "/vote/cast"
permet de retourner une page vide mais j'imagine que c'est ici que l'on devra faire le systeme de vote

- la page alive avec comme path "/alive"
permet d'afficher notre nom pour l'instant

- la page dead avec comme path "/dead"
permet au joueur de savoir quand il est mort


- la page spell avec comme path "/spell"
permet au joueur qui joue la sorcière de pouvoir utiliser ses sorts


- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?

Réponse:
car les pages utilise les provider GameProvider et MasterGameProvider et ses deux provider instancie sur leur hook verifie la varialbe loading par défault à true, Ensuite la provider verifie si loading est true alors elle renvoie une div avec le texte "Chargement du master game en cours". On change la valeur de loading avec la méthode onSnapchot qui est activé lors du clique sur le boutton du formulaire de la page CodePage

- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.

Réponse:
c'est la fonction gameContext qui crée un objet context natif  de react

- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.

Réponse:
chaque champs à une fonction qui s'execute sur l'event javascript natif "change". C'est evenement représente un changement de la valeur d'un champ. La function que cette évenement déclenche est la constante définite sur un useState, qui permet de changer la valeur de la variable d'état. (const [valeur, function-qui-change-la-valeur-de-valeur] = useState(etat-initial))

### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.


### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?
- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.
- A votre avis, à quoi sert useEffect ?
- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?
- Décrire les trois valeurs de retour de `UseUser`.
- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?

### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

