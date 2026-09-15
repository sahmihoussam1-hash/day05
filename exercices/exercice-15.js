/**
 * ─────────────────────────────────────────────────────────────
 * Jour 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function Sontanagrammes(mot1,mot2){
    mot1 = mot1.toLowerCase();
    mot2 = mot2.toLowerCase();

    if (mot1.length !== mot2.length){ 
        return false ;
        }

        let mot1Trie = mot1.split("").sort().join("");
        let mot2Trie = mot2.split("").sort().join("");

        return mot1Trie ===  mot2Trie ;
}
console.log(Sontanagrammes("chien","niche"))