# 🔎 Jour 05 — Recherche

[← Tableau de bord](./README.md) · [Exercices guidés →](./02-guides.md)

> [!NOTE]
> Le but n'est pas de copier une définition. Prépare une explication simple et un exemple personnel.

## Mode d'emploi

1. Recherche la notion.
2. Reformule la réponse avec tes propres mots.
3. Ajoute un petit exemple lorsque c'est possible.
4. Coche la question une fois que tu peux l'expliquer sans lire.

## Questions


### Question 01

> En JavaScript, une chaîne de caractères (String) est-elle "mutable" (modifiable) ou "immuable" (immutable) ? Que cela implique-t-il quand on utilise `.toUpperCase()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---En JavaScript, une chaîne de caractères (String) est immuable (immutable).La méthode ne modifie pas la variable sur laquelle elle est appelée. La valeur initiale reste inchangée en mémoire

### Question 02

> Quelle est la différence entre `.slice()`, `.substring()` et `.substr()` ? Lequel est considéré comme déprécié ou moins recommandé ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---.substring() est similaire à .slice(), mais elle n'accepte pas les index négatifs.
.toUpperCase() ne modifie pas le texte d'origine, elle crée et retourne une nouvelle chaîne en mémoire. .substr() est déprécié et ne doit plus être utilisé.

### Question 03

> Quelle méthode permet de transformer la chaîne `"A,B,C"` en un tableau `["A", "B", "C"]` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---la methode qui nos permet de transformer une chaine en un tableau est .split()

### Question 04

> Quelle est la différence entre `.indexOf()` et `.search()` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---la grande difference est que .indexOf() cherche une chaine brute alors que .search() cherche a l'aide d'une expression reguliere.

### Question 05

> À quoi servent les **Template Literals** (les backticks `` ` ``) par rapport aux simples quotes `'` ou doubles `"` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---

### Question 06

> Comment vérifier de manière moderne si une chaîne *commence* par un mot spécifique ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---pour verifier de maniere moderne si une chaine commence par un mot specifique en utilisela  méthode .startsWith()

### Question 07

> Quelle méthode permet d'enlever les espaces vides au début et à la fin d'une chaîne, mais pas au milieu ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---la methode permet d'enlever les espaces vides au debut et a la fin d'une chaine mais non pas au milieu .trim()

### Question 08

> Quelle est la différence de comportement entre `.replace("a", "b")` et `.replaceAll("a", "b")` ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---.replace("a", "b") que la toute première occurrence dans la chaine,alors que .replaceAll("a", "b")` remplace absolument toutes les occurrences.

### Question 09

> Qu'est-ce qu'une Expression Régulière (Regex) et pourquoi l'utilise-t-on avec les strings ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**

> À compléter avec mes propres mots.

---est une suite de caractères qui forme un motif de recherche,on l'utilise avec les strings car il aide a valider un format,extraire des motifs complexes et remplacer intelligemment du texte

### Question 10

> Peut-on utiliser la propriété `.length` sur une chaîne vide `""` ? Quel sera le résultat ?

- [ ] J'ai recherché et compris la notion.

**Ma réponse :**
oui bien sur mais le resultas ca sera 0

> À compléter avec mes propres mots.


## ✅ Validation de la recherche

- [ ] Je peux expliquer au moins trois réponses sans lire mes notes.
- [ ] J'ai noté les notions que je dois encore clarifier.
