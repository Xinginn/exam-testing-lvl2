# Questionnaire 

### Objectif des tests unitaires
Quel est l'objectif principal des tests unitaires ?
   - A) Tester l'intégration entre plusieurs composants
   - **B) Vérifier le comportement d'une unité de code isolée**
   - C) Valider l'expérience utilisateur
   - D) Tester les performances du système

### Utilisation de Gherkin
Gherkin est principalement utilisé pour :
   - A) Écrire des tests unitaires
   - **B) Décrire le comportement attendu dans un format compréhensible par tous**
   - C) Documenter le code source
   - D) Analyser les performances des tests

### Principe d'isolation
Expliquez en quoi consiste le principe d'isolation dans les tests unitaires et pourquoi il est important.
**Les tests unitaires doivent tester la plus petite subdivision de test possible (par exemple une fonctionpure), afin de pouvoir isoler les bugs quand ils apparaissent et faciliter leur correction.**

### Origine du BDD
Le BDD est une extension du :
   - A) Waterfall
   - B) **Test Driven Development**
   - C) Extreme Programming
   - D) Scrum

### Fonction des tests d'intégration
Les tests d'intégration vérifient principalement :
   - A) Le fonctionnement isolé de chaque composant
   - B) **L'interaction entre différents composants ou modules**
   - C) L'expérience utilisateur globale
   - D) La vitesse d'exécution du code

### Structure Gherkin
Expliquez la structure d'un scénario Gherkin et donnez un exemple concret.
**Un scenario Gherkin doit décrire une fonctionnalité du point de vue de l'utilisateur. Il ne doit pas se soucier des détails de l'implémentation.**
Exemple:
    - Etant connecté en tant qu'utilisateur admin,
    - En consultant la liste des utilisateurs,
    - Je peux verrouiller le compte d'un utilisateur,
    - Je suis averti de la bonne execution de la requête, et je reçois un mail de confirmation


### Mocks en tests unitaires
Dans le contexte des tests unitaires, que sont les "mocks" ?
   - A) Des erreurs volontairement introduites pour vérifier la robustesse du code
   - B) **Des objets qui simulent le comportement de dépendances réelles**
   - C) Des tests qui échouent intentionnellement
   - D) Des interfaces utilisateur simulées

### Objectif des tests end-to-end
Les tests end-to-end visent à :
   - A) Vérifier le fonctionnement d'un composant isolé
   - B) **Tester l'application de bout en bout du point de vue de l'utilisateur**
   - C) Mesurer uniquement les performances de l'application
   - D) Remplacer tous les autres types de tests

### Cycle TDD
Expliquez en détail le cycle Red-Green-Refactor du TDD et ce qui se passe à chaque étape.
**Red: Ecrire un test correspondant à la specification.
Green: Ecrire du code le plus simple possible (eventuellement mauvais ou peu maintenable) permettant de passer le test
Refactor: Ameillorer, refactoriser le code écrit afin de le faire correspondre aux standard, de le rendre maintenable, etc.**

### Caractéristiques d'un bon test unitaire
Quelle est la caractéristique idéale d'un bon test unitaire ?
    - A) Il doit être complexe pour couvrir tous les cas
    - B) **Il doit être rapide à exécuter, isolé et répétable**
    - C) Il doit tester plusieurs fonctionnalités à la fois
    - D) Il doit nécessiter une configuration manuelle avant chaque exécution

### Mots-clés de Gherkin
Quels sont les mots-clés principaux de Gherkin ?
    - A) Test, Code, Validate
    - B) Setup, Execute, Verify, Teardown
    - C) **Feature, Scenario, Given, When, Then**
    - D) Describe, It, Expect, Assert

### Tests unitaires vs tests d'intégration
Quelles sont les principales différences entre les tests unitaires et les tests d'intégration ?
**Les test unitaires verifient des fractions de codes simples et isolés. Les tests d'intégration vérifient la bonne interaction de ces composants entre eux.**

### Nom du cycle TDD
Le cycle TDD classique est connu sous le nom de :
    - A) Plan-Do-Check-Act
    - B) **Red-Green-Refactor**
    - C) Build-Measure-Learn
    - D) Test-Code-Deploy

### Focus des tests fonctionnels
Les tests fonctionnels se concentrent sur :
    - A) Le code source interne
    - B) Les interactions entre composants
    - C) **Le comportement du système par rapport aux spécifications**
    - D) La performance du système sous charge

### BDD et communication d'équipe
Comment le BDD peut-il améliorer la communication entre les équipes techniques et les équipes métier ?

### Avantage principal du TDD
Quel est l'avantage principal du TDD ?
    - A) Il réduit le temps de développement global
    - B) Il garantit l'absence totale de bugs
    - C) **Il favorise un design modulaire et des interfaces claires**
    - D) Il élimine le besoin de documentation

### Avantages et défis des tests end-to-end
Quels sont les avantages et les défis spécifiques liés aux tests end-to-end par rapport aux autres types de tests ?
**Les tests end-to-end fournissent généralement le plus haut niveau de confiance car ils vérifient des fonctionnalités de bout en bout, en simulant le comportement réél des utilisateurs. Ils sont généralement les plus facile à mettre en place sur une application existante.
En revanche, ils peuvent être assez lent à executer.**

### Format des scénarios BDD
Quel est le format typique d'un scénario BDD ?
    - A) Si-Alors
    - B) **Étant donné-Quand-Alors**
    - C) Qui-Quoi-Où-Quand
    - D) Pour-Pendant-Après

### Avantages et limites des tests unitaires
Décrivez les avantages et les limites des tests unitaires dans un projet de développement logiciel.

### Fonctionnalité de réutilisation dans Gherkin
Quelle est la fonctionnalité de Gherkin qui permet de réutiliser des étapes communes à plusieurs scénarios ?
    - A) Hooks
    - B) Background
    - C) Scenario Outline
    - D) Tags

### Responsabilité des tests fonctionnels
Qui est généralement responsable de l'écriture et de l'exécution des tests fonctionnels ?
    - A) Les développeurs uniquement
    - B) Les testeurs QA uniquement
    - C) **Les développeurs et les testeurs QA**
    - D) Les utilisateurs finaux

### Moment d'écriture du code en TDD
Dans le TDD, à quel moment écrit-on le code de production ?
    - A) Avant d'écrire les tests
    - B) **Après avoir écrit les tests mais avant de les exécuter**
    - C) Après avoir exécuté les tests et constaté leur échec
    - D) Après que tous les tests aient réussi

### Outils pour tests end-to-end
Quel outil est couramment utilisé pour les tests end-to-end d'applications web ?
    - A) JUnit
    - B) Mockito
    - C) **Playwright**
    - D) NUnit

### Différences entre BDD et TDD
En quoi le BDD diffère-t-il du TDD en termes d'approche et d'objectifs ?

### Défis des tests d'intégration
Quels défis sont fréquemment rencontrés lors de la mise en place de tests d'intégration ?
    - A) La difficulté à isoler les composants
    - B) La lenteur d'exécution des tests
    - C) **La difficulté à simuler certaines dépendances**
    - D) Toutes les réponses ci-dessus

### Caractéristiques d'un bon test end-to-end
Quelle est la caractéristique d'un bon test end-to-end ?
    - A) Il doit tester toutes les fonctionnalités en une seule fois
    - B) **Il doit simuler avec précision le comportement réel des utilisateurs**
    - C) Il doit être exécuté uniquement en production
    - D) Il doit être modifié fréquemment

### Défis de l'adoption du TDD
Quels sont les défis couramment rencontrés lors de l'adoption du TDD dans une équipe, et comment pourriez-vous les surmonter ?

### Frameworks de tests unitaires
Lequel de ces frameworks n'est PAS utilisé pour les tests unitaires ?
    - A) JUnit
    - B) NUnit
    - C) **Selenium**
    - D) Vitest

### Rôles dans le processus BDD
Quels rôles sont généralement impliqués dans le processus BDD ?
    - A) Uniquement les développeurs
    - B) Développeurs et testeurs
    - C) Développeurs, testeurs et product owners
    - D) **Développeurs, testeurs, product owners et parties prenantes métier**

### Maintenance des tests end-to-end
Comment géreriez-vous la maintenance des tests end-to-end pour une application qui évolue rapidement ?

### Inconvénients des tests fonctionnels
Quel est le principal inconvénient des tests fonctionnels ?
    - A) Ils sont trop simples pour détecter des bugs complexes
    - B) **Ils sont généralement lents et coûteux à exécuter**
    - C) Ils ne peuvent pas être automatisés
    - D) Ils nécessitent peu de connaissances du domaine

### Intégration de Gherkin en agile
Comment intégreriez-vous Gherkin dans un processus de développement agile ? Quels seraient les avantages ?

### Principes du TDD
Lequel des principes suivants n'est PAS associé au TDD ?
    - A) Écrire le test minimum qui échoue
    - B) Écrire le code minimum qui fait passer le test
    - C) Refactoriser le code après chaque test réussi
    - D) **Écrire tous les tests à la fin du développement**

### Différences entre tests fonctionnels et autres tests
En quoi les tests fonctionnels diffèrent-ils des tests unitaires et d'intégration en termes d'approche et d'objectifs ?

### Approche combinant TDD, BDD et Gherkin
Quelle approche combine naturellement TDD, BDD et Gherkin ?
    - A) Extreme Programming
    - B) **Specification By Example**
    - C) Scrum
    - D) Kanban

### Organisation des tests fonctionnels
Décrivez comment vous organiseriez les tests fonctionnels pour une application web de e-commerce.

### Pyramide de tests
Quelle est la pyramide de tests classique, du bas vers le haut ?
    - A) Tests E2E, Tests fonctionnels, Tests d'intégration, Tests unitaires
    - B) **Tests unitaires, Tests d'intégration, Tests fonctionnels, Tests E2E**
    - C) Tests fonctionnels, Tests unitaires, Tests d'intégration, Tests E2E
    - D) Tests unitaires, Tests fonctionnels, Tests d'intégration, Tests E2E

### Stratégie de test optimale
Comment détermineriez-vous la stratégie de test optimale pour un projet, en considérant les différents types de tests abordés dans ce questionnaire ?

### Quelle est l'erreur récurente qui peut être faite lors de test end 2 end ? (Je l'ai répété pas mal de fois)
**Il est facile de tomber dans le piège d'une simple reproduction des actions de l'utilisateurs sans faire de véritables vérifications et assertions.**
