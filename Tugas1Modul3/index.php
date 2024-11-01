<?php

require 'vendor/autoload.php';

use PetShop\PetShop;
use PetShop\Models\Dog;
use PetShop\Models\Cat;

$petShop = new PetShop("Happy Paws Pet Shop");

// Membuat hewan peliharaan baru
$dog = new Dog("Buddy", 3);
$dog->reduceHealth(10);

$cat = new Cat("Whiskers", 2);
$cat->reduceHealth(15);

// Menambah hewan ke dalam toko
$petShop->addPet($dog);
$petShop->addPet($cat);

echo $petShop . "\n";

foreach ($petShop->getPets() as $pet) {
    echo "<br>Nama: " . $pet->getName() . "\n";
    echo "<br>Usia: " . $pet->getAge() . " tahun\n";
    echo "<br>Kesehatan: " . $pet->getHealth() . "%\n";
    echo "<br>Suara: " . $pet->makeSound() . "\n";
    echo "<br>-------------------------\n";
}

$dog->increaseHealth(5); 
echo "<br>\nSetelah penambahan kesehatan:\n";
echo "Kesehatan " . $dog->getName() . ": " . $dog->getHealth() . "%\n";

$cat->increaseHealth(5);
echo "<br>\nSetelah penambahan kesehatan:\n";
echo "Kesehatan " . $cat->getName() . ": " . $cat->getHealth() . "%\n";