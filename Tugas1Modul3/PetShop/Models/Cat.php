<?php
namespace PetShop\Models;

class Cat extends Pet {
    public function makeSound() {
        return "Meow! Meow!";
    }
}
