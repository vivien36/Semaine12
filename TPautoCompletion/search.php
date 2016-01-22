<?php
    
	$data = unserialize(file_get_contents('towns.txt')); // R�cup�ration de la liste compl�te des villes
	$dataLen = count($data);
	
	sort($data); // On trie les villes dans l'ordre alphab�tique
	
	$results = array(); // Le tableau o� seront stock�s les r�sultats de la recherche
	
	// La boucle ci-dessous parcourt tout le tableau $data, jusqu'� un maximum de 10 r�sultats
	
	for ($i = 0 ; $i < $dataLen && count($results) < 10 ; $i++) {
	if (stripos($data[$i], $_GET['s']) === 0) { // Si la valeur commence par les m�mes caract�res que la recherche
	
	array_push($results, $data[$i]); // On ajoute alors le r�sultat � la liste � retourner
	
	}
	}
	
	echo implode('|', $results); // Et on affiche les r�sultats s�par�s par une barre verticale |
	
	?>