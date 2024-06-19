
# QuickDom
QuickDom est une bibliothèque légère pour créer et manipuler facilement des éléments du DOM en TypeScript.
Une solution pour réaliser simplement des single pages en vanilla js  
## Installation
Vous pouvez installer QuickDom via npm :
```sh
npm install @diyfr/quickdom
```
## Utilisation
### Importation
Pour utiliser QuickDom, commencez par importer la bibliothèque dans votre fichier TypeScript :
```typescript
import { QuickDom } from '@diyfr/quickdom';
/* OR */
import { qd } from '@diyfr/quickdom';
```
### Création d'un Élément
Vous pouvez créer un nouvel élément HTML avec des options personnalisées :
```typescript
// Création d'un div avec une classe et un id
const div = QuickDom.new('div', {
  id: 'myDiv',
  className: 'container'
});
// Ou utilisez l'alias qd pour une syntaxe plus concise
const button = qd('button', {
  className: 'btn btn-primary',
  id: 'submitBtn'
});
```
### Ajout d'Attributs Personnalisés
QuickDom permet d'ajouter des attributs personnalisés à vos éléments :
```typescript
const link = qd('a', {
  href: 'https://example.com',
  target: '_blank',
  rel: 'noopener noreferrer',
  'data-custom': 'value'
});
```
### Exemple Complet
Voici un exemple complet de création d'une structure HTML:
```typescript
const container = qd('div', {
  className: 'rounded-lg border bg-card text-card-foreground shadow-sm',
  id: 'myDiv'
});
const link = qd('a', {
  href: '/mylink.html',
  'aria-current': 'page',
  className: 'router-link-active router-link-exact-active flex flex-col p-4 space-y-3'
});
container.appendChild(link);
document.body.appendChild(container);
```
### API
#### `QuickDom.new`
```typescript
static new<K extends keyof HTMLElementTagNameMap>(name: K, options?: ElementOptions<HTMLElementTagNameMap[K]>): HTMLElementTagNameMap[K]
```
Crée un nouvel élément HTML.
**Paramètres** :
- `name` : Le nom de l'élément HTML (ex: 'div', 'span').
- `options` : Un objet contenant les attributs et options pour l'élément.
**Retourne** :
- Un élément HTML du type spécifié.
#### `ElementOptions`
```typescript
type ElementOptions<T extends HTMLElement> = Partial<T> & {
  classList?: string[];
  [key: string]: any;
}
```
Un type pour définir les options et attributs de l'élément HTML.
## Contributions
Les contributions sont les bienvenues ! Veuillez ouvrir une issue ou soumettre une pull request sur [GitHub](https://github.com/diyfr/quickdom/issues).
## Licence
QuickDom est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
